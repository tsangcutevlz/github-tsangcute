// includes method

console.log(Array.prototype.includes); // có sẵn ở Array với String
var title = 'Responsive web design';


// thao tác với String ( chuỗi )
console.log(title.includes('web', 0)); // bắt đầu tìm từ vị trí 0 xem có 'web' không
// có trong '' thì trả về true không thì false

console.log(title.includes('w', 2))// bắt đầu tìm từ vị trí chữ s trong 'Responsive'

// thao tác với Array ( mảng )

var courses = ['Javascript', 'PHP', 'Dart'];

console.log(courses.includes('Javascript')); // true
console.log(courses.includes('Ruby')); // false


// ít dùng hơn:
console.log(courses.includes('Javascript'), 1); // false vì nó bắt đầu tìm từ 'PHP'
console.log(courses.includes('Javascript'), -1);// false vì nó bắt đầu tìm từ 'Dart'
// lấy độ dài mảng = 3 + ( -1 ) = 2
console.log(courses.includes('Javascript'), -3);// true vì nó bắt đầu tìm từ đầu
// lấy độ dài mảng = 3 + ( -3 ) = 0


