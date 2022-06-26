// Enhanced object literals

// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến

var name = 'Javascript';
var price = 1000;

// 1: Định nghĩa key: value cho object
// C1
var course = {
    name: name,
    price: price,
}
// C2 
var course = {
    name,
    price,
}

console.log(course);

// 2: Định nghĩa method cho object
// C1
var course = {
    name,
    price,
    getName: function(){
        return name;
    }
}
// C2
var course = {
    name,
    price,
    getName(){
        return name;
    }
}

// 3: Định nghĩa key cho object dưới dạng biến

var fieldName = 'new-name';
var fieldPrice = 'price';

const course = {
    name: 'Javascript',
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000,
}


