document.addEventListener('DOMContentLoaded', () => {

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

  // Rotating hero text
  const texts = document.querySelectorAll('.rotating-text');
  if (texts.length > 1) {
    let current = 0;
    setInterval(() => {
      texts[current].classList.remove('active');
      current = (current + 1) % texts.length;
      texts[current].classList.add('active');
    }, 2500);
  }

  // Animated stat counters
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      statObserver.unobserve(el);

      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const format = el.dataset.format || '';
      const duration = 1800;
      const start = performance.now();

      function formatValue(val) {
        if (format === 'abbr') {
          if (val >= 1e9) return (val / 1e9).toFixed(1) + 'B';
          if (val >= 1e6) return (val / 1e6).toFixed(1) + 'M';
          if (val >= 1e3) return (val / 1e3).toFixed(0) + 'K';
          return Math.round(val).toString();
        }
        if (format === 'decimal') return val.toFixed(2);
        return Math.round(val).toString();
      }

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = target * ease;
        el.textContent = prefix + formatValue(current) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-value[data-target]').forEach(el => statObserver.observe(el));

  // Chart bar animation
  const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      chartObserver.unobserve(entry.target);
      const bars = entry.target.querySelectorAll('.chart-bar');
      bars.forEach((bar, i) => {
        const h = bar.style.getPropertyValue('--height');
        bar.style.height = '0%';
        setTimeout(() => { bar.style.height = h; }, i * 60);
      });
    });
  }, { threshold: 0.3 });

  const chartBars = document.querySelector('.chart-bars');
  if (chartBars) chartObserver.observe(chartBars);

  // Currency toggle (pricing page)
  const currencyBtns = document.querySelectorAll('.currency-toggle button');
  const symbols = { usd: '$', gbp: '\u00a3', eur: '\u20ac' };

  currencyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currencyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const currency = btn.dataset.currency;

      document.querySelectorAll('.price-symbol').forEach(el => {
        el.textContent = symbols[currency];
      });

      document.querySelectorAll('.price-amount[data-' + currency + ']').forEach(el => {
        const val = el.dataset[currency];
        el.textContent = val;
      });
    });
  });

  // Mobile menu
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  // Nav background on scroll
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.borderBottomColor = window.scrollY > 10
        ? 'var(--border-light)'
        : 'var(--border)';
    }, { passive: true });
  }
});
