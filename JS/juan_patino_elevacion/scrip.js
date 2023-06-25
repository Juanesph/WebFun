//1
let example = "I'm the example!";
console.log(example);

console.log("-------------------");

//2
var needle = "haystack";
console.log(needle);

function test() {
  let needle = "magnet";
  console.log(needle);
}
test();

console.log("-------------------");

//3
var brendan = "super cool";

function print() {
  let brendan = "only okay";
  console.log(brendan);
}

print();

console.log(brendan);

console.log("-------------------");

//4
/* var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
} */

console.log("-------------------");

//5
mean();
var food = "chicken"

function mean() {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);

//

console.log("-------------------");

//6
/* console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre); */

console.log("-------------------");

//7
/* dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo); */

console.log("-------------------");

//8
/* console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
 */