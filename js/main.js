import { initLayout } from './layout.js';

document.addEventListener('DOMContentLoaded', () => {
  initLayout();

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
    });
  });
});
