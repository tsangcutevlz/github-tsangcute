// myEvery but used in other way

// C1
Array.prototype.every2 = function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(!callback(this[index], index, this)){
                return false;
            }
        };
    }
    return true;
}

// C2
Array.prototype.every2 = function(callback){
    var output = true;
    for( var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index],index,array);
            if(!result){
                output = false;
                break;
            }
        }
    }
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