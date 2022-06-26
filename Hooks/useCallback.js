import { useState, memo } from 'react'
import Content from './Content.js'

function App() {

  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1) 
  }, [])

  return (
    <div style={{padding: '10px 32px'}}>
      <Content onIncrease={handleIncrease}/>
      <h1>{count}</h1>
      <button onClick = {increase}>Click me!</button>
    </div>
  )
}

export default App;
