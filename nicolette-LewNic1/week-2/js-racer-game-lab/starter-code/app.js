/* [x] targeted element
	[x] saved elments in var
	[x] move sq with left margin
	[x] assign keycode
	[x] set event listener
	[] if loop
	[x] set function*/



var a = document.querySelector(".red");
var l = document.querySelector(".blue"); 

/* add event listener*/
document.addEventListener("keydown", moveSquare);


/*var jordyn 
var marley
var endPage = 58 */
var amove = 2
var lmove = 2
var end = 500
var akeyPress = 65
var lkeyPress = 76
function moveSquare(e) {
	
	if (a.offsetLeft >= end)	{
		alert("winner red");

	}	

	else if (l.offsetLeft >= end) {
		alert("winner blue");
	} 

	else if (e.keyCode === akeyPress) {
		/*some code*/
		/*var jordyn - add increments*/
		amove += 2
		console.log("Move inside akeypress at " + amove)
		a.style.marginLeft= `${amove}em`;
		
	}	
		
		else if (e.keyCode === lkeyPress) {
			/*some code*/
			/*var marley -add increments*/
			lmove += 2
			console.log("Move inside lkeypress at " + lmove)
		l.style.marginLeft= `${lmove}em`;
		
		}
		

}

