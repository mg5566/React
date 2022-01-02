import { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter.js";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2022);

  const filterChangeHandler = (selectedYear) => {
    console.log('Expenses.js', selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.expenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.expenseTitle}
            amount={item.expenseAmount}
            date={item.expenseDate}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
