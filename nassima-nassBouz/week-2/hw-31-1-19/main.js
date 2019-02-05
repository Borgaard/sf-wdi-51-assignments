/// part 1
class Animalw{
  constructor(fname, noise){
    this.fname = fname;
    this.noise= noise;
  }
  makeNoise(){
    return `${this.fname} makes ${this.noise}`;
  }
};

let cat = new Animal("catty", "Meo");
let dog = new Animal("doggy", "wofwof");
let bird = new Animal("birdy", "tweet tweet");
let mouse = new Animal("mousy", "squake");

cat.makeNoise();
dog.makeNoise();
bird.makeNoise();
mouse.makeNoise();

//  part2
let animals = [cat, dog, bird, mouse];

for (attr in animo){
console.log(animo[attr].makeNoise());
}

//part3
for (attr in animo){
  animo[attr].hunger = 10;
};

// part4
Animalw.prototype = {
  walk(){
    console.log(`${this.fname} took a walk`);
    this.hunger -= 1;
  }
}




