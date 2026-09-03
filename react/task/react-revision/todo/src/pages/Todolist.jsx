import React, { useReducer, useState } from 'react';

 
const initialstate = [];

 
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
     
      return [...state, { id: Date.now(), text: action.payload }];
    
    case 'DELETE_TODO':
     
      return state.filter(todo => todo.id !== action.payload);
      
    default:
      return state;
  }
};

const Todolist = () => {
   
  const [text, setText] = useState('');
  
 
  const [state, dispatch] = useReducer(reducer, initialstate);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!text.trim()) return; 

    
    dispatch({ type: 'ADD_TODO', payload: text });
    setText('');  
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>To do list</h1>
      
     
      <form onSubmit={handleAddTodo}>
        <input 
          type='text' 
          required 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Enter a task..."
        />
        <button type="submit">ADD TO THIS</button>
      </form>

      
      <ul style={{ marginTop: '20px' }}>
        {state.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            {todo.text} {' '}
           
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;