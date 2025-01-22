if (window.matchMedia('(min-width: 1440px)').matches) {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  const closeMenu = document.querySelector('.cross-desctop');
  const overlay = document.querySelector('.overlay');

  // Открытие меню
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
  });

  // Закрытие меню по клику на крестик
  closeMenu.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.style.display = 'none';
  });

  // Закрытие меню по клику на оверлей
  overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.style.display = 'none';
  });
}