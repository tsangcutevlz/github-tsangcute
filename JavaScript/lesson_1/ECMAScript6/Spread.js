// Spread


// Array
var array = ['Javascript', 'Ruby', 'PHP'];

var array2 = ['ReactJS', 'Dart'];

var array3 = [...array2, ...array1]; // ['ReactJS', 'Dart', 'Javascript', 'Ruby', 'PHP']

// Obj

var object1 = {
    name: 'Javascript',
};

var object2 = {
    price: 1000,
};

var object3 = {
    ...object1,
    ...object2,
};

console.log(object3);


//  

var defaultConfig = {
    api: 'https://www.youtube.com/',
    apiVersion: 'v1',
    other: 'other',
};


var exerciseConfig = {
    ...defaultConfig,
    other: 'none',
};

// 

var array = ['Javascript', 'Ruby', 'PHP'];

function logger(a, b, c){
    console.log(a, b, c);
}


logger(...array);