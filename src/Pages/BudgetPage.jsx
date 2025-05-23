import { useState, useEffect } from "react";

export default function BudgetPage() {
const [budget, setBudget] = useState(5000); // Default total budget
const [expenses, setExpenses] = useState([]);
const [loading, setLoading] = useState(true);
const [newExpense, setNewExpense] = useState({ name: "", amount: "" });

  useEffect(() => {
    // Simulating an API call to fetch existing expenses
    setTimeout(() => {
      const expenseData = [
        { id: 1, name: "Venue Rental", amount: 2000 },
        { id: 2, name: "Catering", amount: 1500 },
        { id: 3, name: "Decorations", amount: 500 },
      ];
      setExpenses(expenseData);
      setLoading(false);
    }, 2000);
  }, []);

  const addExpense = () => {
    if (newExpense.name && newExpense.amount) {
      setExpenses([...expenses, { id: Date.now(), ...newExpense }]);
      setNewExpense({ name: "", amount: "" });
    }
  };

  const totalSpent = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
  const remainingBudget = budget - totalSpent;


    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Event Planner - Budget Page</h1>
        <p>Manage your event expenses effectively!</p>
  
        <h2>Total Budget: ${budget}</h2>
        <h3>Total Spent: ${totalSpent}</h3>
        <h3>Remaining Budget: ${remainingBudget}</h3>
  
        <h2>Add Expense</h2>
        <input
          type="text"
          placeholder="Expense Name"
          value={newExpense.name}
          onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
        />
        <button onClick={addExpense}>Add Expense</button>
  
        {loading ? <p>Loading expenses...</p> : (
          <ul>
            {expenses.map(expense => (
              <li key={expense.id}>
                {expense.name}: ${expense.amount}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
}