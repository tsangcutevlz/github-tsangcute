// 3. Fetch:
//      - JSON server: API server
//      - CRUD
//           - Create: tạo mới -> POST 
//           - Read: lấy dữ liệu -> GET
//           - Update: chỉnh sửa -> PUT / PATCH
//           - Delete: xóa -> DELETE
//      - Postman
//                      ( cần đọc HTTP protocol )
// 4. DOM location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best practices
// 9. Mistakes
// 10. Performance

// Fetch: Sử dụng để lấy dữ liệu từ phía Backend trả về

// API ( URL ): Application Progamming Interface

// Cổng giao tiếp giữa các PM

// Backend -> API -> Fetch -> JSON/XML -> JSON.parse -> Javascript types
// -> Render ra giao diện với HTML 

var postAPI = 'https://jsonplaceholder.typicode.com/todos/1';

// stream: luồng dữ liệu trả về 
fetch(postAPI)
    .then(function(response){
        return response.json();
        // JSON.parse: JSON -> Javascript types
    })
    .then(function(posts){
        var htmls = posts.map(function(post){
            return `<li>
                <h2> ${post.title} </h2>
                <p> ${post.body} </p>
            </li>`;
        });
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(error){
        console.log('What a Terrible Error !');
    });





// npx json-server --watch -p 3333 server.json
// npx json-server --watch -p 3333 db.json

