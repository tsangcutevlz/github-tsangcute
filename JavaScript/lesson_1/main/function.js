function writeLog() {
    var myString = '';
    for(var param of arguments){
        myString += `${param} - `;
    }
    console.log(myString);
}

writeLog('Log 1', 'Log 2', 'Log 3');


// return

function sum(a, b) {
    return a + b;
}

var result1 = sum(2, 10);

console.log(sum);



// Các loại function
// 1. Declaration function
// 2. Expression function
// 3. Arrow function

// Declaration function: giúp gọi được tới hàm trước khi định nghĩa

function showMessage(){
    console.log('Declaration function');
}

// Expression function: không giúp gọi được tới hàm trước khi định nghĩa

var showMessage2 = function() {
    console.log('Expression function');
}

setTimeOut(function autoLogin(){
    alert('hello')
}, 1000);

var myObject = {
    myFunction: function(){

    }
}
