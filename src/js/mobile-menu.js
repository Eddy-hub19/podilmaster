if (window.matchMedia('(max-width: 375px)').matches) {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  const closeMenu = document.querySelector('.cross-mobile');

  // Открытие/закрытие меню
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open'); // Добавляем/удаляем класс для отображения меню
    hamburger.style.display = 'none'; // Скрываем иконку гамбургера
    closeMenu.style.display = 'block'; // Показываем иконку крестика
  });

  // Закрытие меню по клику на крестик
  closeMenu.addEventListener('click', () => {
    menu.classList.remove('open');
    hamburger.style.display = 'block'; // Показываем иконку гамбургера
    closeMenu.style.display = 'none'; // Скрываем иконку крестика
  });
}
