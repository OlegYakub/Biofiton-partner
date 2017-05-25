
/*==============slick=============*/

$('.catalog__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  infinite: false,
  arrows: true,
  prevArrow: '.arrs__left',
  nextArrow: '.arrs__right',
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

      }
    },
    
    {
      breakpoint: 744,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(document).ready(function() {



/*================modal=====================*/
	
	$('.btn').click(function(){
		$('.header').modal({
		  fadeDuration: 250,
		  fadeDelay: 0.80
		});
	})
	
});