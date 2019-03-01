// [X]-Animated Hamburger Menu
// [X]-Have a carousel with sliding images
// [ ]-Click on an image and have it pop out into a modal
// [X]-Form validation
// [X]Smooth scroll down to section on page

const quotes = [
" I'm sorry that people are so jealous of me. But I can't help it that I'm popular.",
"Four for you Glen Coco, You GO Glen Coco! ....And none for Gretchen Weiners. Bye",
"That is so fetch!",
"Jason is flawless.",
"They have two Fendi purses and a silver Lexus.",
"I hear their hair's insured for $10,000.",
"I hear they do car commercials... in Japan.",
"They always look fierce. They always win Spring Fling Queen.",
" YOU CAN'T SIT WITH US!",
"ON WEDNESDAYS WE WEAR PINK!",
"She doesn't even go here!"
]

//check if js is loaded and kawaii
$(document).ready(()=> {
  console.log("connected and kawaii");

   const randomQuote = function(){
    let rand = [Math.floor(Math.random() * quotes.length)];
    $("#testimonials").hide();
    $("#testimonials").text(quotes[rand]).fadeIn("slow");
  }

  $("a[href^='#']").click(function(e) {
    e.preventDefault();

    let position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
      scrollTop: position
    } /* speed */ );
  });


  window.setInterval(randomQuote, 5000);
});
