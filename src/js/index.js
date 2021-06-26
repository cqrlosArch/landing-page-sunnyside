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
  const hasNot_some = ['main-menu__list', 'toggle-menu', 'main-menu__link'];
  if (
    mainMenu.classList.contains('main-menu--active') &&
    !hasNot_some.some((className) => e.target.classList.contains(className))
  ) {
    mainMenu.classList.remove('main-menu--active');
  }
};

toggleMenu.addEventListener('click', handleToggleMenu, false);
document.addEventListener('click', clearMenu, false);
