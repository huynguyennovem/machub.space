(() => {
  const DMG_URL_FILE = '/assets/downloads/macos-dmg.url';
  const DMG_NAME = 'MacHub.dmg';
  const SCREENSHOTS_DIR = '/assets/images/screenshots/';

  const safeStorage = {
    get(key) {
      try { return localStorage.getItem(key); } catch (e) { return null; }
    },
    set(key, value) {
      try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ }
    }
  };

  const isDark = () => {
    const forced = document.documentElement.dataset.theme;
    if (forced) return forced === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const initTheme = () => {
    document.querySelectorAll('.theme-toggle').forEach((button) => {
      button.addEventListener('click', () => {
        const next = isDark() ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        safeStorage.set('theme', next);
      });
    });
  };

  const initNav = () => {
    const header = document.querySelector('.site-header');
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('primary-nav');
    if (header) {
      const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
    if (!toggle || !nav) return;
    const setOpen = (open) => {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });
  };

  const initReveal = () => {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach((el) => observer.observe(el));
  };

  const resolveDmgUrl = (raw) => {
    const line = String(raw || '')
      .split(/\r?\n/)
      .map((entry) => entry.trim())
      .find((entry) => /^https:\/\//i.test(entry));
    if (!line) return '';
    if (/\.dmg(\?|#|$)/i.test(line)) return line;
    return `${line.replace(/\/?$/, '/')}${DMG_NAME}`;
  };

  const markUnavailable = (links) => {
    links.forEach((link) => {
      link.setAttribute('aria-disabled', 'true');
      link.addEventListener('click', (event) => event.preventDefault());
      link.querySelectorAll('[data-label]').forEach((label) => {
        label.textContent = 'Download coming soon';
      });
    });
  };

  const initDownloadLinks = () => {
    const links = document.querySelectorAll('.link-macos-dmg');
    if (!links.length) return;
    fetch(DMG_URL_FILE, { cache: 'no-cache' })
      .then((response) => (response.ok ? response.text() : Promise.reject(response.status)))
      .then((text) => {
        const url = resolveDmgUrl(text);
        if (!url) return markUnavailable(links);
        links.forEach((link) => { link.href = url; });
      })
      .catch(() => markUnavailable(links));
  };

  const addShot = (root, { file, alt }) => {
    const figure = document.createElement('figure');
    const img = new Image();
    img.src = `${SCREENSHOTS_DIR}${file}`;
    img.alt = alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.addEventListener('error', () => figure.remove());
    const caption = document.createElement('figcaption');
    caption.textContent = alt;
    figure.append(img, caption);
    root.append(figure);
  };

  const initGallery = () => {
    const root = document.getElementById('gallery-grid');
    if (!root) return;
    fetch(`${SCREENSHOTS_DIR}index.json`, { cache: 'no-cache' })
      .then((response) => (response.ok ? response.json() : []))
      .then((shots) => {
        if (!Array.isArray(shots) || !shots.length) return;
        shots.forEach((shot) => addShot(root, shot));
        root.closest('section').hidden = false;
      })
      .catch(() => {});
  };

  const initYear = () => {
    document.querySelectorAll('[data-year]').forEach((el) => {
      el.textContent = String(new Date().getFullYear());
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNav();
    initReveal();
    initDownloadLinks();
    initGallery();
    initYear();
  });
})();
