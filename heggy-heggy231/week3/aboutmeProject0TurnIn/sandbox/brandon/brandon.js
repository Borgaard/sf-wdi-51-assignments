var texts = [$('.example'), "example2", "example3"];
var count = 0;
function changeText() {
    $("#example").text(texts[count]);
    count < 3 ? count++ : count = 0;
}
setInterval(changeText, 10000);