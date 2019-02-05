//attr()
//example $("img").attr("width", "500");

//Pseudocode:
// Interactive Nav Program
// when user clicks any anchor on the main nav bar:
// if (subnav is hidden), then slide down the subnav && fade in related panel
// if (subnav showing && user clicks different anchor), hide the current panel && fade in the current panel with corresponding subnav options
//if (subnav showing && user clicks on category showing), slide up this subnav




$("nav a").on("click", function() {
  if($("#subnav").is(":hidden") === true){
    $("#subnav").slideDown();
    $(this).data("related-panel").fadeIn();
  }

  if($("#subnav").is(":visible") === true && $(this).siblings() !== $(this)) {
    $(this)hide();
    $(this).data("related-panel").fadeIn();
  }

  if($("#subnav").is(":visible") === true && $("nav-panel").on("click", function() { $(this).show()})
    $("#subnav").slideUp();
})
