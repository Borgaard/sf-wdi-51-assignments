class Product {
  constructor(id, name,price,category,imageLink) {
    this.prodId = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.imageLink = imageLink;
  }

  addToCart(){
    let productToAdd = productCatalog.find(x => x.prodId === this.id);
    inCart.push(productToAdd);
    showInCart(productToAdd);
  }

  removeFromCart(){
    // pop out
  }

  updateQuantity(quantity){
    // change quanity, do math
  }
}


let kitKat = new Product("kitKat","Kit Kat",1.50,"candy","images/candy/kit-kat.jpg");
let mms = new Product("mms","m&ms",1.50,"candy","images/candy/m&ms.jpg");
let skittles = new Product("skittles","Skittles",1.50,"candy","images/candy/skittles.jpg");
let snickers = new Product("snickers","Snickers",1.50,"candy","images/candy/snickers.jpg");
let twix = new Product("twix","Twix",1.50,"candy","images/candy/twix.jpg");
let cheerios = new Product("cheerios","Cheerios",4.00,"cereal","images/cereal/cheerios.jpg");
let crunch = new Product("crunch","Crunch",4.00,"cereal","images/cereal/crunch.jpg");
let fruitLoops = new Product("fruitLoops","Fruit Loops",4.00,"cereal","images/cereal/fruit-loops.jpg");
let puffs = new Product("puffs","Puffs",4.00,"cereal","images/cereal/puffs.jpg");
let raisinBran = new Product("raisinBran","Raisin Bran",4.00,"cereal","images/cereal/raisin-bran.jpg");
let appleJuice = new Product("appleJuice","Apple Juice",3.00,"juice","images/juice/apple-juice.jpg");
let carrotJuice = new Product("carrotJuice","Carrot Juice",3.00,"juice","images/juice/carrot-juice.jpg");
let grapeJuice = new Product("grapeJuice","Grape Juice",3.00,"juice","images/juice/grape-juice.jpeg");
let orangeJuice = new Product("orangeJuice","Orange Juice",3.00,"juice","images/juice/orange-juice.jpg");
let tomatoJuice = new Product("tomatoJuice","Tomato Juice",3.00,"juice","images/juice/tomato-juice.jpg");

let productCatalog = [kitKat,mms,skittles,snickers,twix,cheerios,crunch,fruitLoops,puffs,raisinBran,appleJuice,carrotJuice,grapeJuice,orangeJuice,tomatoJuice];
let candies = [kitKat,mms,skittles,snickers,twix];
let cereals = [cheerios,crunch,fruitLoops,puffs,raisinBran];
let juices = [appleJuice,carrotJuice,grapeJuice,orangeJuice,tomatoJuice];


















