import React, { useReducer } from "react";

const UseReducerHook = () => {
  const initialState = 1;
  const [count, dispatch] = useReducer(countReducer, initialState);

  function countReducer(state, action) {
    switch (action.type) {
      case "increment":
        return state < 10 ? state + 1 : state;
      case "decrement":
        return state > 0 ? state - 1 : state;
      default:
        return state;
    }
  }
  return <div>
    <h2> React Use Reducer Hook </h2>
    <br />
    count = {count}
    <br />
    <button onClick={()=> dispatch({type: "increment"})}> count + 1</button>{" "}
    <button onClick={()=> dispatch({type: "decrement"})}> count - 1</button>
    <hr />
  </div>;
};

export default UseReducerHook;
