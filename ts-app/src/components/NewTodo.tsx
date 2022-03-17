import React, { useRef } from "react";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw error
      return ;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">Todo Text</label>
      <input type="text" id="todo" ref={todoTextInputRef}/>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
