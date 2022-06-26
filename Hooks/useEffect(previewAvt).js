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
    const [avatar, setAvatar] = useState()

    useEffect(()=>{
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    return (
        <div>
            <input 
                type='file'
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%" />
            )}
        </div>
    )
}

export default Content