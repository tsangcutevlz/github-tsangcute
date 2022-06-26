// Break

for ( var i = 0; i < 10; i++){
    console.log(i);

    if( i >= 5){
        break;
    }
} // 0 1 2 3 4 5 

// Continue 

for(var i = 0; i < 10; i++){
    if (i%2 !== 0){
        continue;
    }
    console.log(i);
} // 0 2 4 6 8
