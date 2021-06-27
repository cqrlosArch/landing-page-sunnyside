const toggleMenu = document.getElementById('toggle-menu');
const mainMenu = document.getElementById('main-menu');

//Toggle mobile menu
const handleToggleMenu = (e) => {
  e.stopPropagation();

  if (e.target.classList.contains('toggle-menu')) {
    mainMenu.classList.toggle('main-menu--active');
  }
};

//Close mobile menu by clicking outside the menu
const clearMenu = (e) => {
  e.preventDefault();
  e.stopPropagation();
  !e.target.closest('.main-menu--active') &&
    mainMenu.classList.remove('main-menu--active');
};

toggleMenu.addEventListener('click', handleToggleMenu, false);
document.addEventListener('click', clearMenu, false);
