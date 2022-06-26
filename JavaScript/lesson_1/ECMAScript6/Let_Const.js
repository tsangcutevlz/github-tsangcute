// 1. Var / Let, Const: Scope ( Phạm vi truy cập ), Hosting
// 2. Const / Var, Let: Assignment ( Gán lại giá trị cho các biến )

// Code blocK: if else, loop, {}, ...

// Code thuần: Var
// Babel: Const, Let
// Khi định nghĩa biến và không gán lại biến đó thì dùng Const
// Khi cần gán lại giá trị cho biến thfi dùng Let

// Scope
{
    var course = 'Javascript basic!';
}

{
    let course = 'Javascript basic!'; // Lỗi 
}

{
    const course = 'Javascript basic!';  // Lỗi
}

console.log(course); // bên ngoài thì var vẫn truy cập được 

// Hosting

a = 1;
b = 1;

var a;
let b; // lỗi và const tương tự

console.log(a);
console.log(b);


// Assignment

const a = 1;
var c = 2;
let d = 3;
a = 100;
b = 200;
c= 300;
console.log(a); // Lỗi

