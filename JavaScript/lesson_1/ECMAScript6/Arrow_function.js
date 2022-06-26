// Arrow function

const sum = ( a, b ) => {
    return a + b;
}

const sum1 = ( a, b ) => a + b;

console(sum(2,2));


// return object

const sum2 = ( a, b ) => ({ a:a, b:b });

// nếu chỉ có 1 tham số có thể bỏ luôn ngoặc tròn chứa giá trị truyền vào

// const logger = (log) => console.log(log);

const logger = log => console.log(log);

// 
const course = {
    name: 'Javascript basic!',
    // getNane: function(){
    //     return this.name;
    // }
    getNane: () => {
        return this.name;
    } // Undefied
};

console.log(course.getName());


// Constructor

// const Course = function(name, price){
//     this.name = name;
//     this.price = price;
// }

const Course = (name, price) => {
    this.name = name;
    this.price = price;
} 
// Lỗiiiiiii 

const jsCourse = new Course('Javascript', 1000);

console.log(jsCourse);
