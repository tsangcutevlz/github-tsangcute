import { useLayoutEffect, useEffect, useState } from 'react'

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

function Content(){
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count > 3) setCount(0)
    }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}

export default Content

