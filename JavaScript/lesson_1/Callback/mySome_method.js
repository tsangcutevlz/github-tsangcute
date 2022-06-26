// my some but used in other way

Array.prototype.some2 = function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                return true;
            }
        };
    }
    return false;
}

var courses = [
    {
        name: 'Javascript',
        cost: 680,
        isFinish: true,
    },
    {
        name: 'PHP',
        cost: 860,
        isFinish: false,
    },
    {
        name: 'Ruby',
        cost: 980,
        isFinish: false,
    }

];

var result = courses.some(function(course, index, array){
    return course.isFinish;
});

console.log(result);