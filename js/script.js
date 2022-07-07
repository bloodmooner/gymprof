
$(document).ready(function(){

    $('.product-slider__wrapper').slick({
        'vertical': true,
        'slidesToShow': 3,
        'arrows': true,
        nextArrow: $(document).find('.product-slider__arrow_bottom'),
        prevArrow: $(document).find('.product-slider__arrow_top'),
      });
  
});

