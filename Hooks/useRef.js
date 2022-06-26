import { useState, useRef, useEffect } from "react";
const Clock = () => {
  const [count, setCount] = useState(60);

  const timeID = useRef();
  const preCount = useRef();
  useEffect(() => {
    preCount.current = count;
  }, [count]);
  const handleStart = () => {
    timeID.current = setInterval(() => {
      setCount((pre) => pre - 1);
    
    }, 1000);
  };
  console.log("count" +count,'pre'+ preCount.current)
  const handleStop = () => {
    console.log("stop");
    clearInterval(timeID.current);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
};
export default Clock;