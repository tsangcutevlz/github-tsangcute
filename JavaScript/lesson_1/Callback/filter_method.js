// filter but used in other way

Array.prototype.filter2 = function(callback){
    var output = [];
    for( var index in this ){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if(result){
                output.push(this[index]);
            }
        }
    }
}

var courses = [
    {
        name: 'Javascript',
        cost: 680
    },
    {
        name: 'PHP',
        cost: 860,
    },
    {
        name: 'Ruby',
        cost: 980
    }

];

var filterCourses = courses.filter(function(course, index, array){
    return course.coin > 700;
});

console.log(filterCourses);