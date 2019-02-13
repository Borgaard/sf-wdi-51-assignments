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

let cat = new Animalw("cat", "Meo");
let dog = new Animalw("dog", "wofwof");
let bird = new Animalw("bir", "tweet tweet");
let mouse = new Animalw("mouse", "squake");

cat.makeNoise();
dog.makeNoise();
bird.makeNoise();
mouse.makeNoise();

//  part2
let animals = [cat, dog, bird, mouse];

for (attr in animals){
console.log(animals[attr].makeNoise());
}

//part3
for (attr in animals){
  animals[attr].hunger = 10;
};
for (attr in animals){
console.log(animals[attr].hunger);
}
// part4
Animalw.prototype.walk = function(){
    console.log(`${this.fname} took a walk`);
    this.hunger -= 1;
  }

cat.walk(); // will display cat took a walk
cat.hunger;  // willreturn 9 because cat took a walk

// ---------- part5--------------







