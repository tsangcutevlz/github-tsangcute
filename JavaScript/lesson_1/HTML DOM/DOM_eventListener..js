// 1. DOM event / Event listener
// 2. JSON
// 3. Fetch
// 4. DOM location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best practices
// 9. Mistakes
// 10. Performance

// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe / Hủy bỏ lắng nghe

var btn = document.getElementById('btn');

btn.addEventListener('click', function(e){
    console.log(Math.random());
});