console.log('Up and running.');

let odell = document.getElementById('odell');
let joshNorman = document.getElementById('joshNorman');


odellLeft = 0;
joshNormanLeft = 0;


window.onkeydown = movePlayer;




function movePlayer (e){
  switch(e.keyCode){
    case 79:
      odellLeft += Math.floor(Math.random() * Math.floor(50));
      odell.style.left = `${odellLeft}px`;
      odell.style.left > `800px` ? alert('Nice run, Obj!') : null;
    break;
    case 74:
      joshNormanLeft += Math.floor(Math.random() * Math.floor(50));
      joshNorman.style.left = `${joshNormanLeft}px`;
      joshNorman.style.left > `800px` ? alert('Nice run, Norman!') : null;
      break;
      default:
        null;
  }
};
