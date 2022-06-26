import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'


function Paragraph(){
    const context = useContext(ThemeContext)

    return (
        <p className={context.theme}>
            Context provides a way to listen to orther people
        </p>
    )
}

export default Paragraph