        // script.js
document.addEventListener('DOMContentLoaded', () => {
    const expenseInput = document.getElementById('expenseInput983');
    const amountInput = document.getElementById('amountInput983');
    const categoryInput = document.getElementById('categoryInput983');
    const addExpenseBtn = document.getElementById('addExpenseBtn983');
    const expenseList = document.getElementById('expenseList983');
    const totalExpensesDisplay = document.getElementById('totalExpenses983');

    let totalExpenses = 0;

    addExpenseBtn.addEventListener('click', () => {
        const expenseDescription = expenseInput.value.trim();
        const amount = parseFloat(amountInput.value);
        const category = categoryInput.value.trim();

        if (expenseDescription && !isNaN(amount) && category) {
            addExpense(expenseDescription, amount, category);
            resetInputs();
        }
    });

    function addExpense(description, amount, category) {
        const li = document.createElement('li');
        li.textContent = `${description} - $${amount.toFixed(2)} (${category})`;
        li.className = 'li983';

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove983';
        removeBtn.addEventListener('click', () => {
            totalExpenses -= amount;
            totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
            expenseList.removeChild(li);
        });

        li.appendChild(removeBtn);
        expenseList.appendChild(li);

        totalExpenses += amount;
        totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
    }

    function resetInputs() {
        expenseInput.value = '';
        amountInput.value = '';
        categoryInput.value = '';
    }
});
