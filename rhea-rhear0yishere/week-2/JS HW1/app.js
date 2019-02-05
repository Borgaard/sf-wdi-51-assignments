// 1

let name = "Rhea";
let age = "22";
let address = "San Jose";
let greeting = name.concat(" "+ age + " ", address);
console.log(greeting);



// 2
let greeting2 = `${name} ${age} ${address}`;
console.log(greeting2);



// 3
let side1 = 10;
let side2 = 5;
let side3;

side1 = Math.pow(side1,2);
side2 = Math.pow(side2,2);


side3 = Math.sqrt(side1+side2);
console.log(side3);


// 4

  // FOR As long as the count of numbers is less than 20 {
  //     we are going to have the variable largest (which is the largest current number)
  //     the first number that we look at is going to be the value of the variable.
  //     then we look at the next number and compare it to the first one, and if it is larger,
  //     it replaces the previous value as the largest number.
  // }
