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
    const tabs = ['posts', 'comments', 'albums'];

function Content(){
    const [countdown, setCountdown] = useState(180);
    
    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prevState => prevState - 1)
        }, 1000)

        return () => clearInterval(timerId);
    }, [])
    
    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Content

