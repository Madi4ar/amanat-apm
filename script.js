$(document).ready(function () {
  $(".slider-main").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $(".slider-feedback").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev slider-arrow-btn" aria-label="Назад"><svg width="22" height="44" viewBox="0 0 22 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="rotate-180"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.6212 23.3036L8.25005 33.6748L5.65771 31.0824L14.7327 22.0074L5.65771 12.9324L8.25005 10.3401L18.6212 20.7113C18.9649 21.0551 19.158 21.5213 19.158 22.0074C19.158 22.4936 18.9649 22.9598 18.6212 23.3036Z" fill="#219EBC"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next slider-arrow-btn" aria-label="Вперёд"><svg width="22" height="44" viewBox="0 0 22 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.6212 23.3036L8.25005 33.6748L5.65771 31.0824L14.7327 22.0074L5.65771 12.9324L8.25005 10.3401L18.6212 20.7113C18.9649 21.0551 19.158 21.5213 19.158 22.0074C19.158 22.4936 18.9649 22.9598 18.6212 23.3036Z" fill="#219EBC"/></svg></button>',
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });

  $(".slider-trainers").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev slider-arrow-btn" aria-label="Назад"><svg width="22" height="44" viewBox="0 0 22 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="rotate-180"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.6212 23.3036L8.25005 33.6748L5.65771 31.0824L14.7327 22.0074L5.65771 12.9324L8.25005 10.3401L18.6212 20.7113C18.9649 21.0551 19.158 21.5213 19.158 22.0074C19.158 22.4936 18.9649 22.9598 18.6212 23.3036Z" fill="#219EBC"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next slider-arrow-btn" aria-label="Вперёд"><svg width="22" height="44" viewBox="0 0 22 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.6212 23.3036L8.25005 33.6748L5.65771 31.0824L14.7327 22.0074L5.65771 12.9324L8.25005 10.3401L18.6212 20.7113C18.9649 21.0551 19.158 21.5213 19.158 22.0074C19.158 22.4936 18.9649 22.9598 18.6212 23.3036Z" fill="#219EBC"/></svg></button>',
    dots: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });
});
