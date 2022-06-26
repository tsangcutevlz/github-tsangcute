// innerHTML - outerHTML

// innerHTML: giúp thêm elementNode trong element khác
// và thêm textNode vào element, thêm attributeNode vào element
var boxElement = document.querySelector('.box');

boxElement.innerHTML = '<h1 title="Heading"> Heading </h1>';

console.log(document.querySelector('h1').innerText)

// outerHTML: ghi đè luôn element chứa nó 