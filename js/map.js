// Yandex map
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.75839547116383, 37.601276254630946],
    zoom: 17
  });

  var myPlacemark = new ymaps.Placemark([55.75839547116383, 37.601276254630946], {}, {
    iconLayout: 'default#image',
    iconImageHref: '',
    iconImageSize: [20, 20],
    iconImageOffset: [-6, -42]
  });

  myMap.geoObjects.add(myPlacemark);
}
