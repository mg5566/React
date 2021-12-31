import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div className="expenses">
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
    </div>
  );
};

export default Expenses;
