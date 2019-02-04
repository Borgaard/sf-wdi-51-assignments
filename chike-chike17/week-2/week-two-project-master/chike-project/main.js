let hero = document.getElementsByClassName('hero-icon')[0];

if (!hero) {
  let images = document.getElementsByTagName('img');
  for (var i = images.length - 1; i >= 0; i--) {
    images[i].addEventListener('click', (e) => {
        let imagePath = e.srcElement['src'];
        let imageFile = imagePath.substring(imagePath.indexOf('images'), imagePath.length);
        location.href = "./buy.html?data=" + imageFile;
    });
   }
}

if (hero){
  let location = window.location.search;
  let length = location.length;
  let heroIm = location.substring(location.indexOf('images'), length)
  let newHero = document.getElementsByClassName('hero-icon')[0];
  newHero.src = heroIm;

  let plus = document.getElementsByClassName('plus')[0];
  plus.addEventListener('click', function () {
    let unitNum = document.getElementsByClassName('unit-num')[0];
    let num = Number(unitNum.innerHTML);
    num ++;
    unitNum.innerHTML = num;
  });

let minus = document.getElementsByClassName('minus')[0];
  minus.addEventListener('click', function () {
    let unitNum = document.getElementsByClassName('unit-num')[0];
    if (Number(unitNum.innerHTML) === 0){
      return;
    }
    let num = Number(unitNum.innerHTML);
    num --;
    unitNum.innerHTML = num;
  });

  let checkout = document.getElementsByClassName('checkout')[0];
  checkout.addEventListener('click', function () {
    let total = document.getElementsByClassName('total')[0];
    if (total) {
      return;
    }
    let p = document.createElement('p');
    p.className = 'total'
    let unitNum = document.getElementsByClassName('unit-num')[0];
    p.innerHTML =  "TOTAL: $" + Math.floor(Number(unitNum.innerHTML) * 499.99);
    p.style.fontSize = "20px";
    let tower2 = document.getElementsByClassName('tower2')[0]
     tower2.append(p);
  });
}


