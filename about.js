// ===== Mobile Menu =====
const toggleBtn = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ===== Accordion =====
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    header.classList.toggle('active');
    const body = header.nextElementSibling;
    body.classList.toggle('open');
    if (body.classList.contains('open')) {
      body.style.maxHeight = body.scrollHeight + "px";
    } else {
      body.style.maxHeight = null;
    }
  });
});
