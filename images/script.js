const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const logoText = document.querySelector('.logo-text');
const subToggles = document.querySelectorAll('.has-sub > a');

// Toggle Sidebar
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  sidebar.classList.toggle('show');
  overlay.classList.toggle('show');
  logoText?.classList.toggle('menu-open');
});

// Close Sidebar when clicking outside
overlay.addEventListener('click', () => {
  hamburger.classList.remove('active');
  sidebar.classList.remove('show');
  overlay.classList.remove('show');
  logoText?.classList.remove('menu-open');
});

// Accordion Submenus
subToggles.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const parent = link.parentElement;

    document.querySelectorAll('.has-sub').forEach(item => {
      if (item !== parent) {
        item.classList.remove('open');
      }
    });

    parent.classList.toggle('open');
  });
});
