
$(document).ready(function(){

    $('.product-slider__wrapper').slick({
        'vertical': true,
        'slidesToShow': 3,
        'arrows': true,
        nextArrow: $(document).find('.product-slider__arrow_top'),
        prevArrow: $(document).find('.product-slider__arrow_bottom'),
        asNavFor: '.product__image-slider',
    });


    $('.product__image-slider').slick({
        'slidesToShow': 1,
        'arrows': false,
        fade: true,
        cssEase: 'linear',
    });
  


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
});

