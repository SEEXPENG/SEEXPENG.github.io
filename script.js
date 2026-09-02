document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.querySelector('.back-to-top');
  const navLinks = document.querySelectorAll('.nav-links a');
  const mainNav = document.querySelector('.main-nav');
  const sections = document.querySelectorAll('section[id]');
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const storageKey = 'preferred-theme';
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme) {
    const metaThemes = document.querySelectorAll('meta[name="theme-color"]');
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (themeToggle) themeToggle.textContent = 'Light';
      metaThemes.forEach(function(m) { m.setAttribute('content', '#000000'); });
    } else {
      root.removeAttribute('data-theme');
      if (themeToggle) themeToggle.textContent = 'Dark';
      metaThemes.forEach(function(m) { m.setAttribute('content', '#ffffff'); });
    }
  }

  applyTheme(localStorage.getItem(storageKey) || (prefersDark ? 'dark' : 'light'));

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      localStorage.setItem(storageKey, next);
      applyTheme(next);
    });
  }

  function debounce(func, wait) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    };
  }

  const handleScroll = debounce(function() {
    if (mainNav) {
      mainNav.classList.toggle('scrolled', window.pageYOffset > 20);
    }

    if (backToTopButton) {
      const show = window.pageYOffset > 300;
      backToTopButton.style.opacity = show ? '1' : '0';
      backToTopButton.style.visibility = show ? 'visible' : 'hidden';
    }

    let current = '';
    sections.forEach(function(section) {
      const top = section.offsetTop - 100;
      if (window.pageYOffset >= top && window.pageYOffset < top + section.clientHeight) {
        current = section.id;
      }
    });

    navLinks.forEach(function(link) {
      const href = link.getAttribute('href') || '';
      link.classList.toggle('active', href.substring(1) === current);
    });
  }, 10);

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  document.querySelectorAll('a[href^="http"]').forEach(function(a) {
    if (a.hostname && a.hostname !== window.location.hostname) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
