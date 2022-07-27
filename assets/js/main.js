// navbar variable
const nav = document.querySelector('.nav__list');
const navToggleBtn = document.querySelector('.nav__toggle');
const navLinks = document.querySelectorAll('.nav_link');

// navbar toggle function
const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
};
navToggleBtn.addEventListener('click', navToggleFunc);

for (leti = 0; i < navLinks.length; i++) {
  navLinks[1].addEventListener('click', navToggleFunc);
}
