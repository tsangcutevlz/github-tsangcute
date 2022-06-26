// 
document.write('HELLO WORLD');

var headingNode = document.getElementById('heading');

console.log(headingNode);

console.log({
    element: headingNode
});

var headingNodes = document.getElementsByClassName('heading1');

var headingNodeTag = document.getElementsByTagName('p');

var headingNode1 = document.querySelector('.heading');

var headingNode2 = document.querySelector('.box .heading-2:first-child');
var headingNode2 = document.querySelector('.box .heading-2:nth-child(2)');

var headingNode2All = document.querySelectorAll('.heading-2')

console.log(document.anchor);

var boxNode = document.querySelector('.box-1');
// Công việc 1: sử dụng tới `boxNode`

// Công việc 2: sử dụng tới các li elements là của con `.box-1`
var listItemNodes = document.querySelectorAll('.box-1 li');

console.log(listItemNodes);
// C1:
console.log(boxNode.querySelectorAll('li'));
// C2:
console.log(boxNode.getElementsByTagName('li'));

