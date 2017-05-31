var windowWidth = $(window).width();
var windowHeight = $(window).height();

$(document).ready(function() {

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
      breakpoint: 1170,
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

$('.burger-menu__organs').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  infinite: false,
  arrows: true,
 
});

$('.burger-menu__types').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  dots: false,
  infinite: false,
  arrows: false,
});

$('.burger').click(function(){
  $('.burger-menu').toggleClass('burger-menu--dropped');
  $('.header__wrapper').toggleClass('header__wrapper--active');
  $('.overlay').toggle();
  $('.body').toggleClass('body--overflow');
});

$('#news-paginator').pagination({
  items: 100,
  itemsOnPage: 10,
  cssStyle: 'light-theme',
  displayedPages: 3,
});


/*================truncate==============*/
function truncate(str, maxlength){
  var l = str.length;

  if( l > maxlength){
    str = str.slice(0, maxlength - 3) + "...";
    return str;
    
  }else{
    return str;
  }
}

$('.news .new__text').each(function(i, el){
    var r = $(el).text();
    $(el).text(truncate(r, 235));
  });

if(windowWidth < 1170 && windowWidth > 961){
  $('.card__text').each(function(i, el){
    var r = $(el).text();
    $(el).text(truncate(r, 445));
  });
}else if( windowWidth < 960  && windowWidth > 743){
  $('.card__text').each(function(i, el){
    var r = $(el).text();
    $(el).text(truncate(r, 365)); //265
  });
}

});