let account = 1000;
let cash = 1000;

window.onload = function () {
    updateHistory("Current account balance: " + account + ", Current cash balance: " + cash);
};

function setBalance() {
    account = parseFloat(document.getElementById('accountBalance').value) || 0;
    cash = parseFloat(document.getElementById('cashBalance').value) || 0;
    updateHistory("Changed balances → Account: " + account + " | Cash: " + cash);
}

function proceed() {
    let amt = parseFloat(document.getElementById('amount').value) || 0;
    let op = document.getElementById('operation').value;

    if (amt <= 0) return alert("กรุณาใส่จำนวนเงินที่ถูกต้อง");

    if (op === "deposit") {
        if (amt > cash) return alert("Not enough cash!");
        account += amt;
        cash -= amt;
        updateHistory("Deposited " + amt + " → Account: " + account + " | Cash: " + cash);
    } else {
        if (amt > account) return alert("Not enough balance!");
        account -= amt;
        cash += amt;
        updateHistory("Withdrew " + amt + " → Account: " + account + " | Cash: " + cash);
    }

    document.getElementById('accountBalance').value = account;
    document.getElementById('cashBalance').value = cash;
}

function convert() {
    let input = parseFloat(document.getElementById('inputCurrency').value) || 0;
    let type = document.getElementById('currencyType').value;
    let output = 0;

    if (type === "USD") {
        output = input * 32.07;
    } else {
        output = input / 32.07;
    }
    document.getElementById('outputCurrency').value = output.toFixed(2);
    updateHistory("Converted " + input + " " + type + " → " + output.toFixed(2));
}

function updateHistory(msg) {
    let history = document.getElementById('history');
    let timestamp = "[" + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + "] ";

    if (history.value.trim() !== "") {
        history.value += "\n" + timestamp + msg;
    } else {
        history.value = timestamp + msg;
    }

    history.scrollTop = history.scrollHeight;
}
