// 1. Alert
// 2. Console
// 3. Confirm: hien hop thoai confirm
// 4. Prompt: hien o input
// 5. Set timeout: 
// 6. Set interval
var fullName = 12;

console.log(fullName);
// console.warn
// console.error

setTimeout(function() {
    alert('Thong bao');
}, 1000)

// setTimeOut: thực thi sau 1 đoạn thời gian

setInterval(function() {
    console.log('day la log');
}, 1000)

// setInterval thực thi liên tục sau 1 đoạn thời gian