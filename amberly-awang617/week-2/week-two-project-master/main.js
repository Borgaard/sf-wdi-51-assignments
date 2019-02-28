const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");

let appear = function () {
  document.querySelector(".pictures").style.display = "flex";
};

let appear1 = function() {
  var emptyImg = document.querySelectorAll("img")
  for (var i=0; i<emptyImg.length; i++) {
    emptyImg[i].setAttribute("src", "image/isabelle.png");
    console.log(emptyImg[i]);
  }
  appear();
}

let appear2 = function () {
  document.querySelector("img").setAttribute("src", "image/villager.png");
  appear();
}

let appear3 = function () {
  document.querySelector("img").setAttribute("src", "image/isabelle-wins.gif");
  appear();
}

item1.addEventListener('click', appear1);
item2.addEventListener('click', appear2);
item3.addEventListener('click', appear3);


// for (var i=0; i< items.length; i++) {
//   items[i].addEventListener('click', appear);
//   if (i === 0) {
//     document.querySelector("img").setAttribute("src", "image/isabelle.png");
//   }
//   if (i === 1){
//     document.querySelector("img").setAttribute("src", "image/villager.png");
//   }
// }

