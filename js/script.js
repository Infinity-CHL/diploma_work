
//  Плавный переход для якорных ссылок
$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});

$(function () {
  $("#accordion").accordion({
    collapsible: true,
    animate: 300,
    icons: false,
  });
});

const element = document.querySelector('#gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false
  });