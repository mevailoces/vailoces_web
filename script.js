// Scroll-to-top
const toTopBtn = document.getElementById('toTopBtn');
window.onscroll = () => toTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
toTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Typing effect
const typed = document.getElementById("typed-text");
if (typed) {
  const text = "Information Technology Student";
  let i = 0;
  const type = () => { if (i < text.length) { typed.textContent += text[i++]; setTimeout(type, 100); } };
  window.addEventListener('load', type);
}

// Dark mode
const toggle = document.getElementById('darkModeToggle');
if (toggle) {
  if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
}

// Fade-in on scroll
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('fade-in'); });
});
document.querySelectorAll('.fade-section').forEach(el => obs.observe(el));

// Active nav highlight
window.addEventListener('scroll', () => {
  const fromTop = window.scrollY;
  document.querySelectorAll('.navbar a').forEach(link => {
    const sec = document.querySelector(link.getAttribute('href'));
    link.classList.toggle('active', sec && sec.offsetTop - 150 <= fromTop && sec.offsetTop + sec.offsetHeight > fromTop);
  });
});

// Contact form + char counter
const form = document.getElementById('contactForm');
const charCount = document.getElementById('charCount');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const n = form.name.value.trim(), em = form.email.value.trim(), msg = form.message.value.trim();
    if (!n || !em || !msg) return alert("Please fill in all fields.");
    location.href = `mailto:mevailoces.student@asiancollege.edu.ph?subject=Portfolio Message from ${encodeURIComponent(n)}&body=${encodeURIComponent(msg)}%0D%0A%0D%0AFrom: ${encodeURIComponent(n)}%0D%0AEmail: ${encodeURIComponent(em)}`;
  });
  if (charCount) form.message.addEventListener('input', () => {
    charCount.textContent = `${form.message.value.length}/500 characters`;
  });
}
