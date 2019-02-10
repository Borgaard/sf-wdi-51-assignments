// A $( document ).ready() block.
$( document ).ready(function() {
  console.log( "ready!" );


});
/*
brandon's code
var texts = [$('.example'), "example2", "example3"];
var count = 0;
function changeText() {
    $("#example").text(texts[count]);
    count < 3 ? count++ : count = 0;
}
setInterval(changeText, 10000);
*/

/* 
Heggy's code
var texts = ['example1', 'example2', 'example3'];

function changeText() {
    for(var i = 0; i < texts.length; i++){
        $("#example").text(texts[i]);
    }
}

debugger;
setInterval(changeText, 2000);
*/ 