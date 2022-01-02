import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [userInput, setUserInput] = useState({
    enterdTitle: "",
    enterdAmount: "",
    enterdDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enterdTitle: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enterdAmount: event.target.value,
      };
    });
  };

  const dateChagneHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enterdDate: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title: userInput.enterdTitle,
      amount: +userInput.enterdAmount,
      date: new Date(userInput.enterdDate),
    };

    onSaveExpenseData(expenseDate);

    setUserInput({
      enterdTitle: "",
      enterdAmount: "",
      enterdDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enterdTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enterdAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enterdDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChagneHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
