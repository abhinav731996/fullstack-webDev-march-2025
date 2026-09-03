// // ---------- by useState method -------------


// import React, { useState } from "react";

// function Task3() {
//   const [count, setCount] = useState(0);

//   const increment = () => {            
//     if (count < 10) {
//       setCount(count + 1); // stop at 10 
//       console.log("increment" + count);
//     } else {
//       setCount(count);
//       console.log("last value: " + count);
//     }
//   };

//   const decrement = () => {
//     if (count > 0) {
//     setCount(count - 1);// stop at 0
//     }
//     else{
//         setCount(count);
//     };
//   };
//   return (
//     <div>
//       <h3>React Hooks</h3>
//       <p>Count = {count}</p>
//       <button onClick={increment}>Counter +</button>{" "}
//       <button onClick={decrement}>Counter -</button>
//     </div>
//   );
// }

// export default Task3;



// // ---------- by useReducer method ----------

import React from 'react'
import { useReducer } from "react"
const Task3 = () => {
  const initialState = 0;

  const [count, dispatch] = useReducer(countReducer, initialState)

  function countReducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        if (state < 10) {
        console.log("increment " + state);
        return state + 1;
      } else {
        console.log("last value: " + state);
        return state;
      }
      
      case "DECREMENT": 
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }

      default:
        return state;
    }
  }
  return (
    <div>
      <h2>Counter useReducer</h2> <br />
      Value of count = {count} <br />

      <button onClick={() => dispatch({type:"INCREMENT"})}>Count +</button>{" "}
      <button onClick={() => dispatch({type:"DECREMENT"})}>Count -</button>
    </div>
  )
}

export default Task3
