
$(document).ready(function(){
    $("#main-nav a").on("click", function(){
      let links = $(this).data("related-panel");
      console.log(links)
      
      $("#" + links).slideUp();
       
    })


    


})