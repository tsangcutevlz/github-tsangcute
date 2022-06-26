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
            <h4 class="song-item-${course.id} h2">${course.name}</h4>
            <p class="song-item-${course.id} p">${course.description}</p>
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
function handleFixSong(id) {
    document.querySelector('input[name="name"]').value = document.querySelector(`.song-item-${id} h2`).textContent
    document.querySelector('input[name="description"]').value = document.querySelector(`.song-item-${id} p`).textContent
    document.querySelector('#create').textContent = 'Save'
    document.querySelector('#create').classList.add('save-btn')
    document.querySelector('#create').classList.remove('create')
    var saveBtn = document.querySelector('.save-btn')

    saveBtn.onclick = () => {
        var titleNew = document.querySelector('input[name="name"]').value
        var artistNew = document.querySelector('input[name="description"]').value
        console.log(id, titleNew, artistNew)
        var data = {
            title: titleNew,
            artist: artistNew
        }

        var option = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch(courseApi + '/' + id, option)
            .then(response => response.json())
            .then(() => { takeData(showPlaylist) })
            .catch(err => { alert(err) })
    }
}






