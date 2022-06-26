for (var i = 1; i <= 1000; i++){
    console.log(i);
}

// for .. in .. loop

var myInfo = {
    name: 'Tan Sang',
    age: 17,
    address: 'TPHCM',
};

for(var key in myInfo){
    console.log(myInfo[key]);
    // console.log(key); 
}

var languages = [
    'Javascript',
    'PHP',
    'Ruby',
];

for (var key in languages){
    console.log(languages[key]);
}

var myString = 'Javascript';
console.log(myString[2]); // v 

for ( var key in myString) {
    // console.log(myString[key]);
    console.log(key);
}


//  For .. of loop: muốn lấy ra những phần tử mảng, lấy ra từng chữ cái của chuỗi string

var languages = [
    'Javascript',
    'PHP',
    'Ruby',
];

for (var value of languages){
    console.log(value);
}

var languages = 'Javascript';

for ( var value of languages) {
    console.log(value);
}

var myInfo ={
    name: 'Tan Sang',
    age: 17,
}

// for( var value of myInfo){
//     console.log(value);
// } không chạy được ( báo lỗi )

console.log(Object.keys(myInfo)) ;
// trả về 1 mảng cái keys ( chuyển đổi từ object sang mảng )
 
for ( var value of Object.keys(myInfo)){
    console.log(myInfo[value]);
}

console.log(Object.values(myInfo));

for ( var value of Object.values(myInfo)){
    console.log(value);
}
