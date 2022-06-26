var array = ['a', 'b', 'c', 'a', 'b', 'c']

console.log([...(new Set([array]))]);

// de quy

function countDown(num) {
    if(num > 0){
        return countDown(num - 1);
    }
    return num;
}

countDown(10);

//

function loop(start, end, cb){
    if (start <= end){
        cb(start);
        return loop(start++, end, cb);
    }
}

var array = ['Javascript', 'PHP', 'Ruby'];

loop(0, array.length - 1, function(index) {
    console.log('index -  ', index, ': ', array[index] );
});


// bài toán tính giai thừa

function giaiThua(num){
    if(num > 0){
        return num * giaiThua(num-1);
    } else { return 1; }
}

var giaiThuaCuaBon = giaiThua(4);