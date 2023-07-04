(function ($, Drupal) {
    "use strict";

    $(window).scroll(function () {
        var scroolheight = $(window).scrollTop();

        if (scroolheight > 150) {
          $('.navbar-expand-lg').addClass('fixed-top');
        }

        if(scroolheight < 149) {
          $('.navbar-expand-lg').removeClass('fixed-top');
        }

      });


})(jQuery, Drupal);
