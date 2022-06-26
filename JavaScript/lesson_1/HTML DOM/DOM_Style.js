// DOM CSS


var boxElement = 
    document.querySelector('.box');

console.log(boxElement.style);


Object.assign(boxElement.style, {
    width: '100px',
    height: '100px',
    backgroundColor: 'red',
});


console.log(boxElement.style.width); 
// lấy ra giá trị của thuộc tính CSS chứ không phải của đối tượng
