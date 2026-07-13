import { site } from './site-config.js';

function navItem(item) {
  if (item.children) {
    return `
      <li class="nav-item has-dropdown">
        <a href="${item.href}">${item.label}</a>
        <ul class="dropdown">
          ${item.children.map((c) => `<li><a href="${c.href}">${c.label}</a></li>`).join('')}
        </ul>
      </li>`;
  }
  return `<li class="nav-item"><a href="${item.href}">${item.label}</a></li>`;
}

export function renderHeader() {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

  return `
    <div class="top-bar">
      <div class="container top-bar-inner">
        <span class="top-bar-text">${site.university} · ${site.chapter}</span>
        <div class="social-links">
          <a href="${site.social.instagram}" class="social-link" data-placeholder="instagram">Instagram</a>
          <a href="${site.social.linkedin}" class="social-link" data-placeholder="linkedin">LinkedIn</a>
        </div>
      </div>
    </div>
    <header class="site-header">
      <div class="container header-inner">
        <a href="/" class="brand">
          <img src="${site.logo}" alt="${site.name} logo" class="brand-logo" width="72" height="72">
          <div class="brand-text">
            <span class="brand-name">${site.name}</span>
            <span class="brand-chapter">${site.chapter}</span>
          </div>
        </a>
        <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="main-nav" aria-label="Main navigation">
          <ul class="nav-list">
            ${site.nav.map(navItem).join('')}
          </ul>
        </nav>
      </div>
    </header>`;
}

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <img src="${site.logo}" alt="" width="56" height="56" class="footer-logo">
          <p><strong>${site.name}</strong><br>${site.chapter}<br>${site.university}</p>
        </div>
        <div class="footer-links">
          <h3>Quick Links</h3>
          <a href="/about.html">About Us</a>
          <a href="/events.html">Events</a>
          <a href="/apply.html">Become a Member</a>
          <a href="/contact.html">Contact</a>
        </div>
        <div class="footer-connect">
          <h3>Connect</h3>
          <a href="${site.social.instagram}" data-placeholder="instagram">Instagram</a>
          <a href="${site.social.linkedin}" data-placeholder="linkedin">LinkedIn</a>
          <a href="mailto:${site.email}">${site.email}</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <p>© ${new Date().getFullYear()} ${site.name} – ${site.chapter} at ${site.university}</p>
      </div>
    </footer>`;
}

export function initLayout() {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.innerHTML = renderHeader();
  if (footerEl) footerEl.innerHTML = renderFooter();

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });

  document.querySelectorAll('[data-placeholder]').forEach((el) => {
    if (el.getAttribute('href') === '#') {
      el.classList.add('link-pending');
      el.title = 'Link coming soon — update js/site-config.js';
    }
  });

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}
