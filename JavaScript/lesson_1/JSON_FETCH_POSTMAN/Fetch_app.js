var courseApi = 'http://localhost:3333/courses';

function start(){
    getCourses(renderCourses);

    handleCreateForm(); 
    
}

start();

// functions

function getCourses(callback){
    fetch(courseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

function renderCourses(courses){
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course){
        return `
        <li class= "course-item-${course.id}">
            <h4 class="">${course.name}</h4>
            <p class="">${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
            <button class = "updateBtn" onclick="handleUpdateCourseEvent(${course.id})">Chỉnh Sửa</button>
        </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateCourse(data, callback){
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then(function(response){
            response.json();
        })
        .then(callback);
}

function handleDeleteCourse(id, callback){
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(courseApi + '/' + id, options)
        .then(function(response){
            response.json();
        })
        .then(function(){
            var courseItem = document.querySelector('.course-item-' + id)
            if(courseItem) {
                courseItem.remove();
            }
        });
}

function handleCreateForm(){
    var createBtn = 
        document.querySelector('#create');
    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description,
        };
        handleCreateCourse(formData, function(){
            getCourses(renderCourses);
        });
    };
}

function handleUpdateCourse(data, id){
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi + '/' + id, options)
        .then(function(response){
            response.json();
        })
        .then(function(){
            getCourses(renderCourses);
        });
}

function handleUpdateCourseEvent(id){
    const btn = document.querySelector('updateBtn');
    
    btn.onclick = function(){
        var name = document.querySelector('input[name="name"]');
        var description = document.querySelector('input[name="description"]');
        var data = {
            name: name,
            description: description
        };
        handleUpdateCourse(data, id);
    }
}