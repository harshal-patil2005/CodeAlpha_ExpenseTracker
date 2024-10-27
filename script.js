// Select DOM elements
const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expensesList = document.getElementById('expenses');

// Initialize an empty array to hold expenses
let expenses = [];

// Event listener for form submission
expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = parseFloat(expenseAmountInput.value.trim());

    if (expenseName && expenseAmount) {
        // Create an expense object
        const expense = {
            id: Date.now(),
            name: expenseName,
            amount: expenseAmount,
        };

        // Add expense to the array
        expenses.push(expense);

        // Update the UI
        updateExpensesList();
        
        // Reset the form
        expenseForm.reset();
    }
});

// Function to update the expense list in the UI
function updateExpensesList() {
    // Clear the existing list
    expensesList.innerHTML = '';

    // Loop through the expenses and create list items
    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.className = 'expense-item';
        li.innerHTML = `
            <span>${expense.name}: $${expense.amount.toFixed(2)}</span>
            <button onclick="deleteExpense(${expense.id})">Delete</button>
        `;
        expensesList.appendChild(li);
    });
}

// Function to delete an expense
function deleteExpense(id) {
    // Filter out the expense to delete
    expenses = expenses.filter(expense => expense.id !== id);

    // Update the UI
    updateExpensesList();
}
