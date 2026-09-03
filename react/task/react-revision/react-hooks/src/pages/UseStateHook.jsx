// // option 1---------------------------------------------------------
// import React, { useState } from 'react'

// const UseStateHook = () => {
//     const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h2>Use state hook </h2>
//       <br />
//       count = {count}
//       <br />
//       <button onClick={()=> setCount(count + 1)}>count +</button>{" "}
//       <button onClick={()=> setCount(count - 1)}>count -</button>
//       <hr />
//     </div>
//   )
// }

// export default UseStateHook

// // option 2--------------------------------------------------------
import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>React Use State Hook</h2>
      <br />
      count = {count}
      <br />
      <button onClick={increment}>count +</button>{" "}
      <button onClick={decrement}>count -</button>
      <hr />
    </div>
  );
};

export default UseStateHook;
