// 7. Default Parameter Values

// C1
function logger(log){
    if(typeof log === 'undefined'){
        console.log('Gia tri mac dinh!')
    }
    console.log(log);
}

// C2
function logger(log = 'Gia tri mac dinh!'){
    console.log(log);
}

logger('Message..');


// 
function logger(log, type = 'log'){
    console[type](log);
}

logger('hello', 'warning');