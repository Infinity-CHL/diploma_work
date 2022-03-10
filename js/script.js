// Плавный переход по ссылкам
const anchors = document.querySelectorAll('a[href*="#"]');

  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const bolckId = anchor.getAttribute('href').substring(1);

      document.getElementById(bolckId).scrollIntoView(
        {
          behavior: 'smooth',
          block: 'start',
        }
      );
    });
  });

// Инициализация аккордеона
$(function () {
  $(".catalog-content__list").accordion({
    active: 0,
    animate: 300,
    icons: false,
    collapsible: true,
  });
});

// Инициализация кастомного селекта
const element = document.querySelector('#gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false
  });

// Переключение анимации кнопок в "Каталог"
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".catalog__btn").forEach(item => {
    item.addEventListener("click", function () {
      let btn = this;

      document.querySelectorAll(".catalog__btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("btn-active");
        }
      });
      btn.classList.add("btn-active");
    })
  })
});
