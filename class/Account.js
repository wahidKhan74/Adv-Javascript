class Account {

    // Constructor
    constructor(acccountNumber, accountHolder, balance) {
        this.acccountNumber = acccountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    // Method to get account details
    getAccountDetails() {
        return `
        Account Number: ${this.acccountNumber}, 
        Account Holder: ${this.accountHolder}, 
        Balance: $${this.balance}`;
    }

    // Method to deposit money
    deposit(amount) {
        this.balance += amount;  // this.balance = this.balance + amount;
        return `Deposited $${amount}. New Balance: $${this.balance}`;
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > this.balance) {
            return `Insufficient funds! Current Balance: $${this.balance}`;
        }
        this.balance -= amount;  // this.balance = this.balance - amount;
        return `Withdrew $${amount}. New Balance: $${this.balance}`;
    }

}

let account1 = new Account("ACC10101", "John Doe", 1000);

console.log(account1.getAccountDetails());
console.log("---------------");
console.log(account1.deposit(500));
console.log("---------------");
console.log(account1.withdraw(300));
console.log("---------------");
