


// PROMISE: khái niệm sinh ra cho ta xử lý các thao tác mất đồng bộ
// trước khi có promise ta thường sử dụng callback, nhma khi sử dụng
// callback thì nó xảy ra vấn đề gọi là callback hell, làm code khó nhìn
// sinh ra ở ES6
// Để tạo ra Promise ta sử dụng từ khóa new với thằng promise và trong phần
// constructor truyền vào executor function, trong executor function ta nhận
// được 2 tham số dạng hàm là resolve và reject:
// - resolve: ta sử dụng khi thao tác xử lý thành công
// - rejectl ta sử dụng khi thao tác xử lý thất bại
// khi xử dụng promise được tạo ra ta sử dụng qua phương thức .then() hoặc .catch() 
// .then() và catch() đều nhận callback function() nhưng khác nhau là .then()
// chỉ được thực thi khi promise được resolve ngược lại .catch() chỉ được thực thi
// khi promise bị reject 

// Promise được sử dụng để xử lí các thao tác mất đồng bộ



// 3. Fetch
//     - SYNC: Đồng bộ
//        - đồng bộ: thằng nào viết trước chạy trước, viết sau chạy sau
//     - ASYNC: Mất đồng bộ
//        - mất đồng bộ: 
//     - PAIN:
//     - Lý thuyết, cách hoạt động:
//     - Thực hành, ví dụ:
// 4. DOM location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best practices
// 9. Mistakes
// 10. Performance

// 1. PROMISE ( SYNC, ASYNC )
// Một vài trường hợp thường gặp cho:
// - Async: setTimeout, setInterval, fetch, XMLHttpRequest,
// file reading (đọc file), request animation frame

// Callback   


// sleep
setTimeout(function(){
    console.log(1);
}, 1000);

console.log(2);


// 2. PROMISE ( pain )

// Callback hell:

setTimeout(function(){
    console.log(1); // viec 1
    setTimeout(function(){
        console.log(2); // viec 2
        setTimeout(function(){
            console.log(3); // viec 3
            setTimeout(function(){
                console.log(4); // viec 4
                setTimeout(function(){
                    console.log(5); // viec 5
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// Pyramid of doom:

// 3. PROMISE ( concept )
// promise đi cùng function, và function được gọi tới ngay cả trước khi
// nó được gắn vào biến promise 
var promise = new Promise (
    // Executor
    function(resolve, reject){ // resolve: thành công / reject: thất bại
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()

        // Fake call API
        resolve();
        reject('co loi');
    }
);

// 1. new Promise
// 2. Executor

// promise có 3 trạng thái 
// 1. Pending: chờ
// 2. Fulfilled
// 3. Rejected
promise
    .then(function(){
        // khi trong execute có resolve được call() thì 
        // callback của then() được gọi
        return new Promise(function(resolve){
            setTimeout(resolve, 3000);
        });
    })
    .then(function(data){
        console.log(data);
        return 2;
    })
    .then(function(data){
        console.log(data);
        return 3;
    })
    .catch(function(error){
        // khi trong execute có reject được call() thì 
        // callback của then() được gọi
        console.log(error);

    })
    .finally(function(){
        // khi trong execute 1 trong 2 resolve hoặc reject
        // được call() thì callback của then() được gọi
        console.log('Done!');
    });



// 4. Promise ( chain )

function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms);
    })
}

sleep(1000)
    .then(function(){
        console.log(1);
        return sleep(1000);
    })
    .then(function(){
        console.log(2);
        return sleep(1000);
    })
    .then(function(){
        console.log(3);
        return sleep(1000);
    })
    .then(function(){
        console.log(4);
        return sleep(1000);
    });


// 5. Promise ( methods )

function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms);
    })
}

sleep(1000)
    .then(function(){
        console.log(1);
        return sleep(1000);
    })
    .then(function(){
        console.log(2);
        return new Promise(function(resolve, reject){
            reject('co loi !');
        });
    })
    .then(function(){
        console.log(3);
        return sleep(1000);
    })
    .then(function(){
        console.log(4);
        return sleep(1000);
    })
    .catch(function(error){
        console.log(error);
    });

// khi đang thực hiện then mà có lọt vào trường hợp reject thì catch sẽ bắt
// giá trị mà reject đang có để thực hiện hàm


// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all


// C1
var promise = new Promise(
    function(resolve, reject){
        // resolve('Success!');
        reject('Failure!');
    }
)

promise
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })


// C2 
var promise = Promise.resolve('Success!');
var promise = Promise.reject('Failure');

promise
    .then(function(result){
        console.log(result);
    })
    .catch(function(error){
        console.log(error);
    });


// Promise.all

var promise1 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([1]);
        }, 2000);
    }
);

var promise2 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([2, 3]);
        }, 5000);
    }
);

// khi dùng Promise.all nếu có 1 promise lọt vào reject thì phải dùng catch
// nếu không thì sẽ bị lỗi 

Promise.all([promise1, promise2])
    .then(function(result){
        var result1 = result[0];
        var result2 = result[1];

        console.log(result1.concat(result2));
    })
    .catch(function(error){
    });
    console.log(error);


// 6. Promise ( Example )

var users = [
    {
        id: 1,
        name: 'Tan Sang',
    },
    {
        id: 2,
        name: 'Thanh Vy',
    },
    {
        id: 3,
        name: 'Tan Sang 1',
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Chaoooo ban',
    },
    {
        id: 2,
        user_id:2,
        content: 'Chaoooo cai qq',
    }
];


function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds){
    return new Promise(function(resolve){
        setTimeout(function(){
            var result = users.filter(function(user){
                return userIds.includes(user.id)
            });
            resolve(result);
        }, 1000);
    });
} 

getComments
    .then(function(comments){
        var userIds = comments.map(function(){
            return comments.user_id;
        });
        
        return getUsersByIds(userIds)
            .then(function(users){
                return {
                    users: users,
                    comments: comments,
                };
        });
    })
    .then(function(data){
        var commentBlock = document.getElementById('comment-block');
        
        var html = '';

        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id === comment.user_id;
            });
            html += `<li> ${user.name}: ${comments.content} </li>`;
        });

        commentBlock.innerHTML = html;
    });



