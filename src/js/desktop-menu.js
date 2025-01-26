document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(min-width: 1440px)').matches) {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const closeMenu = document.querySelector('.cross-desctop');
    const overlay = document.querySelector('.overlay');

    // Функция для переключения меню и оверлея
    const toggleMenu = (isOpen) => {
      menu.classList.toggle('open', isOpen);
      overlay.style.display = isOpen ? 'block' : 'none';
    };

    // Открытие меню
    hamburger.addEventListener('click', () => toggleMenu(true));

    // Закрытие меню по клику на крестик
    closeMenu.addEventListener('click', () => toggleMenu(false));

    // Закрытие меню по клику на оверлей
    overlay.addEventListener('click', () => toggleMenu(false));
  }
});
