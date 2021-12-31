import Expenses from "./components/Expenses/Expenses.js";

function App() {
  const expenses = [
    {
      id: 0,
      expenseDate: new Date(),
      expenseTitle: "Desktop PC",
      expenseAmount: "2000.00",
    },
    {
      id: 1,
      expenseDate: new Date(),
      expenseTitle: "PS5",
      expenseAmount: "480.00",
    },
    {
      id: 2,
      expenseDate: new Date(),
      expenseTitle: "Monitor",
      expenseAmount: "600.00",
    },
  ];

  return (
    <div>
      <h2>Let's get started React!</h2>
      <p>This is also Visible</p>
      <Expenses
        expenses={expenses}
      />
    </div>
  );
}

export default App;
