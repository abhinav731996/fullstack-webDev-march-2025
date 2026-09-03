import React from 'react'
import { useReducer } from 'react';


const initialState = {
    input: "",
    todolist: [],
};

function reducer(state, action){
    switch(action.type){
        case "SET_INPUT":
            return{
                ...state,
                input: action.payload,
            };
        
    }
}

const Dashboard = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="container">
      <div className="d-flex justify-content-center align-items-center">
      <h1>Todo App</h1>
      </div>
      

    </div>
    </>
  )
}

export default Dashboard
