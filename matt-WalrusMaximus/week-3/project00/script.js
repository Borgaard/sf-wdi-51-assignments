$(document).ready(function () {

    $("#about").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#aboutScroll").offset().top - 200
        }, 750);
    });

    $("#projects").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#projectsScroll").offset().top - 200
        }, 750);
    });

    $("#testimonials").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#testimonialsScroll").offset().top - 200
        }, 750);
    });

    $("#contact").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contactScroll").offset().top - 200
        }, 750);
    });

    $('#hamburger').on('click', function() {
        $('.nav').toggle("slide");
        $('#title').toggle("slide");
    })
    $("#actualWalrus").mouseleave(function () { 
        $('#actualWalrus').slideToggle()
        $('#walrus').slideToggle()        
    });

    $("#walrus").mouseleave(function () { 
        $('#actualWalrus').slideToggle()
        $('#walrus').slideToggle()        
    });

    var num = 1;
    
    // some vestigial code from when I decided an interval loop wouldnt work. turns out I was wrong.
    // setInterval(function() {
    //     switch (num) {
    //         case 1:
    //             $(`#quote1`).hide();
    //             $(`#quote2`).fadeToggle(1000);
    //             num++;
    //             break;
    //         case 2:
    //             $(`#quote2`).hide();
    //             $(`#quote3`).fadeToggle(1000);
    //             num++;
    //             break;
    //         case 3:
    //             $(`#quote3`).hide();
    //             $(`#quote4`).fadeToggle(1000);
    //             num++;
    //             break;
    //         case 4:
    //             $(`#quote4`).hide();
    //             $(`#quote1`).fadeToggle(1000);
    //             num = 1;
    //             break;
    //         }                
    //     },6000);

    setInterval(function() {
        if (num <= 3) {
            $(`#quote${num}`).fadeOut(750);
            $(`#quote${num + 1}`).delay(750).fadeToggle(1250);
            num++
        } else {
            $(`#quote${num}`).fadeOut(750);
            $(`#quote1`).delay(750).fadeToggle(1250);
            num = 1;
        }
    },5000);

// setInterval(function() {
//     var num = 0;
//     // var one = 1;
//     console.log("outside if loop")
//     if (num <= 3) {
//         console.log("inside if loop")
//         $(`#quote${num}`).hide();
//         $(`#quote${num + 1}`).show();
//         num++
//     }
// },2500);
    
});