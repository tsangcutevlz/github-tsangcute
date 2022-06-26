/*
    Arraay methods:
        forEach(): duyệt từng phần tử trong mảng
        every(): giúp tất cả phần tử trong mảng phải thõa mãn điều kiện gì đó (trả về kiểu boolean)
        some(): chỉ cần 1 phần tử thỏa mãn thì trả về true ( kiểu trả về boolean )
        find(): tìm kiếm trong mảng và trả về phần tử đầu tiên nó tìm thấy ( không có trả về undefined )
        filter(): tìm kiếm trong mảng và trả về tất cả phần tử mà nó tìm thấy ( không có trả về mảng rỗng )
        map(): sử dụng khi thay đổi các elements( phần tử ) của 1 array
        reduce()
*/

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


courses.forEach(function(course, index){
    console.log(index, course);
});

var isFree1 = courses.every(function(course, index){
    console.log(index);
    return course.coin === 0;
});

console.log(isFree1);

var isFree2 = courses.some(function(course, index){
    console.log(index);
    return course.coin === 0;
});

console.log(isFree2);

var course1 = courses.find(function(course, index){
    return course.name === 'Ruby';
});

console.log(course1)

var listCourses = courses.filter(function(course, index){
    return course.name === 'Ruby';
});

console.log(listCourses);