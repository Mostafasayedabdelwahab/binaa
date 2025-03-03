$('.variable-width').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  rtl: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
});

$('.filtering').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  rtl: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [ {
  breakpoint: 768,
  settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3
  }
},
{
  breakpoint: 480,
  settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1
  }
}
]
});
