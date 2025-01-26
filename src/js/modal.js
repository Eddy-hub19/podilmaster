document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('contactPopup');
  const phoneMobile = document.querySelector('.phone-mobile');
  const callMasterBtn = document.getElementById('callMasterBtn');
  const closeBtn = document.querySelector('.close-btn');
  const overlay = document.querySelector('.overlay');
  const menu = document.querySelector('.menu');

  // Функция для отображения модалки
  const togglePopup = show => {
    overlay.style.display = show ? 'block' : 'none';
    popup.classList.toggle('show', show);
  };

  // Открытие модалки
  const openPopup = e => {
    e.preventDefault();
    togglePopup(true);
  };

  // Закрытие модалки
  const closePopup = () => {
    togglePopup(false);
  };

  // Слушатели событий для открытия модалки
  callMasterBtn.addEventListener('click', openPopup);
  phoneMobile.addEventListener('click', openPopup);

  // Слушатель события для закрытия модалки
  closeBtn.addEventListener('click', closePopup);
  overlay.addEventListener('click', closePopup);

  // Закрытие модалки при клике вне её
  window.addEventListener('click', e => {
    if (e.target === popup) {
      closePopup();
    }
  });

  // Закрытие меню по клику на оверлей
  overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.style.display = 'none';
  });
});
