// const fadeIn = (el, timeout, display) => {
//   el.style.opacity = 0;
//   el.style.display = display || 'block';
//   el.style.transition = `opacity ${timeout}ms`;
  
//   setTimeout(() => {
//       el.style.opacity = 1;
//   }, 10);
// };

// const fadeOut = (el, timeout) => {
//   el.style.opacity = 1;
//   el.style.transition = `opacity ${timeout}ms`;
//   el.style.opacity = 0;

//   setTimeout(() => {
//       el.style.display = 'none';
//   }, timeout);
// };

const btn = document.querySelectorAll(".catalog__btn");
const accordeon = document.querySelectorAll(".catalog-content__right");
const descr = document.querySelectorAll(".catalog__descr");

document.addEventListener("DOMContentLoaded", function () {
  btn.forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path

      accordeon.forEach(function (tabContent) {
        tabContent.classList.remove("catalog-content__right--active")
      });

      descr.forEach(function (tabDescr) {
        tabDescr.classList.remove("catalog__descr--active")
      });

      document.querySelector(`[data-descr="${path}"]`).classList.add("catalog__descr--active")
      document.querySelector(`[data-target="${path}"]`).classList.add("catalog-content__right--active")
    })
  })

  
})

// Artists
const artistsBtn = document.querySelectorAll(".catalog-content__accordion-link");

document.addEventListener("DOMContentLoaded", function () {
  artistsBtn.forEach(function (artistsBtn) {
    artistsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.artistPath

      document.querySelectorAll(".content-left__card").forEach(function (tabContent) {
        tabContent.classList.remove("content-left__card--active");
      })

      document.querySelector(`[data-artist-target="${path}"]`).classList.add("content-left__card--active");
    })
  })
})