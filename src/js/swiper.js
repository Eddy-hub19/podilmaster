document.addEventListener('DOMContentLoaded', function () {
  let swiper1 = null;
  let swiper2 = null;
  let swiper3 = null;
  let swiper4 = null;
  let swiper5 = null;
  let swiper6 = null;
  let swiper7 = null;
  let swiper8 = null;
  let swiper9 = null;

  function toggleSwiper() {
    const isMobile = window.innerWidth < 768; // Условие для мобильных устройств
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024; // Условие для планшетов

    // Для всех слайдеров проверка на мобильность и планшеты
    const sliders = [
      { swiper: swiper1, id: '#slider1' },
      { swiper: swiper2, id: '#slider2' },
      { swiper: swiper3, id: '#slider3' },
      { swiper: swiper4, id: '#slider4' },
      { swiper: swiper5, id: '#slider5' },
      { swiper: swiper6, id: '#slider6' },
      { swiper: swiper7, id: '#slider7' },
      { swiper: swiper8, id: '#slider8' },
      { swiper: swiper9, id: '#slider9' },
    ];

    sliders.forEach((slider, index) => {
      const sliderElement = document.querySelector(slider.id);
      if (!sliderElement) {
        // Если элемент слайдера не найден, пропускаем его
        return;
      }

      if (isMobile || isTablet) {
        // Инициализация слайдера на мобильных устройствах и планшетах
        if (!slider.swiper) {
          sliders[index].swiper = new Swiper(slider.id, {
            slidesPerView: isMobile ? 1 : 2, // 1 карточка для мобильных, 2 карточки для планшетов
            spaceBetween: 20,
            autoplay: false,
            loop: true,
            pagination: {
              el: `${slider.id} .swiper-pagination`,
              clickable: true,
            },
            navigation: {
              nextEl: `${slider.id} .custom-next`,
              prevEl: `${slider.id} .custom-prev`,
            },
          });
        }
      } else {
        // Уничтожение слайдера на десктопе
        if (slider.swiper) {
          slider.swiper.destroy(true, true);
          sliders[index].swiper = null;
        }
      }
    });
  }

  // Инициализация функции при загрузке страницы
  window.addEventListener('load', toggleSwiper);

  // Перезапуск функции при изменении размера окна
  window.addEventListener('resize', toggleSwiper);
});
