import { useState } from 'react'

const order = [100,200,300]

function App() {
  const [counter, setCounter] = useState(() => {
    const total = order.reduce((total, cur) => total + cur );
    return total;
  });

  const handleIncrease = () => {
    setCounter(prevState => prevState + 1);
  }
  const [info, setInfo] = useState({
    name: 'Nguyen Van A',
    age: 18,
    address: 'Ha Noi',
  })
}