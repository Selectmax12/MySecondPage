$(function(){
$('.header-slider').slick({
    dots: true, 
    prevArrow: '<button type="button" class="slick-prev"><img src="images/Vector.svg" alt="vector"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/Vector1.svg" alt="vector1"></button>'
});



$('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    prevArrow: '<button type="button" class="product-prev"><img src="images/Vector22.svg" alt="vector"></button>',
    nextArrow: '<button type="button" class="product-next"><img src="images/Vector44.svg" alt="vector1"></button>',
    asNavFor: '.product__content'
    
  });
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    fade: true,
    arrows: false
  });



});
