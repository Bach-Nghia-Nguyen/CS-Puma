let startAmount = 1000;
let transactions = [
  { currency: "USD", amount: 12, type: "withdrawal" },
  { currency: "USD", amount: 104, type: "withdrawal" },
  { currency: "USD", amount: 150, type: "deposit" },
  { currency: "USD", amount: 150, type: "deposit" },
  { currency: "USD", amount: 250, type: "withdrawal" },
  { currency: "USD", amount: 500, type: "deposit" },
  { currency: "USD", amount: 447, type: "withdrawal" },
  { currency: "USD", amount: 120, type: "deposit" },
  { currency: "USD", amount: 58, type: "withdrawal" },
  { currency: "USD", amount: 90, type: "withdrawal" },
];
const usdToVND = 23000;

/**
 * Uses forEach() to print out the transaction history
 */
function printTransactionHistory() {
  console.log(`Balance: $${startAmount}

  Transaction History:`);

  transactions.forEach((record) => {
    if (record.type === "withdrawal") {
      startAmount -= record.amount;
      console.log(
        `- You withdrew $${record.amount}. The new balance is $${startAmount}`
      );
    } else {
      startAmount += record.amount;
      console.log(
        `- You deposited $${record.amount}. The new balance is $${startAmount}`
      );
    }
  });

  console.log(`
  End Balance: $${startAmount}`);
}
// printTransactionHistory();

/**
 * Uses reduce() to calculate the balance in the end.
 */
const endingBalance = transactions.reduce((accumulate, current) => {
  if (current.type === "withdrawal") {
    accumulate -= current.amount;
  } else {
    accumulate += current.amount;
  }
  return accumulate;
}, startAmount);
// console.log(endingBalance);

/**
 * Uses filter() and reduce() to calculate two numbers:
 * the sum of withdrawal transactions (expense), and deposit transactions (income).
 */
const withdrawals = transactions.filter(
  (transaction) => transaction.type === "withdrawal"
);
const sumOfExpense = withdrawals.reduce((accumulate, current) => {
  return accumulate + current.amount;
}, 0);
// console.log(sumOfExpense);

const deposits = transactions.filter(
  (transaction) => transaction.type === "deposit"
);
const sumOfIncome = deposits.reduce((accumulate, current) => {
  return accumulate + current.amount;
}, 0);
// console.log(sumOfIncome);

/**
 * Uses map() to get a new array of transaction in VND
 */
function transactionsInVND(array) {
  if (array instanceof Array) {
    const localNewArray = JSON.parse(JSON.stringify(array));
    return localNewArray.map((transaction) => {
      transaction.currency = "VND";
      transaction.amount *= usdToVND;
      return transaction;
    });
  } else {
    return "Invalid";
  }
}
// console.log(transactionsInVND(transactions));

/**
 * Returns an new list of transactions that sorted by type
 */
function sortedByType(array) {
  if (array instanceof Array) {
    return array.sort((transactionA, transactionB) => {
      let typeOfA = transactionA.type.toUpperCase();
      let typeOfB = transactionB.type.toUpperCase();
      if (typeOfA < typeOfB) {
        return -1;
      } else if (typeOfA > typeOfB) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return "Invalid";
  }
}
// console.log(sortedByType(transactionsInVND(transactions)));

/**
 * Returns an new list of withdrawal transactions that sorted by amount
 */
function sortedByAmount(array) {
  if (array instanceof Array) {
    return array.sort((transactionA, transactionB) => {
      let amountA = transactionA.amount;
      let amountB = transactionB.amount;
      return amountA - amountB;
    });
  } else {
    return "Invalid";
  }
}
const withdrawalsSortedByAmount = sortedByAmount(
  transactionsInVND(transactions)
).filter((transaction) => transaction.type === "withdrawal");
// console.log(withdrawalsSortedByAmount);

/**
 * Returns an new list of deposit transactions that sorted by amount
 */
const depositsSortedByAmount = sortedByAmount(
  transactionsInVND(transactions)
).filter((transaction) => transaction.type === "deposit");

// console.log(depositsSortedByAmount);
