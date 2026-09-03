import React from 'react'
import {useState} from 'react'

function Hooks() {
    // let count = 1;      // variable ....state
    const [count, setCount] = useState(0)
    // const handleCountClick = ()=>{
    //     // count++;        // state change
    //     // setCount((prev) => prev+1);
    //     // setCount(count++);    //this is invalid
    //     setCount(count + 1);
    //     setCount(count - 1);
    //     console.log(count);
    //     return count;
        
    // }

  return (
    <div>
      React Hooks <br />
      Count = {count} <br />
      <button onClick={() => setCount(count + 1)}>Counter + </button> {" "}
      <button onClick={() => setCount(count - 1)}>Counter - </button><br />
    </div>
  )
}

export default Hooks