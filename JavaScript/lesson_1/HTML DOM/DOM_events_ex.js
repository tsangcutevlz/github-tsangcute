// DOM events

// 1. Input / select
// 2. Key up / down
var inputValue1;
var inputValue2;
var selectValue;
// 1
var inputElement1 =
    document.querySelector('input[type="text"]');

inputElement1.onchange = function(e){
    inputValue1 = e.target.value;
};

var inputElement2 =
    document.querySelector('input[type="checkbox"]');

inputElement2.onchange = function(e){
    inputValue2 = e.target.checked;
};

var selectElement =
    document.querySelector('input[type="checkbox"]');

selectElement2.onchange = function(e){
    selectValue = e.target.value;
};

// 2

var inputElement1 =
    document.querySelector('input[type="text"]');

inputElement1.onkeydown = function(e){
    console.log(e);
};
inputElement1.onkeyup = function(e){
    console.log(e);
};

// ----------------------------------------

// 1. preventDefault
// 2. stopPropagation


// 1 
var aElements = document.links;

for(var i = 0; i < aElements.length;i++){
    aElements[i].onclick = function(e){
        if(!e.target.href.startsWith('https://fullstack.edu.vn/')){
            e.preventDefault();
        } 
    }
}

var ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e){
    e.preventDefault();
}

// 2

document.querySelector('div') = 
    function(){
        console.log('DIV');    
    }

document.querySelector('button') = 
    function(e){
        e.stopPropagation();
        console.log('Click me!');
    }



