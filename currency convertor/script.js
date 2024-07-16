// script.js

const exchangeRates = {
    USD: 1,
    EUR: 0.84,
    GBP: 0.76,
    JPY: 109.23,
    CNY: 6.93,
    INR: 74.83
};

const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("from-currency");
const toCurrencySelect = document.getElementById("to-currency");
const convertBtn = document.getElementById("convert-btn");
const resultPara = document.getElementById("result");

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (fromCurrency === toCurrency) {
        resultPara.textContent = `You are converting ${amount} ${fromCurrency} to the same currency. The result is ${amount} ${toCurrency}.`;
    } else {
        const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
        resultPara.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    }
});

function convertCurrency(amount, fromCurrency, toCurrency) {
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    if (fromCurrency!== "USD") {
        amount = amount / fromRate;
    }

    return amount * toRate;
}