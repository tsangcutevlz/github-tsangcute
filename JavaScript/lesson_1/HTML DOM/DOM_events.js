// DOM EVENTS: sự kiện diễn ra trong quá trình user thao tác web

// 1. Attribute events
// 2. Assign event using the element node

var h1Elements = document.querySelectorAll('h1');

for(var i = 0; i < h1Elements.length; i++){
    h1Elements[i].onclick = function(e){
        console.log(e.target);
    }
}

