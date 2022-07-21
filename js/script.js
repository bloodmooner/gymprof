
$(document).ready(function(){

  let menuIsOpen = false;
  //Menu toggle
  $('.header__burger-icon').on('click', function() {
    $('.header-mobile').addClass('header-mobile_active');
    menuIsOpen = true;
  });
  $('.header-mobile__close-image').on('click', function() {
    $('.header-mobile').removeClass('header-mobile_active');
    menuIsOpen = false;
  });

    //Scroll menu

 $(window).scroll(function(){
  var sticky = $('.header'),
      scroll = $(window).scrollTop();

  if (scroll > 0) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
 });


 //Dropdown
  $('.header__menu-list .header__menu-item:first-child > a').on('click', function( e ){
    e.preventDefault();

  });

  
  $(".header__menu-list li").hover(function() {
    var isHovered = $(this).is(":hover");
    if (isHovered) {
      $(this).children("ul").stop().slideDown(300);
    } else {
      $(this).children("ul").stop().slideUp(300);
    }
  });

  //Smooth scroll
  $("a.promo__plan").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
  });


    $('.certificates__wrapper').slick({
        'slidesToShow': 4,
        'arrows': false,
        responsive: [
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 471,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          },
        ]
    });

    $('.testimonials__wrapper-mobile').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        arrows: false
    });


    





      // START PRODUCT SLIDERS

      
      $('.product-slider__wrapper').slick({
        'vertical': true,
        'slidesToShow': 3,
        'arrows': true,
        nextArrow: $(document).find('.product-slider__arrow_top'),
        prevArrow: $(document).find('.product-slider__arrow_bottom'),
        asNavFor: '.product__image-slider',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              'vertical': false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              'vertical': false,
              dots: true,
              appendDots: $(document).find('.product-slider__dots')
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });


    $('.product__image-slider').slick({
        'slidesToShow': 1,
        'arrows': false,
        fade: true,
        cssEase: 'linear',
        swipe: false
    }).on('setPosition', function (event, slick) {
      slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });
  


    

    let getSlideIndex = function(className) {
      let productSliderItems = $('.product__image-slider .slick-slide').not('.slick-cloned');
      let productSliderIndex = 0;

      $(productSliderItems).each(function(i,elem) {
        /* console.log($(this).find('.reel').closest('.slick-slide').attr('data-slick-index')); */

        if($(this).find(className).closest('.slick-slide').attr('data-slick-index')) {
          productSliderIndex = $(this).find(className).closest('.slick-slide').attr('data-slick-index');
        }
      });
      return productSliderIndex;
    };

    $('.icon-360').click(function() {
      var slider = $('.product-slider__wrapper');
      slider[0].slick.slickGoTo(parseInt(getSlideIndex('.reel')));
    }); 
    
    $('.icon-yt').click(function() {
      var slider = $('.product-slider__wrapper');
      slider[0].slick.slickGoTo(parseInt(getSlideIndex('.video__content')));
    }); 



    // END PRODUCT SLIDERS



    let videoPlayBtn = $('.video__play-btn');
    let videoBg = $('.video__background');
    let videoYoutube = $('.video__youtube');
  
    videoPlayBtn.on('click', function() {
      let videoSrc = videoYoutube.prop('src');
  
      videoYoutube.attr('src', `${videoSrc}&autoplay=1`);
      videoBg.css('display', 'none');
      videoPlayBtn.css('display', 'none');
  
      $(".youtube").each(function() {
        // Based on the YouTube ID, we can easily find the thumbnail image
        
  
        // Overlay the Play icon to make it look like a video player
        $(this).append($('<div/>', {'class': 'play'}));
  
        
            // Create an iFrame with autoplay set to true
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
  
            // The height and width of the iFrame should be the same as parent
            var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': '100%', 'height': '100%' })
  
            // Replace the YouTube thumbnail with YouTube HTML5 Player
            $(this).replaceWith(iframe);
        
    });
  });



  $('.tabs-controls__item').click(function(){
    $('.tabs-controls__item').removeClass('tabs-controls__item_active');
    $(this).addClass('tabs-controls__item_active');


    $('.order__tabs-item').removeClass('order__tabs-item_active');
    $($(".order__tabs-item")[$(this).index()]).addClass('order__tabs-item_active');
  });


  $('.js-open-modal-order').on('click', function(){
    if($('.header-mobile').hasClass('header-mobile_active')) {
      $('.header-mobile').removeClass('header-mobile_active');
    }
    $('.overlays').addClass('overlays_active');
    $('.modal_order').addClass('modal_order-active');
  });
 
  $('.modal__close').on('click', function(){
    $('.overlays').removeClass('overlays_active');
    $('.modal_order').removeClass('modal_order-active');
  });

  $('.js-open-modal-analysis').on('click', function(){
    $('.overlays').addClass('overlays_active');
    $('.modal_analysis').addClass('modal_analysis-active');
  });
 
  $('.modal__close').on('click', function(){
    $('.overlays').removeClass('overlays_active');
    $('.modal_analysis').removeClass('modal_analysis-active');
  });

});

