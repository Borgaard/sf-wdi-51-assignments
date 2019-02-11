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
    },7000);

    photoNum = 1;
    let photoCarousel = setInterval(function() {
        if (photoNum <= 4) {
            $('.photos').children().slideUp(625)
            $(`#photo${photoNum +1}`).delay(1250).slideDown(1250);
            $(`#button${photoNum}`).removeClass("activeButton")
            $(`#button${photoNum + 1}`).addClass("activeButton")
            photoNum++
        } else {
            $('.photos').children().slideUp(625)
            $(`#photo1`).delay(1250).slideDown(1250);
            $(`#button${photoNum}`).removeClass("activeButton")
            $(`#button1`).addClass("activeButton")
            photoNum = 1;
        }
    },8000);

    $('#button1').on("click",function() {
        $('#photoSelector').children().removeClass("activeButton");
        $('#button1').addClass("activeButton")
        $('.photos').children().slideUp()
        $('#photo1').delay(500).slideDown();
        clearInterval(photoCarousel);
    });

    $('#button2').on("click",function() {
        $('#photoSelector').children().removeClass("activeButton");
        $('#button2').addClass("activeButton")
        $('.photos').children().slideUp()
        $('#photo2').delay(500).slideDown();
        clearInterval(photoCarousel);
    });

    $('#button3').on("click",function() {
        $('#photoSelector').children().removeClass("activeButton");
        $('#button3').addClass("activeButton")
        $('.photos').children().slideUp()
        $('#photo3').delay(500).slideDown();
        clearInterval(photoCarousel);
    });

    $('#button4').on("click",function() {
        $('#photoSelector').children().removeClass("activeButton");
        $('#button4').addClass("activeButton")
        $('.photos').children().slideUp()
        $('#photo4').delay(500).slideDown();
        clearInterval(photoCarousel);
    });

    $('#button5').on("click",function() {
        $('#photoSelector').children().removeClass("activeButton");
        $('#button5').addClass("activeButton")
        $('.photos').children().slideUp()
        $('#photo5').delay(500).slideDown();
        clearInterval(photoCarousel);
    });

    $('.photo-box').on("click", function() {
        $(this).toggleClass('fullscreen');
        clearInterval(photoCarousel);  
    });
});

// Challenges :
// Header Z position
// The stupid quote carousel
// Hamburger related issues


    // let photos = [
    //     {
    //         name: "Havok",
    //         img: "images/photo1.jpg"
    //     },
    //     {
    //         name: "Behemoth",
    //         img: "images/photo2.jpg"
    //     },
    //     {
    //         name: "Amon Amarth",
    //         img: "images/photo3.jpg"
    //     },
    //     {
    //         name: "Alestorm",
    //         img: "images/photo4.jpg"
    //     },
    //     {
    //         name: "Slayer",
    //         img: "images/photo5.jpg"
    //     }
    // ]


    // for (i=0;i<photos.length;i++) {
    //     $('.photos').append(`<div class="photo-box">
    //                             <h5>${photos[i].name}</h5>
    //                             <img sec=${photos[i].img}>
    //                         </div>`)
    // }