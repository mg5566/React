import ExpenseItem from "./components/ExpenseItem";

function App() {
  // const expenseDate = new Date().toISOString();
  const expenseDate = new Date();
  const expenseTitle = "Desktop PC";
  const expenseAmount = "200.00"

  return (
    <div>
      <h2>Let's get started React!</h2>
      <p>This is also Visible</p>
      <ExpenseItem
        title={expenseTitle}
        amount={expenseAmount}
        date={expenseDate}
      />
    </div>
  );
}

export default App;
