$('#main-nav a').on('click',function(){
  let category = "#" + $(this).attr('data-related-panel');
  console.log(category);
  if ($('.active').attr('data-related-panel') === $(this).attr('data-related-panel')) {
    $('#subnav').slideUp();
    $(this).removeClass('active');
  } else {
    $('#main-nav a').removeClass('active');
    $(this).addClass('active');
    $('#subnav').slideDown();
    $('.nav-panel').hide();
    $(category).fadeIn();
  };
});
