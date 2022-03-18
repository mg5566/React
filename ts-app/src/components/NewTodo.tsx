import React, { useRef } from "react";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void; }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw error
      return ;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="todo">Todo Text</label>
      <input type="text" id="todo" ref={todoTextInputRef}/>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
