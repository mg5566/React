import { useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const DUMMY_EXPENSE = [
  {
    id: 0,
    date: new Date(),
    title: "Desktop PC",
    amount: "2000.00",
  },
  {
    id: 1,
    date: new Date(),
    title: "PS5",
    amount: "480.00",
  },
  {
    id: 2,
    date: new Date(),
    title: "Monitor",
    amount: "600.00",
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]);
    setExpenses((prevState) => {
      return ([expense, ...prevState]);
    })
  };

  return (
    <div>
      <h2>Let's get started React!</h2>
      <p>This is also Visible</p>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
