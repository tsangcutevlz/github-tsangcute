// Callback: là hàm ( function ) được truyền qua đối só khi gọi hàm khác

// 1. là hàm
// 2. được truyền qua đối số
// 3. được gọi lại ( trong hàm nhận đối số )

function myFunction(param){
   console.log(typeof param); // function
    if(typeof param === 'function'){
        param();
    }
};

function myCallback(value){
    console.log('Value: ', value)
};


myFunction(myCallback);

// --------------------------------------------

Array.prototype.map2 = function(callback) {
    var output = [];
    var arrayLength = this.length;
    for( var i = 0; i < arrayLength; i++){
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

var courses = [
    'Javascipt',
    'PHP',
    'Ruby',
];
//  C1
var htmls = courses.map(function(course){
    return `<h2>${course}<>/h2`;
});

console.log(htmls.join(''));
// C2: tự định nghĩa map

course.map2(function(course){
    return `<h2>${course}<>/h2`;
});

console.log(htmls);