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
          <h3>Explore</h3>
          <a href="/about.html">About Us</a>
          <a href="/events.html">Events</a>
          <a href="/leadership.html">Leadership</a>
          <a href="/sponsors.html">Sponsors</a>
        </div>
        <div class="footer-links">
          <h3>For Members</h3>
          <a href="/membership.html">Requirements</a>
          <a href="/apply.html">Apply</a>
          <a href="/attendance.html">Attendance</a>
          <a href="/newsletter.html">Newsletter</a>
        </div>
        <div class="footer-connect">
          <h3>Connect</h3>
          <div class="footer-social-icons">
            <a
              href="${site.social.instagram}"
              class="footer-icon-link footer-icon-instagram"
              target="_blank"
              rel="noopener noreferrer"
              data-social="instagram"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <defs>
                  <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
                    <stop offset="0%" stop-color="#fdf497"/>
                    <stop offset="5%" stop-color="#fdf497"/>
                    <stop offset="45%" stop-color="#fd5949"/>
                    <stop offset="60%" stop-color="#d6249f"/>
                    <stop offset="90%" stop-color="#285AEB"/>
                  </radialGradient>
                </defs>
                <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a
              href="${site.social.linkedin}"
              class="footer-icon-link footer-icon-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              data-social="linkedin"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-.662 0-1.194-.529-1.194-1.183 0-.652.532-1.182 1.194-1.182.662 0 1.194.53 1.194 1.182 0 .654-.532 1.183-1.194 1.183zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:${site.email}"
              class="footer-icon-link footer-icon-email"
              aria-label="Email ${site.email}"
              title="${site.email}"
            >
              <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
                <path fill="#4CAF50" d="M45 16.2l-5 2.75-5 4.75L35 40h7c1.66 0 3-1.34 3-3V16.2z"/>
                <path fill="#1E88E5" d="M3 16.2l3.61 1.71L13 23.7V40H6c-1.66 0-3-1.34-3-3V16.2z"/>
                <path fill="#E53935" d="M34.5 11.2 24 19.45 13.5 11.2 12.5 16.9 13 23.7 24 32 35 23.7 35.5 16.9z"/>
                <path fill="#C62828" d="M3 12.3V16.2l10 7.5V11.2L9.88 8.86A4.27 4.27 0 0 0 7.3 8 4.3 4.3 0 0 0 3 12.3z"/>
                <path fill="#FBC02D" d="M45 12.3V16.2l-10 7.5V11.2l3.12-2.34A4.27 4.27 0 0 1 40.7 8 4.3 4.3 0 0 1 45 12.3z"/>
              </svg>
            </a>
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
