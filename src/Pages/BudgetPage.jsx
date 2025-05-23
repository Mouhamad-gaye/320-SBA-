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
    return 
    (
     
    )
}