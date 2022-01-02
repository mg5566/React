import { useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const DUMMY_EXPENSE = [
  {
    id: 0,
    date: new Date(2021, 5, 6),
    title: "Desktop PC",
    amount: "2000.00",
  },
  {
    id: 1,
    date: new Date(2020, 4, 14),
    title: "PS5",
    amount: "480.00",
  },
  {
    id: 2,
    date: new Date(2019, 11, 13),
    title: "Monitor",
    amount: "600.00",
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return ([expense, ...prevState]);
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
