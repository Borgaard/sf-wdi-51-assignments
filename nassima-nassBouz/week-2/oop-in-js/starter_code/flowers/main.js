function Flower(name, petals, smells) {
  this.name = name;
  this.petals = petals;
  this.smells = smells;
};

Flower.prototype = {
  bloom: function(){
    console.log(`${this.name} is prety`);
  }
};
