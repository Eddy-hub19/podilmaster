document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('contactPopup');
  const phoneMobile = document.querySelector('.phone-mobile');
  const callMasterBtn = document.getElementById('callMasterBtn');
  const closeBtn = document.querySelector('.close-btn');
  const overlay = document.querySelector('.overlay');

  // Открытие модалки
  callMasterBtn.addEventListener('click', e => {
    e.preventDefault();
    overlay.style.display =
      overlay.style.display === 'block' ? 'none' : 'block';
    popup.classList.add('show');
  });

  // Открытие модалки
  phoneMobile.addEventListener('click', e => {
    e.preventDefault();
    overlay.style.display =
      overlay.style.display === 'block' ? 'none' : 'block';
    popup.classList.add('show');
  });

  // Закрытие модалки
  closeBtn.addEventListener('click', () => {
    popup.classList.remove('show');
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', () => {
    popup.classList.remove('show');
    overlay.style.display = 'none';
  });

  // Закрытие модалки при клике вне её
  window.addEventListener('click', e => {
    if (e.target === popup) {
      popup.classList.remove('show');
    }
  });
});

// Закрытие меню по клику на оверлей
overlay.addEventListener('click', () => {
  menu.classList.remove('open');
  overlay.style.display = 'none';
});
