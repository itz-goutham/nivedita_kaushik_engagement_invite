const revealElements = [...document.querySelectorAll('.reveal')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -35px 0px' });
  revealElements.forEach(el => observer.observe(el));
} else {
  revealElements.forEach(el => el.classList.add('is-visible'));
}
const header = document.getElementById('site-header');
const progress = document.getElementById('scroll-progress');
let scheduled = false;
function onScroll() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    const total = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    progress.style.width = `${Math.min(100, window.scrollY / total * 100)}%`;
    header.classList.toggle('visible', window.scrollY > 120);
    scheduled = false;
  });
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();
const share = document.getElementById('share-button');
const feedback = document.getElementById('share-feedback');
share.addEventListener('click', async () => {
  const info = { title: 'Nivedita & Kaushik — Engagement', text: 'Join us for the engagement on November 11, 2026 in Bengaluru!', url: window.location.href };
  try {
    if (navigator.share) await navigator.share(info);
    else if (navigator.clipboard) { await navigator.clipboard.writeText(info.url); feedback.textContent = 'Website link copied!'; }
    else { window.prompt('Copy this website link:', info.url); }
  } catch (e) {
    if (e.name !== 'AbortError') feedback.textContent = 'Please copy the link from your browser address bar.';
  }
});
