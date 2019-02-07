
$('p').on('click', function (event) {
    alert(`p was ${event.type}ed`);
    event.stopPropagation();
});

$('input').on('keyup', function(event) {
    $( "#log" ).html( event.type + ": " + event.which );
})

$('p').on('mouseenter', function (event) {
    console.log(event.target);
});

$('a').on('click', function (event) {
    event.preventDefault();
    console.log('Stopped from reloading');
});

$('div').on('click', function (event) {
    console.log('div is clicked');
});
