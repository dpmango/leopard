$(function() {

	AOS.init()

  // tab mechanic
  $('.tab-nav-btn-js').on('click', function(event) {
    event.preventDefault();
    var id = $(this).data('id');
    if (id == "#") { return false }
    var wrap = $(this).closest('.tab-wrap-js');
    wrap.find('.tab-nav-btn-js').removeClass('active');
    $(this).addClass('active');
    wrap.find('.tab-content-js').hide();
    wrap.find('.tab-content-js[data-id="' + id + '"]').fadeIn('500');
  });

  $('.s_roadmap__nav__itm').on('click', function(event) {
    event.preventDefault();
    var index = $(this).index();
    $('.s_roadmap__nav__itm:lt(' + index + ')').addClass('active test');
  });

  $('.slider').slick({
    slidesToShow: 1,
    dots: true,
    fade: true,
    prevArrow: '<button type="button" class="slider__arrow slider__arrow-prev"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.67456 2.37379C10.1085 1.98327 10.1085 1.3501 9.67456 0.95958C9.24065 0.569056 8.53713 0.569056 8.10321 0.95958L0.325437 7.95958C-0.108479 8.3501 -0.108479 8.98327 0.325437 9.37379L8.10321 16.3738C8.53713 16.7643 9.24065 16.7643 9.67456 16.3738C10.1085 15.9833 10.1085 15.3501 9.67456 14.9596L2.68246 8.66669L9.67456 2.37379Z" fill="white"/></svg></button>',
    nextArrow: '<button type="button" class="slider__arrow slider__arrow-next"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.325437 2.37379C-0.108479 1.98327 -0.108479 1.3501 0.325437 0.95958C0.759353 0.569056 1.46287 0.569056 1.89679 0.95958L9.67456 7.95958C10.1085 8.3501 10.1085 8.98327 9.67456 9.37379L1.89679 16.3738C1.46287 16.7643 0.759353 16.7643 0.325437 16.3738C-0.108479 15.9833 -0.108479 15.3501 0.325437 14.9596L7.31754 8.66669L0.325437 2.37379Z" fill="white"/></svg></button>',
    dotsClass: 'slider__dots'
  });

  $(".s_timeline__nav").mCustomScrollbar({
    axis: "x",
    autoExpandHorizontalScroll: true
  });
  if ($(window).innerWidth()<767) {
  	$(".s_roadmap__nav").mCustomScrollbar({
    axis: "x",
  });
  }

  $('.anchor').anchor();


  $('.header__bars').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.nav ul').toggleClass('active');
  });

  $(document).mouseup(function(e) {
    var button = $('.nav ul, .nav ul *, .header__bars, .header__bars *');
    if (!button.is(e.target)) {
      $('.nav ul, .header__bars').removeClass('active');
    }
  });


  $("#map").length && ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
        center: [48.35524007392706, 39.950115500000005],
        zoom: 15,
        controls: []
      }),

      myPlacemarkWithContent = new ymaps.Placemark([48.35524007392706, 39.961115500000005], {
        // hintContent: 'Ельф кондитер',
        balloonContent: 'г. Донецк, Ростовская область, пер. Второй Аварийный. 10',
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'img/svg/placemark.svg',
        // Размеры метки.
        iconImageSize: [59, 74],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-29.5, -74],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
      });

    myMap.geoObjects.add(myPlacemarkWithContent);
    myMap.behaviors.disable('scrollZoom')
  });
  $("#mob_map").length && ymaps.ready(function() {
    var myMap = new ymaps.Map('mob_map', {
        center: [48.35524007392706, 39.961115500000005],
        zoom: 15,
        controls: []
      }),

      myPlacemarkWithContent = new ymaps.Placemark([48.35524007392706, 39.961115500000005], {
        // hintContent: 'Ельф кондитер',
        balloonContent: 'г. Донецк, Ростовская область, пер. Второй Аварийный. 10',
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'img/svg/placemark.svg',
        // Размеры метки.
        iconImageSize: [59, 74],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-29.5, -74],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
      });

    myMap.geoObjects.add(myPlacemarkWithContent);
  });


  

});