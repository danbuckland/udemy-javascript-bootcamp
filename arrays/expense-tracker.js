const account = {
  name: 'Dan Buckland',
  expenses: [],
  incomes: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    });
  },
  addIncome: function (description, amount) {
    this.incomes.push({
      description: description,
      amount: amount
    });
  },
  getAccountSummary: function () {
    let totalExpenses = 0;
    let totalIncome = 0;
    let balance = 0;

    account.expenses.forEach(function (expense) {
      totalExpenses += expense.amount;
    });

    account.incomes.forEach(function (income) {
      totalIncome += income.amount
    });

    balance = totalIncome - totalExpenses;

    return `${this.name} has a balance of £${balance.toFixed(2)}. £${totalIncome.toFixed(2)} in income, £${totalExpenses.toFixed(2)} in expenses`
  }
}

//

account.addExpense('Mortgage', 1600);
account.addExpense('Coffee', 2.40);
account.addIncome('Salary', 4000);
console.log(account.getAccountSummary());