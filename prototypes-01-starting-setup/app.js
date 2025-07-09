class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = "Max";

  constructor() {
    super();
    this.age = 30;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age}`);
  }
}

// function Person() {
//   this.age = 30;
//   this.name = "Max";
//   this.greet = function () {
//     console.log(`Hi, I'm ${this.name} and I'm ${this.age}`);
//   };
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// Person.describe = function () {
//   console.log("Creating persons....");
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// const person = new Person();
// console.dir(Person);
// console.log(person);
// console.dir(Object);

const course = {
  title: "JavaScript - The Complete Guide",
  rating: 5,
};

console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});
console.log(Object.getPrototypeOf(course));

course.printRating();

const student = Object.create({
  printProgress: function () {
    console.log(this.progress);
  },
});

console.log(student);
