import React,  { useState, useContext, useEffect }  from "react";
import styled from 'styled-components';

const Counter = ()=>{
  const [seconds, setSeconds] = useState(0);
const [startCounter, setStartCounter] = useState(false);

function toggle() {
  setStartCounter(!startCounter);
}

function reset() {
  setSeconds(0);
  setStartCounter(false);
}

useEffect(() => {
  let interval = null;
  if (startCounter) {
    interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
  } else if (!startCounter && seconds !== 0) {
    clearInterval(interval);
  }
  return () => clearInterval(interval);
}, [startCounter, seconds]);


  return (
    <div>
      <h2> Counter Component</h2>
      <div>
        {seconds} <span>second</span>
      </div>

      <button onClick={toggle}>
          {startCounter ? 'Pause' : 'Start'}
        </button>

        <button
      onClick={()=>{
        reset()
      }}
      >reset</button>
    </div>
  )
}

export default Counter; 