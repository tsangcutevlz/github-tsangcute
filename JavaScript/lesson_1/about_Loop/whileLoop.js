// while loop

var myArray = [
    'Javascript',
    'PHP',
];

var i = 1;

while ( i <= 1000 ){
    console.log(i);
    i++;
}

var j = 0;

while ( j < myArray.length){
    console.log(myArray[j]);
    j++;
}


// do ... while loop
var i = 0;
var isSuccess = false;


do {
    i++;
    console.log('nạp thẻ lần ' + i);

    if(false) {
        isSuccess = true;
    } 

} while( !isSucces && i <= 3)