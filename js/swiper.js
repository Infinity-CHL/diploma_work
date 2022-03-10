// Hero swiper
const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 7000,
  },
  effect: "fade",
  loop: true,
});

// Gallery swiper

let gallerySlider = new Swiper(".gallery__right", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 3
  },
  spaceBetween: 30,
  pagination: {
    el: ".gallery-swiper__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery-swiper__btn--next",
    prevEl: ".gallery-swiper__btn--prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    576: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});

//   Editions swiper 

let editionSlider = new Swiper(".editions__right", {
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: ".editions__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".editions__btn--next",
    prevEl: ".editions__btn--prev"
  }
});

// Projects swiper 

let projectsSwiper = new Swiper(".projects__swiper", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: ".projects__swiper-btn--next",
    prevEl: ".projects__swiper-btn--prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 50,
    }

  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

});
