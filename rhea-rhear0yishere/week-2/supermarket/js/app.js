var buttons=['.cerealButton','.juiceButton','.candyButton'];

var shoppingList =[];

var list = [".crunch",".cheerios",".fruitLoops",".puffs",".raisinBran",
".kitkat",".skittles",".mm",".snickers",".twix",".appleJuice",".carrotJuice",
".grapeJuice",".orangeJuice",".tomatoJuice"];

listeners(buttons,imgFunc);
listeners(list,addToList);

function listeners (a,b){
    for ( i in a) {
        c= a[i]
        document.querySelector(c).addEventListener('click', b);
    }
}

function imgFunc () {
    if(this.className === "cerealButton"){
        show('.cerealImages','.juicesImages','.candyImages');
    }else if(this.className === "juiceButton"){
        show('.juicesImages','.cerealImages','.candyImages');
    }else if(this.className === "candyButton"){
        show('.candyImages','.cerealImages','.juicesImages')
    }
}

function show(x,y,z){
    document.querySelector(x).style.display="block";
    document.querySelector(y).style.display="none";
    document.querySelector(z).style.display="none";
}


function addItem(){
    var ul = document.querySelector("ul")
    var listItem = document.createElement("li");
    listItem.textContent = shoppingList[shoppingList.length-1];
    ul.appendChild(listItem);
}


function addToList(){
    let g = this.className;
    switch(g){
        case "crunch":
            shoppingList.push("Crunch");
            break;
        case "cheerios":
            shoppingList.push("Cheerios")
            break;
        case "fruitLoops":
            shoppingList.push("Fruit Loops");
            break;
        case "puffs":
            shoppingList.push("Puffs");
            break;
        case "raisinBran":
            shoppingList.push("Raisin Bran");
            break;
        case "kitkat":
            shoppingList.push("Kit Kat");
            break;
        case "skittles":
            shoppingList.push("Skittles");
            break;
        case "mm":
            shoppingList.push("M&Ms");
            break;
        case "snickers":
            shoppingList.push("Snickers");
            break;
        case "twix":
            shoppingList.push("Twix");
            break;
        case "appleJuice":
            shoppingList.push("Apple Juice");
            break;
        case "orangeJuice":
            shoppingList.push("Orange Juice");
            break;
        case "tomatoJuice":
            shoppingList.push("Tomato Juice");
            break;
        case "grapeJuice":
            shoppingList.push("Grape Juice");
            break;
        case "carrotJuice":
            shoppingList.push("Carrot Juice");
            break;

        default:
            console.log("nothing")

    }

    addItem();
}












