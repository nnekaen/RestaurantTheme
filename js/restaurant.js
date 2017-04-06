// Bootstrap Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scroll: ($($anchor.attr('href')).offset().top - 0)
        }, 50);
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').css({
        target: '.navbar-fixed-top',
        offset: -1
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:invisible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 10
        }
    })

})(jQuery); // End of use strict
