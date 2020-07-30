const menuBtn = document.getElementById('menu-btn');
const menu = document.querySelector('.menu');

// click handler to show/hide menu
menuBtn.addEventListener('click', event => {
  menu.classList.toggle('open');
});
