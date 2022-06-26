// forEach but used in different way
// 1. Object Property
// 2. For in
Array.prototype.forEach2 = function(callback){
    for( var index in this ){
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }
    }
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby',
];

courses.length = 100;

console.log(courses);

var output = courses.forEach(function(course, index, array){
    console.log(course, index, array);
});

console.log(output);