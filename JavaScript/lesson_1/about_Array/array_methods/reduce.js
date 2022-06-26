var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250,
    },

    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0,
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0,
    },

    {
        id: 4,
        name: 'PHP',
        coin: 350,
    },

    {
        id: 5,
        name: 'Java',
        coin: 450,
    },

    {
        id: 6,
        name: 'Ruby',
        coin: 0,
    },
    {
        id: 7,
        name: 'Ruby',
        coin: 0,
    },
];

// REDUCE
// khi muốn nhận về giá trị duy nhất sau khi tính toán các elements trong array

// Cách 1: ( Hiệu năng ) nhanh hơn 

var totalCoin = 0;

for(var course of courses) {
    totalCoin += course.coin;
}

console.log(totalCoin);

// Cách 2: ( Hiệu năng ) chậm hơn
// accumulator: giá trị lưu trữ
// currentValue: phần tử thứ
// currentIndex: chỉ mục, thứ tự phần tử thứ
// originArray: array gốc ( chính là cái array gọi tới phương thức reduce )

// Cách 1
var totalCoin = courses.reduce(function ( accumulator,   ){
    return accumulator + currentValue.coin;
}, 0); // initial value: giá trị khởi tạo 


// Cách 2
var totalCoin = courses.reduce((a, b) => a + b.coin, 0);

// example:
// Flat: "Làm phẳng" mảng từ Depth array - "Mảng sâu"

var depthArray = [1, 2, [3,4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function(flatOutPut, depthItem){
    return flatOutPut.concat(depthItem);
}, [])

// Lấy ra các khóa học đưa vào 1 mảng mới

var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS",
            },
            {
                id:2,
                title: "Javascript, "
            }
        ]
    },
    {
        topic: "Back-end",
        courses:[
            {
                id:1,
                title: "PHP" ,
            },
            {
                id:2,
                title:"NodeJS",
            }
        ]
    },
];

var newCourses = topics.reduce(function(courses, topics){
    return courses.concat(topic.courses);
}, []);


var htmls = newCourses.map(function(course){
    return `
    <div>
        <h2> ${course.title} </h2>
        <p>ID: ${course.id} </p>     
    <div>
    `;
});

//  vi du cua reduce 2

Array.prototype.reduce2 = function(callBack, result){
    let i = 0
    if(arguments.length < 2){
        result = this[0];
        i = 1;
    }
    for(; i < this.length; i++){
        result = callback(result, this[i], i, this)
    }
    return result;
}

const number = [1, 2, 3, 4, 5];

const resultt = number.reduce((total, number) => {
    return total + number; 
}, 0);
// tu code
const resulttt = number.reduce2((total, number) => {
    return total + number; 
}, 0); 
// khác nhau ở lần chạy đầu tiên, ( 1 + 2 = 3) thay vì ( 0 + 1 = 1 )
// khác nhau ở giá trị khởi tạo
// khi không có giá trị khởi tạo thì biến tích trữ là phần tử 1, currentValue là phần tử 2
console.log(result);

const result = number.reduce(callback, initialValue);

