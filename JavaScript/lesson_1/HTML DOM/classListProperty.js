// CLassList Property

// add: thêm class vào element
// contains: kiểm tra 1 class có nằm trong element không
// remove: xóa class khỏi element
// toggle: 
// nếu có 1 class ở element thì gọi tới toggle sẽ xóa bỏ, ngược lại thì thêm vào

var boxElement = 
    document.querySelector('.box');

console.log(boxElement.classList.length);

boxElement.classList.add('red', 'blue');

console.log(boxElement.classList.contains('red'));

setTimeout(() => {
    boxElement.classList.remove('red');
    //  boxElement.classList.toggle('red');
}, 3000);


setInterval(() => {
    // boxElement.classList.remove('red');
     boxElement.classList.toggle('red');
}, 1000);

