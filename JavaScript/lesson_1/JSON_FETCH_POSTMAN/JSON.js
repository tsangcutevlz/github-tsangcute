// 2. JSON ( JavaScript Object Notation )
// 3. Fetch
// 4. DOM location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best practices
// 9. Mistakes
// 10. Performance

// 1. JSON là một định dạng dữ liệu ( chuỗi )
// 2. JSON: JavaScript Object Notation 
// 3. JSON: Number, Boolean, Null, Array, Object

// có 2 thao tác: Mã hóa ( ENCODE )/ Giải mã ( DECODE )
// gọi chính xác là Stringify / Parse
// Stringify: Javascript types -----> JSON
// Parse: JSON -----> Javascript types
// var json = '["Javascript","PHP"]';
// var json = '{"name":"Tan Sang","age":17}';

// Parse
var a = '1';

console.log(JSON.parse(a));


// Stringify

console.log(JSON.stringify(1)); // type: number
console.log(JSON.stringify(null)); // type: string
console.log(JSON.stringify(true)); // type:string
console.log(JSON.stringify([
    'Javascript',
    'PHP',
])); // type: array
console.log(JSON.stringify({
    name: 'Tan Sang',
    age: 17,
})); // type: object



