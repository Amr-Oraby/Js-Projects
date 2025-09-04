class Account {
    #balance;
    #password;
    constructor(user, balance, password) {
        this.user = user;
        this.#balance = balance;
        this.#password = password;
    }

    #checkPassword(input) {
        return input === this.#password;
    }

    deposit(amount) {
        if (amount <= 0 || !amount) {
            return "⚠️ Please enter a valid amount.";
        }
        this.#balance += amount;
        return `💰 Successfully added: ${amount}`;
    }

    withdraw(amount, pass) {
        if (!this.#checkPassword(pass)) {
            return "❌ Incorrect password.";
        }

        if (amount <= this.#balance) {
            this.#balance -= amount;
            return `💸 Withdrawn: ${amount}`;
        } else {
            return `⚠️ Insufficient balance.`;
        }
    }

    transferTo(acc, amount, pass) {
        if (!this.#checkPassword(pass)) {
            return "❌ Incorrect password.";
        }

        if (amount <= this.#balance) {
            this.#balance -= amount;
            acc.#balance += amount;
            return `✅ Transferred ${amount} to ${acc.user}`;
        } else {
            return `⚠️ Insufficient balance.`;
        }
    }

    showBalance(pass) {
        if (!this.#checkPassword(pass)) {
            return "❌ Incorrect password.";
        }
        return `💼 ${this.user}'s Balance: ${this.#balance}`;
    }
}

function show(msg) {
    document.querySelector(".output").innerHTML = msg;
}

let accounts = {};
let currentUser = null;

function createAccount() {
    let user = document.querySelector(".user").value;
    let password = document.querySelector(".password").value;
    let amount = document.querySelector(".amount").value;

    if (!user || !password || !amount) {
        show("⚠️ Please fill in all fields.");
        return;
    }

    if (accounts[user]) {
        show("❗ This account already exists.");
        return;
    }

    accounts[user] = new Account(user, Number(amount), password);
    show(`🎉 Account created for ${user}`);
}

function login() {
    let user = document.querySelector(".user").value;
    let password = document.querySelector(".password").value;

    if (!user || !password) {
        show("⚠️ Please fill in all fields.");
        return;
    }

    if (!accounts[user]) {
        show("❌ User not found.");
        return;
    }

    currentUser = accounts[user];

    if (currentUser.showBalance(password) == "❌ Incorrect password.") {
        show("❌ Incorrect password.");
        currentUser = null;
        return;
    }
    document.querySelector(".transfer").style.pointerEvents = "auto";
    document.querySelector(".transfer").style.opacity = "1";
    document.querySelector(".transfer input").focus();
    show(`🔓 ${user} has logged in.`);
}

function deposit() {
    let amount = document.querySelector(".amount").value;
    if (!currentUser) {
        show("🔐 You must log in first.");
        return;
    }

    show(currentUser.deposit(Number(amount)));

}

function withdraw() {
    let amount = document.querySelector(".amount").value;
    let password = document.querySelector(".password").value;
    if (!currentUser) {
        show("🔐 You must log in first.");
        return;
    }

    show(currentUser.withdraw(Number(amount), password));
}

function transferTo() {
    let password = document.querySelector(".password").value;
    let amount = document.querySelector(".amount").value;
    let trans = document.querySelector(".transfer input").value;

    if (!trans) {
        show("✏️ Please enter a username to transfer to.");
        return;
    }

    if (!accounts[trans]) {
        show("❌ User not found.");
        return;
    }

    show(currentUser.transferTo(accounts[trans], Number(amount), password));
    document.querySelector(".amount").value = "";
    document.querySelector(".transfer input").value = "";
}

function showBalance() {
    let password = document.querySelector(".password").value;
    if (!currentUser) {
        show("🔐 You must log in first.");
        return;
    }

    show(currentUser.showBalance(password));
}
