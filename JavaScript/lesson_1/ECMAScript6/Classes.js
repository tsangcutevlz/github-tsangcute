// Classes

// function Course(name, price){
//     this.name = name;
//     this.price = price;
// }

class Course {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price
    }
}

const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('Javascript', 1200);

console.log(phpCourse);
console.log(jsCourse);

// 
