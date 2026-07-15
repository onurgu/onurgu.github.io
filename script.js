const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  });
});

const progress = document.querySelector('.reading-line');
const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progress.style.width = `${value}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min((index % 5) * 55, 220)}ms`;
  observer.observe(element);
});

const grid = document.querySelector('#world-grid');
const shuffleButton = document.querySelector('#shuffle');
const palettes = [
  ['#ff9dc8', '#e6ff4f', '#151515', '#5d73ff', '#a8edc4'],
  ['#e6ff4f', '#a8edc4', '#151515', '#f24e38', '#ff9dc8'],
  ['#5d73ff', '#ff9dc8', '#151515', '#a8edc4', '#e6ff4f']
];
let paletteIndex = 0;

shuffleButton?.addEventListener('click', () => {
  const cards = [...grid.children];
  cards.unshift(cards.pop());
  cards.forEach((card) => grid.appendChild(card));
  paletteIndex = (paletteIndex + 1) % palettes.length;
  cards.forEach((card, index) => {
    card.style.background = palettes[paletteIndex][index];
    card.style.color = index === 2 || palettes[paletteIndex][index] === '#5d73ff' ? '#fff' : '#151515';
  });
  grid.classList.remove('is-shuffling');
  void grid.offsetWidth;
  grid.classList.add('is-shuffling');
  shuffleButton.textContent = ['Again. Obviously.', 'One more arrangement', 'Rearrange my brain'][paletteIndex];
});

document.querySelector('#year').textContent = new Date().getFullYear();
