// innerText, textContent

var headingElement = 
    document.querySelector('.heading');


// geter
console.log(headingElement.innerText); // lấy ra nội dung của .heading

// seter

headingElement.innerText = 'New-heading';

// phân biệt innerText và textContent:
// innerText:  lấy cái nội dung heiẻn thị trên trình duyệt
// 
// textContent:   trả về nội dung thật nằm trong DOM