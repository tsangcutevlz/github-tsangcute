var fullName = new String('Tan Sang');

// backslash ( \ )

var fullName1 = 'TanSang la \'sieu nhan\'';
var fullName2 = 'day la dau \\'; 

console.log(fullName1);
console.log(fullName2);

// đếm kí tự
console.log(fullName1.length);

//

var firstName = 'Tan';
var lastName = 'Sang';
// Cách 1
console.log('Toi la ' + firstName + ' ' + lastName);
// ES6 (Cách 2)
console.log(`Toi la: ${firstName} ${lastName}`)


// JAVASCRIPT STRING METHODS

var myString = 'Nguyen Tan Sang Tan';

// ----------- 1. Length: đo độ dài của chuỗi 
console.log(myString.length);

// ----------- 2. Find index: tìm ký tự trong chuỗi
console.log(myString.indexOf('Ta'));
// nếu không tìm được thì trả về -1

console.log(myString.indexOf('Ta', 6)); 
// phần tử thứ 2 là vị trí nó bắt đầu tìm kiếm  

console.log(myString.lastIndexOf('Ta'));
// tìm kiếm phần tử từ cuối 

console.log(myString.search('Ta'));
// search khác indexOf thứ 1 là không thể quy định vị trí nó bắt đầu tìm
// thứ 2 là search giúp chúng ta tìm theo biểu thức chính quy 

// ----------- 3. Cut string: cắt chuỗi
console.log(myString.slice(7,10)) 
//cắt từ vị trí thứ 5 đến 7 do nó bắt đầu từ 0
console.log(myString.slice(-3,-1));
// cắt từ phải sang trái 

// ----------- 4. Replace: ghi đè 

console.log(myString.replace('Tan', 'Tấn'));

console.log(myString.replace(/Tan/g,'Tấn')); 
// lấy tất cả chữ trong "/.../g" có trong biến để thay đổi



// ----------- 5. Convert to upper case: chuyển đổi tất cả thành chữ hoa
console.log(myString.toUpperCase());

// ----------- 6. Convert to lower case: chuyển đổi tất cả thành chữ thường
console.log(myString.toLowerCase());

// ----------- 7. Trim: loại bỏ khoảng trắng thừa ở 2 đầu ( rất hữu ích )
console.log(myString.trim());

// ----------- 8. Split: giúp cắt 1 chuỗi thành 1 array ( chỉ cần tìm 1 điểm chung của chuỗi đó thôi )
var languages1 = 'Javascript, PHP, Ruby';

console.log(languages1.split(', '));

var languages2 = 'Javascript';
console.log(languages2.split(''));

// ----------- 9. Get a character by index: lấy được 1 kí tự bởi 1 index cho trước 

const myString2 = 'Tan Sang';

console.log(myString2.charAt(1)) // trả về chữ a
console.log(myString2.charAt(10)) // trả về chuỗi rỗng ( type: string )
console.log(myString2[0]) // trả về chữ T
console.log(myString2[10]) // trả về Undefined  




