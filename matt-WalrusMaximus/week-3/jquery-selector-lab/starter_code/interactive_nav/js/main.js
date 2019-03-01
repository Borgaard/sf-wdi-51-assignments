$(document).ready(function () {
    
    $('#main-nav a').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('#subnav').slideUp(800);
        } else {
            
            $('#main-nav a').removeClass('active');
            $(this).addClass('active');
            $('#subnav').slideDown(500);
            $('.nav-panel').hide(400);

            let activeSection = $(this).data('related-panel');

            $('#' + activeSection).show(); //???
        }
    });
});