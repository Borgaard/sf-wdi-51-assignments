// $(document).ready(function(){
// $('#hide').on('click', function(){
// $(this).removeClass('below').addClass('below');
// });
// });

// pre-loader
(function($){
  'use strict';
    $(window).on('load', function () {
        if ($(".pre-loader").length > 0)
        {
            $(".pre-loader").fadeOut("slow");
        }
    });
})(jQuery)