import { useEffect, useState } from 'react'

    // 1. useEffect(callback)
    // - Gọi callback mỗi khi component re-render
    // - Gọi callback sau khi component thêm element vào DOM
    // 2. useEffect(callback, [])
    // - Chỉ gọi callback 1 lần sau khi component mounted
    // 3. useEffect(callback. [deps])
    // - Callback sẽ được gọi lại mỗi khi deps thay đổi

    // ----------
    // 1. Callback luôn được gọi sau khi Component Mounted
    // 2. Cleanup function luôn được gọi trước khi component unmounted
    const lessons = [
        {
            id: 1,
            name: 'ReactJS là gì? Tại sao nên hcọ ReactJS'
        },
        {
            id: 2,
            name: 'SPA/MPA là gì ?'
        },
        {
            id: 3,
            name: 'Arrow'
        },
    ];

function Content(){
    const [lessonId, setlessonId] = useState(1);

    useEffect(()=> {
        const handleComment = ({detail}) => {
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment )
        }
    },[lessonId])


    return (
        <div>
          <ul>
            {lessons.map(lesson => (
                <li
                    key = {lesson.id}
                    style = {{
                        color: lessonId === lesson.id ? 
                            'red' : '#333'
                    }}
                    onClick={() => setlessonId(lesson.id)}
                >
                    {lesson.name}
                </li>
            ))}
          </ul>
        </div>
    )
}

export default Content

