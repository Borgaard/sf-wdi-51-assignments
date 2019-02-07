var project = [1, 2, 3];

$(document).ready(function() {
  // console.log('test')
  $("button").on("click", function(){
    console.log("it works");
    for(let i=0; i < project.length; i++){
      console.log(project[i]);
      console.log("loop works");
    };
});

});

