import { site } from './site-config.js';

function normalizePath(path) {
  const p = path.replace(/\/$/, '') || '/';
  if (p === '/index.html') return '/';
  return p;
}

function isLinkActive(href) {
  const current = normalizePath(window.location.pathname);
  const target = normalizePath(href);

  if (target === '/') {
    return current === '/' || current === '';
  }

  return current === target || current.endsWith(target);
}

function isNavItemActive(item) {
  if (isLinkActive(item.href)) return true;
  return item.children?.some((child) => isLinkActive(child.href)) ?? false;
}

function navItem(item) {
  const active = isNavItemActive(item);

  if (item.children) {
    return `
      <li class="nav-item has-dropdown">
        <a href="${item.href}"${active ? ' class="is-active"' : ''}>${item.label}</a>
        <ul class="dropdown">
          ${item.children.map((c) => {
            const childActive = isLinkActive(c.href) ? ' class="is-active"' : '';
            return `<li><a href="${c.href}"${childActive}>${c.label}</a></li>`;
          }).join('')}
        </ul>
      </li>`;
  }
  return `<li class="nav-item"><a href="${item.href}"${active ? ' class="is-active"' : ''}>${item.label}</a></li>`;
}

export function renderHeader() {
  return `
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
          <div class="footer-connect-btns">
            <a href="${site.social.instagram}" class="footer-connect-btn" target="_blank" rel="noopener noreferrer" data-social="instagram">Instagram</a>
            <a href="${site.social.linkedin}" class="footer-connect-btn" target="_blank" rel="noopener noreferrer" data-social="linkedin">LinkedIn</a>
            <a href="mailto:${site.email}" class="footer-connect-btn footer-connect-btn-email">${site.email}</a>
          </div>
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

  const header = document.querySelector('.site-header');
  const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 16);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

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
