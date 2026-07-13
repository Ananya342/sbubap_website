import { initLayout } from './layout.js';
import { site } from './site-config.js';

function initSocialLinks() {
  const map = {
    instagram: site.social.instagram,
    linkedin: site.social.linkedin,
  };

  document.querySelectorAll('[data-social]').forEach((el) => {
    const key = el.dataset.social;
    if (map[key]) el.href = map[key];
    if (el.getAttribute('href') === '#') {
      el.classList.add('link-pending');
      el.title = 'Link coming soon — update js/site-config.js';
    }
  });
}

function initMemberSearch() {
  const input = document.getElementById('member-search');
  const meta = document.getElementById('member-search-meta');
  if (!input) return null;

  const lists = document.querySelectorAll('[data-member-list]');

  function activeList() {
    const panel = document.querySelector('.tab-panel.active');
    return panel?.querySelector('[data-member-list]') ?? null;
  }

  function resetLists() {
    lists.forEach((list) => {
      list.querySelectorAll('li').forEach((item) => {
        item.hidden = false;
      });
    });
  }

  function filterList() {
    const list = activeList();

    if (!list) {
      input.disabled = true;
      input.value = '';
      resetLists();
      if (meta) {
        meta.hidden = false;
        meta.textContent = 'Open the Members or Alumni tab to search the directory.';
      }
      return;
    }

    input.disabled = false;
    const query = input.value.trim().toLowerCase();
    const items = [...list.querySelectorAll('li')];
    let visible = 0;

    items.forEach((item) => {
      const match = !query || item.textContent.toLowerCase().includes(query);
      item.hidden = !match;
      if (match) visible += 1;
    });

    if (!meta) return;

    if (!query) {
      meta.hidden = true;
      meta.textContent = '';
      return;
    }

    meta.hidden = false;
    meta.textContent = visible
      ? `${visible} matching name${visible === 1 ? '' : 's'}`
      : 'No matching names — try a different search';
  }

  input.addEventListener('input', filterList);
  filterList();
  return filterList;
}

function initStatCounters() {
  const stats = document.querySelectorAll('.hero-stat-value');
  if (!stats.length) return;

  const animateValue = (el) => {
    const raw = el.textContent.trim();
    const match = raw.match(/^(\d+)(.*)$/);
    if (!match) return;

    const end = Number(match[1]);
    const suffix = match[2];
    const duration = 900;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      el.textContent = `${Math.round(end * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.target.dataset.counted) return;
        entry.target.dataset.counted = 'true';
        animateValue(entry.target);
      });
    },
    { threshold: 0.6 }
  );

  stats.forEach((el) => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initLayout();
  initSocialLinks();
  const refreshMemberSearch = initMemberSearch();
  initStatCounters();

  document.querySelectorAll('.accordion-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !open);
      panel.hidden = open;
      btn.closest('.accordion-item')?.classList.toggle('is-open', !open);
    });
  });

  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(target)?.classList.add('active');
      refreshMemberSearch?.();
    });
  });
});
