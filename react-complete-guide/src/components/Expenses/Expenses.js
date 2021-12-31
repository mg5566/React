import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
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
