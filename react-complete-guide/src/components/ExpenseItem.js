import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date();
  const expenseTitle = "Desktop PC";
  const expenseAmount = "200.00"

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
