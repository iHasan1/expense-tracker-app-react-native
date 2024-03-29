import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://expense-tracker-app-backend-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json",
    expenseData
  );
}
