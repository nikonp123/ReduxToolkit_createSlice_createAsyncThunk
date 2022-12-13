import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../featuers/todo/todoSlice';
import { v4 } from 'uuid';

const Form = () => {
  const dispatch = useDispatch();
  const [toDoValue, setToDoValue] = useState('');
  const addToDoHandler = (e) => {
    const todo = {
      id: v4(),
      text: toDoValue,
      completed: false,
    };
    dispatch(addToDo(todo));
    setToDoValue('');
  };

  return (
    <form
      className="w-full flex"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        placeholder="Type something..."
        className="w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm"
        value={toDoValue}
        onChange={(e) => {
          setToDoValue(e.target.value);
        }}
      />
      <button
        type="submit"
        className="shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm"
        onClick={() => addToDoHandler()}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
