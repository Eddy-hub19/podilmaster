let swiper1 = null;
let swiper2 = null;
let swiper3 = null;
let swiper4 = null;
let swiper5 = null;
let swiper6 = null;
let swiper7 = null;
let swiper8 = null;

function toggleSwiper() {
  const isMobile = window.innerWidth < 1024; // Условие для мобильных устройств и планшетов

  // Для всех слайдеров проверка на мобильность
  const sliders = [
    { swiper: swiper1, id: '#slider1' },
    { swiper: swiper2, id: '#slider2' },
    { swiper: swiper3, id: '#slider3' },
    { swiper: swiper4, id: '#slider4' },
    { swiper: swiper5, id: '#slider5' },
    { swiper: swiper6, id: '#slider6' },
    { swiper: swiper7, id: '#slider7' },
    { swiper: swiper8, id: '#slider8' },
  ];

  sliders.forEach(slider => {
    if (isMobile) {
      // Инициализация слайдера на мобильных устройствах
      if (!slider.swiper) {
        slider.swiper = new Swiper(slider.id, {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: false,
          pagination: {
            el: `${slider.id} .swiper-pagination`,
            clickable: true,
          },
          navigation: {
            nextEl: `${slider.id} .swiper-button-next`,
            prevEl: `${slider.id} .swiper-button-prev`,
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        });
      }
    } else {
      // Уничтожение слайдера на десктопе
      if (slider.swiper) {
        slider.swiper.destroy(true, true);
        slider.swiper = null;
      }
    }
  });
}

// Инициализация функции при загрузке страницы
window.addEventListener('load', toggleSwiper);

// Перезапуск функции при изменении размера окна
window.addEventListener('resize', toggleSwiper);
