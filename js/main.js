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

function initPointsGlance() {
  const root = document.getElementById('points-glance');
  if (!root) return;

  const valueEl = document.getElementById('points-result-value');
  const labelEl = document.getElementById('points-result-label');
  const matrix = {
    pledge: { undergrad: 8, grad: 6 },
    member: { undergrad: 6, grad: 4 },
  };

  let status = 'pledge';
  let level = 'undergrad';

  function update() {
    const points = matrix[status][level];
    const statusLabel = status === 'pledge' ? 'pledges' : 'members';
    const levelLabel = level === 'undergrad' ? 'undergraduate' : 'graduate';
    valueEl.textContent = String(points);
    labelEl.textContent = `points per semester for ${levelLabel} ${statusLabel}`;
  }

  root.querySelectorAll('[data-status]').forEach((btn) => {
    btn.addEventListener('click', () => {
      status = btn.dataset.status;
      root.querySelectorAll('[data-status]').forEach((b) => {
        const on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on);
      });
      update();
    });
  });

  root.querySelectorAll('[data-level]').forEach((btn) => {
    btn.addEventListener('click', () => {
      level = btn.dataset.level;
      root.querySelectorAll('[data-level]').forEach((b) => {
        const on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on);
      });
      update();
    });
  });

  update();
}

function buildGoogleCalendarUrl(event) {
  if (event.calendarUrl && event.calendarUrl !== '#') return event.calendarUrl;

  const start = event.date.replace(/-/g, '');
  const endDate = new Date(`${event.date}T12:00:00`);
  endDate.setDate(endDate.getDate() + 1);
  const end = endDate.toISOString().slice(0, 10).replace(/-/g, '');

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${start}/${end}`,
    details: `${event.title}${event.time ? ` · ${event.time}` : ''}`,
    location: event.location || 'Stony Brook University',
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function formatEventDate(dateStr) {
  const date = new Date(`${dateStr}T12:00:00`);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

function daysUntil(dateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(`${dateStr}T00:00:00`);
  return Math.round((target - today) / 86400000);
}

function initNextEvent() {
  const root = document.getElementById('next-event');
  if (!root) return;

  const events = [...(site.upcomingEvents || [])]
    .filter((event) => event?.date && daysUntil(event.date) >= 0)
    .sort((a, b) => a.date.localeCompare(b.date));

  const eyebrow = document.getElementById('next-event-eyebrow');
  const daysEl = document.getElementById('next-event-days');
  const daysLabel = document.getElementById('next-event-days-label');
  const whenEl = document.getElementById('next-event-when');
  const titleEl = document.getElementById('next-event-title');
  const metaEl = document.getElementById('next-event-meta');
  const calendarLink = document.getElementById('next-event-calendar');
  const groupmeLink = document.getElementById('next-event-groupme');
  const flyerLink = document.getElementById('next-event-flyer');

  if (!events.length) {
    root.classList.add('is-empty');
    eyebrow.textContent = 'Stay tuned';
    daysEl.textContent = '—';
    daysLabel.textContent = '';
    whenEl.textContent = '';
    titleEl.textContent = 'Schedule coming soon';
    metaEl.textContent = 'Add events in js/site-config.js → upcomingEvents, or check the Events page.';
    return;
  }

  const next = events[0];
  const days = daysUntil(next.date);

  if (days === 0) {
    eyebrow.textContent = 'Happening';
    daysEl.textContent = 'Today';
    daysLabel.textContent = '';
    daysEl.classList.add('is-text');
  } else if (days === 1) {
    eyebrow.textContent = 'Next event in';
    daysEl.textContent = '1';
    daysLabel.textContent = 'day';
  } else {
    eyebrow.textContent = 'Next event in';
    daysEl.textContent = String(days);
    daysLabel.textContent = 'days';
  }

  whenEl.textContent = [formatEventDate(next.date), next.time].filter(Boolean).join(' · ');
  titleEl.textContent = next.title;
  metaEl.textContent = next.location || 'Stony Brook University';

  calendarLink.href = buildGoogleCalendarUrl(next);

  const groupme = next.groupmeUrl && next.groupmeUrl !== '#'
    ? next.groupmeUrl
    : site.social.groupme;
  groupmeLink.href = groupme;
  if (!groupme || groupme === '#') groupmeLink.classList.add('is-disabled');

  if (next.flyerUrl && next.flyerUrl !== '#') {
    flyerLink.href = next.flyerUrl;
  } else {
    flyerLink.href = '/events.html';
    flyerLink.textContent = 'Details';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initLayout();
  initSocialLinks();
  const refreshMemberSearch = initMemberSearch();
  initStatCounters();
  initPointsGlance();
  initNextEvent();

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
