let swiper1 = null;
let swiper2 = null;
let swiper3 = null;
let swiper4 = null;

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

    // Инициализация третьего слайдера
    if (!swiper3) {
      swiper3 = new Swiper('#slider3', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: '#slider3 .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '#slider3 .swiper-button-next',
          prevEl: '#slider3 .swiper-button-prev',
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    }

    // Инициализация четвертого слайдера
    if (!swiper4) {
      swiper4 = new Swiper('#slider4', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: '#slider4 .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '#slider4 .swiper-button-next',
          prevEl: '#slider4 .swiper-button-prev',
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

    // Уничтожение третьего слайдера
    if (swiper3) {
      swiper3.destroy(true, true);
      swiper3 = null;
    }

    // Уничтожение четвертого слайдера
    if (swiper4) {
      swiper4.destroy(true, true);
      swiper4 = null;
    }
  }
}

// Инициализация функции при загрузке страницы
window.addEventListener('load', toggleSwiper);

// Перезапуск функции при изменении размера окна
window.addEventListener('resize', toggleSwiper);
