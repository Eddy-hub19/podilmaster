let swiper1 = null;
let swiper2 = null;

function toggleSwiper() {
  const isMobile = window.innerWidth < 1024; // Условие для мобильных устройств и планшетов

  if (isMobile) {
    // Инициализация первого слайдера
    if (!swiper1) {
      swiper1 = new Swiper('#slider1', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: '#slider1 .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '#slider1 .swiper-button-next',
          prevEl: '#slider1 .swiper-button-prev',
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    }

    // Инициализация второго слайдера
    if (!swiper2) {
      swiper2 = new Swiper('#slider2', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: '#slider2 .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '#slider2 .swiper-button-next',
          prevEl: '#slider2 .swiper-button-prev',
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    }
  } else {
    // Уничтожение первого слайдера
    if (swiper1) {
      swiper1.destroy(true, true);
      swiper1 = null;
    }

    // Уничтожение второго слайдера
    if (swiper2) {
      swiper2.destroy(true, true);
      swiper2 = null;
    }
  }
}

// Инициализация функции при загрузке страницы
window.addEventListener('load', toggleSwiper);

// Перезапуск функции при изменении размера окна
window.addEventListener('resize', toggleSwiper);
