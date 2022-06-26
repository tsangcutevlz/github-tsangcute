// toString: chuyển đổi type từ số sang string
// toFixed: làm tròn số thập phân 

var languages = [
    'Javascript',
    'PHP',
    'Ruby'
];

var languages2 = [
    'Dart',
    'Java',
];

// 1. To string
// 2. Join
    console.log(languages.join(', ')); // Javascript, PHP, Ruby
// 3. Pop:thêm 1 hoặc nhiều phần tử vào cuối mảng, trả về độ dài mới của mảng
    console.log(languages.pop()); // Javascript, PHP \\ in ra Ruby
// 4. Push
    console.log(languages.push('Dart', 'Java')) // Javascript, PHP, Ruby, Dart, Java
// 5. Shift
    console.log(languages.shift()) //  PHP, Ruby \\ in ra Javascript
// 6. Unshift: thêm 1 hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng
    console.log(languages.unshift('Dart', 'Java')) //  Dart, Java, Javascript, PHP, Ruby
// 7. Splicing: xóa, cắt, chèn phần tử mới vào mảng
    languages.splice(1, 1); // Javascript, Ruby
    languages.splice(1, 2); // Javascript
    languages.splice(1, 0, 'Dart'); // Javascript, Dart, PHP, Ruby
    languages.splice(1, 1, 'Dart'); // Javascript, Dart, Ruby 
// 8. Concat: giúp ta nối được array
    console.log(languages.concat(languages2)); // Javascript, PHP, Ruby, Dart, Java
    console.log(languages2.concat(languages)); // Dart, Java, Javascript, PHP, Ruby
// 9. Slicing:
    console.log(languages.slice(1, 2)) //Javascript, Ruby
    console.log(languages.slice(-2, -1)) //Javascript, Ruby