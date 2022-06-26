// Nested Loop: vòng lặp lồng nhau 

var myArray = [
    [1, 2],
    [3, 4],
    [5, 6],  
];

for ( var i = 0; i < myArray.length; i++){
    for(j = 0; j < myArray[i].length; j++){
        console.log(myArray[i][j]);
    }
}