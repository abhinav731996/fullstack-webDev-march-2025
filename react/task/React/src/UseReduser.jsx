import React, { useReducer } from 'react'

const UseReduser = () => {
    const initialState = 1
    // const [variable, dispatch] = useReducer(reducer function, intial value of state)
    const [count, dispatch] = useReducer(counterReducer, initialState)

    function counterReducer(state, action) {
        // console.log("Current state =" + state);
        // console.log("Current action =" + JSON.stringify(action));
        // return state;

        switch (action.type) {
            case "INCREMENT":
                return state+1; 
                break;

            case "DECREMENT":
                return state-1;
                break
        
            default:
                return state;
                break;
        }
    }

    // const handleIncrement = () => {
    //     console.log("Increment");
        
    // }
    // const handleDecrement = () => {
    //     console.log("Decrement");
        
    // }
  return (
    <div>
      CounterUSeReducer
      <hr />
      Value of count = {count}
      <br />
      {/* <button onClick={handleIncrement}>Increment</button>{" "}
      <button onClick={handleDecrement}>Decrement</button> */}
      <button className='btn btn-primary' onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>{" "}
      <button className='btn btn-secondary' onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
    </div>
  )
}

export default UseReduser
