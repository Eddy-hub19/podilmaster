document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(max-width: 768px)').matches) {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const closeMenu = document.querySelector('.cross-mobile');

    // Функция для переключения меню
    const toggleMenu = () => {
      const isOpen = menu.classList.contains('open');
      document.body.classList.toggle('no-scroll');
      menu.classList.toggle('open', !isOpen);
      hamburger.style.display = isOpen ? 'block' : 'none';
      closeMenu.style.display = isOpen ? 'none' : 'block';
    };

    // Открытие/закрытие меню
    hamburger.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);
  }
});
