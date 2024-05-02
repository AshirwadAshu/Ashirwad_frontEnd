import React, { useReducer } from 'react';
import { useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
     
      if (state.some(item => item.id === action.data.id)) {
     return state;
      } else {
        return [...state, { ...action.data, complete: false }];
      }
    case "DELETE":
      return state.filter(item => item.id !== action.id);
    case "UPDATE":
      return state.map(item => item.id === action.data.id ? { ...item, title: action.data.title } : item);
    default:
      return state;
  }
};

const Todo = () => {
  const [input, setInput] = useState({});
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div>
      <h1>{JSON.stringify(state)}</h1>
      <input type="text" onChange={(e) => setInput({ ...input, id: e.target.value })} />
      <input type='text' onChange={(e) => setInput({ ...input, title: e.target.value })} />
      <button onClick={() => dispatch({ type: "ADD", data: input })}>Add</button>

      <input type="text" onChange={(e) => setInput({ id: e.target.value })} />
      <button onClick={() => dispatch({ type: "DELETE", id: input.id })}>Delete</button>

      <input type="text" onChange={(e) => setInput({ ...input, id: e.target.value })} />
      <input type='text' onChange={(e) => setInput({ ...input, title: e.target.value })} />
      <button onClick={() => dispatch({ type: "UPDATE", data: input })}>Edit</button>
    </div>
  );
};

export default Todo;