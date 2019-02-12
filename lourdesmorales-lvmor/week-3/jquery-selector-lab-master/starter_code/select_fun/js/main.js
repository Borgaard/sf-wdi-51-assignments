var project = [1, 2, 3];

$(document).ready(function(){
	$(".btn-1").on("click", function(){
		$(".projImg").attr("src", "images/sample-img1.jpg");
	})//end of button 1 func
	$(".btn-2").on("click", function(){
		$(".projImg").attr("src", "images/sample-img2.jpg");
	})//end of button 2 func
	$(".btn-3").on("click", function(){
		$(".projImg").attr("src", "images/sample-img3.jpg");
	})//end of button 3 func
})//end of ready func
