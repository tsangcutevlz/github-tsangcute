// MAP
// khi sử dụng map phải dùng function
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


function courseHandler(course, index){
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia ${course.coin}`,
        index: index,
        // originArray: originArray,
        originArray: courses,
    }
}

var newCourses = courses.map(courseHandler);

