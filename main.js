(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* Split the hero headline into words so each can rise in. */
  $$('[data-split]').forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.setAttribute('aria-label', el.textContent.trim());
    el.innerHTML = words
      .map((w, i) => `<span class="w" aria-hidden="true"><span style="--i:${i}">${w}</span></span>`)
      .join(' ');
  });

  /* Sticky nav shadow. */
  const topbar = $('.topbar');
  const onScroll = () => topbar && topbar.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Section reveal, once. */
  const seen = new Set();
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting || seen.has(e.target)) return;
        seen.add(e.target);
        e.target.classList.add('in-view');
        $$('[data-count]', e.target).forEach(countUp);
        io.unobserve(e.target);
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
  );
  $$('[data-view]').forEach((el) => io.observe(el));

  function countUp(el) {
    const to = Number(el.dataset.count);
    if (reduce || !Number.isFinite(to)) return;
    const start = performance.now();
    const dur = 900;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    el.textContent = '0';
    requestAnimationFrame(tick);
  }

  /* Nav scroll spy. */
  const spy = $('[data-spy]');
  if (spy) {
    const links = $$('a', spy);
    const targets = links.map((a) => $(a.getAttribute('href'))).filter(Boolean);
    const spyIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === `#${e.target.id}`));
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    targets.forEach((t) => spyIo.observe(t));
  }

  /* CV menus. */
  const cvs = $$('[data-cv]');
  const closeAll = (except) =>
    cvs.forEach((c) => {
      if (c === except) return;
      c.classList.remove('open');
      $('button', c).setAttribute('aria-expanded', 'false');
    });
  cvs.forEach((cv) => {
    const btn = $('button', cv);
    const items = $$('[role="menuitem"]', cv);
    const open = (focus = true) => {
      closeAll(cv);
      cv.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      if (focus) items[0] && items[0].focus();
    };
    const close = () => {
      cv.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    };
    btn.addEventListener('click', () => (cv.classList.contains('open') ? close() : open(false)));
    cv.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { close(); btn.focus(); }
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (!cv.classList.contains('open')) return open();
        const i = items.indexOf(document.activeElement);
        const n = e.key === 'ArrowDown' ? (i + 1) % items.length : (i - 1 + items.length) % items.length;
        items[n].focus();
      }
    });
    items.forEach((a) => a.addEventListener('click', () => setTimeout(close, 150)));
    cv._open = open;
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('[data-cv]')) closeAll(); });

  /* "Download the full CV" link opens the nearest CV menu. */
  $$('[data-cv-open]').forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = $('.closing [data-cv]') || cvs[0];
      if (!target) return;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
      setTimeout(() => target._open(), reduce ? 0 : 450);
    })
  );

  /* Copy email + toast. */
  const toast = $('.toast');
  let toastTimer;
  const showToast = (msg) => {
    if (!toast) return;
    $('span', toast).textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  };
  $$('[data-copy]').forEach((btn) =>
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
        showToast('Email copied');
      } catch {
        const ta = document.createElement('textarea');
        ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        const ok = document.execCommand && document.execCommand('copy');
        ta.remove();
        showToast(ok ? 'Email copied' : text);
      }
    })
  );

  /* Magnetic buttons, pointer devices only. */
  if (!reduce && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    $$('[data-magnet]').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        el.style.transform = `translate(${dx * 6}px, ${dy * 6}px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  /* Cash forecast chart on the project page. */
  const chart = $('[data-chart]');
  if (chart) {
    const W = 640, H = 300, padL = 68, padR = 24, padT = 24, padB = 40;
    const x0 = padL, x1 = W - padR;
    const yMin = 40, yMax = 100;
    const y = (v) => padT + (H - padT - padB) * (1 - (v - yMin) / (yMax - yMin));
    const days = 30;
    const x = (d) => x0 + ((x1 - x0) * d) / days;
    const safety = 75;
    const svgNS = 'http://www.w3.org/2000/svg';
    const mk = (tag, attrs, text) => {
      const n = document.createElementNS(svgNS, tag);
      Object.entries(attrs).forEach(([k, v]) => n.setAttribute(k, v));
      if (text != null) n.textContent = text;
      return n;
    };
    const svg = mk('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-labelledby': 'chart-title' });
    svg.appendChild(mk('title', { id: 'chart-title' }, 'Cash forecast. AED 85k on 25 Sep falls to AED 55k on 30 Sep, below the AED 75k safety line.'));
    [50, 60, 70, 80, 90, 100].forEach((v) => {
      svg.appendChild(mk('line', { class: 'grid', x1: x0, x2: x1, y1: y(v), y2: y(v) }));
      svg.appendChild(mk('text', { class: 'axis', x: x0 - 10, y: y(v) + 4, 'text-anchor': 'end' }, `AED ${v}k`));
    });
    svg.appendChild(mk('line', { class: 'base', x1: x0, x2: x1, y1: y(yMin), y2: y(yMin) }));
    svg.appendChild(mk('line', { class: 'safe', x1: x0, x2: x1, y1: y(safety), y2: y(safety) }));
    svg.appendChild(mk('text', { class: 'lbl', x: x1, y: y(safety) - 8, 'text-anchor': 'end' }, 'Safety line AED 75k'));
    svg.appendChild(mk('text', { class: 'axis', x: x(0), y: H - 14, 'text-anchor': 'start' }, '25 Sep'));
    svg.appendChild(mk('text', { class: 'axis', x: x(5), y: H - 14, 'text-anchor': 'middle' }, '30 Sep'));
    svg.appendChild(mk('text', { class: 'axis', x: x(30), y: H - 14, 'text-anchor': 'end' }, '+30 days'));

    /* Only the two confirmed points are drawn: 25 Sep AED 85k and 30 Sep, the lowest point for the chosen option. */
    const area = mk('path', { class: 'area' });
    const line = mk('path', { class: 'line draw' });
    const dot0 = mk('circle', { class: 'dot', r: 4, cx: x(0), cy: y(85) });
    const dot1 = mk('circle', { class: 'dot', r: 4 });
    const tag = mk('g', { class: 'tag' });
    const tagRect = mk('rect', { rx: 4, height: 22 });
    const tagText = mk('text', { y: 15 });
    tag.append(tagRect, tagText);
    svg.append(area, line, dot0, dot1, tag);
    svg.appendChild(mk('text', { class: 'lbl', x: x(0), y: y(85) - 12, 'text-anchor': 'start' }, 'AED 85k'));
    chart.prepend(svg);

    const draw = (low, animate) => {
      const d = `M${x(0)},${y(85)} L${x(5)},${y(low)}`;
      line.setAttribute('d', d);
      area.setAttribute('d', `${d} L${x(5)},${y(yMin)} L${x(0)},${y(yMin)} Z`);
      dot1.setAttribute('cx', x(5)); dot1.setAttribute('cy', y(low));
      const label = `AED ${low}k`;
      tagText.textContent = label;
      const w = label.length * 7 + 16;
      tagRect.setAttribute('width', w);
      const tx = x(5) + 12, ty = y(low) - 11;
      tag.setAttribute('transform', `translate(${tx},${ty})`);
      tagText.setAttribute('x', 8);
      if (animate && !reduce) {
        line.classList.remove('draw'); void line.getBoundingClientRect(); line.classList.add('draw');
        requestAnimationFrame(() => chart.classList.add('in-view'));
      }
    };
    draw(55, false);
    const cio = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { chart.classList.add('in-view'); cio.disconnect(); } });
    }, { threshold: 0.4 });
    cio.observe(chart);

    const opts = $$('.opt');
    opts.forEach((b) =>
      b.addEventListener('click', () => {
        opts.forEach((o) => o.setAttribute('aria-pressed', String(o === b)));
        chart.classList.remove('in-view');
        draw(Number(b.dataset.low), true);
        chart.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
        const live = $('[data-chart-live]');
        if (live) live.textContent = `${b.querySelector('h3').textContent}: lowest cash in 30 days AED ${b.dataset.low}k.`;
      })
    );
  }
})();

/* Live Dubai weather widget (Open-Meteo, no key; fails soft) */
(() => {
  const el = document.querySelector('[data-weather]');
  if (!el) return;
  const cond = el.querySelector('.wx-cond');
  const temp = el.querySelector('.wx-temp');
  const ic = el.querySelector('.ic use');
  const name = (c, day) => c === 0 ? (day ? 'Sunny' : 'Clear') : c <= 3 ? 'Partly cloudy' : c <= 48 ? 'Hazy' : c <= 67 ? 'Rain' : c <= 82 ? 'Showers' : 'Stormy';
  const icon = (c, day) => c === 0 ? (day ? 'wx-sun' : 'wx-moon') : c <= 3 ? 'wx-cloudsun' : c <= 48 ? 'wx-cloud' : 'wx-rain';
  const ctrl = new AbortController();
  setTimeout(() => ctrl.abort(), 5000);
  fetch('https://api.open-meteo.com/v1/forecast?latitude=25.2048&longitude=55.2708&current=temperature_2m,weather_code,is_day&timezone=Asia%2FDubai', { signal: ctrl.signal })
    .then((r) => r.json())
    .then((d) => {
      const c = d.current;
      const day = c.is_day === 1;
      cond.textContent = name(c.weather_code, day);
      temp.textContent = Math.round(c.temperature_2m) + '°';
      ic.setAttribute('href', '#' + icon(c.weather_code, day));
    })
    .catch(() => { /* keeps the Sunny default */ });
})();

/* Closing photo: slide in once visible */
(() => {
  const ph = document.querySelector('.close2-photo');
  if (!ph) return;
  new IntersectionObserver((es, o) => es.forEach((e) => { if (e.isIntersecting) { ph.classList.add('in'); o.disconnect(); } }), { threshold: 0.35 }).observe(ph);
})();

/* Sticky reveal: pinned navy panel recedes as the white sheet covers it */
(() => {
  const intro = document.querySelector('.xp-intro');
  const cover = document.querySelector('.xp-cover');
  const grid = document.querySelector('.xp-intro-grid');
  if (!intro || !cover || !grid) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const update = () => {
    const r = cover.getBoundingClientRect();
    const vh = innerHeight;
    const p = Math.min(1, Math.max(0, 1 - r.top / vh));
    grid.style.transform = `translateY(${p * -18}%) scale(${1 - p * 0.1})`;
    grid.style.filter = `brightness(${1 - p * 0.55})`;
    grid.style.transformOrigin = '50% 60%';
  };
  addEventListener('scroll', update, { passive: true });
  update();
})();
