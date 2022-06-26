// Destructuring

var array = ['Javascript', 'PHP', 'Ruby'];
// C1
var a = array[0];
var b = array[1];
var c = array[2];

// C2
var [a2, b2, c3] = array;
var [a3, , c3] = array;

var [a4, ...rest] = array;

console.log(a4); // Javascript
console.log(rest); // PHP, Ruby



var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    children:{
        name: 'PHP',
    },
    description: 'success'
}

var { name: parentName, children:{ name }, price, description = 'default' } = course; // price2: undefied

var { name, ...rest } = course;

console.log(rest);

function logger(...params) {
    console.log(params);
}

console.log(logger(1,2,3,4,5,6,7,8)) // nó sẽ trả về 1 mảng 8 phần tử từ 1 -> 8 rồi in ra 


function logger2({name, price, ...rest}) {
    console.log(name);
    console.log(price);
    console.log(rest);
}

logger2({
    name: 'Javascript',
    price:1000,
    description: 'hello'
});

function logger3([a, b, ...rest]){
    console.log(a);
    console.log(b);
    console.log(rest);
}

logger3([2, 3, 4, 5, 6]);