// 13. Optional Chaining
  
const obj = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
        cat2: {
            name: 'Dinah2',
            cat3: {
                name: 'Dinah3'
            }
        }
    }
};

if(
    // obj.cat &&
    // obj.cat.cat2 &&
    // obj.cat.cat2.cat3    
    
    obj?.cat?.cat2?.cat3    
){
    
    console.log(obj.cat.name);
}

// function

const obj1 = {
    getName(value){
        console.log(value);
    }
}

obj1.getName?.(123);







