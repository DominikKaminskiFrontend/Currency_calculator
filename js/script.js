let amountElement = document.querySelector(".js-form__amount");
let currencyElement = document.querySelector(".js-form__currency");
let formElement = document.querySelector(".js-form");
let resultTextElement = document.querySelector(".js-form__result");

// Currency Rates
let rateEUR = 4.7146;
let rateUSD = 4.7328;
let reteGBP = 5.3795;
let rateCHF = 4.7905;

// Welcome Message
console.log("Witaj na mojej stronie Kalulatora walut! Pamiętaj by upewnić się z kiedy są podane kursy walut!")

// Calculate Choosen Currency 
formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = +amountElement.value;
    let currenncy = currencyElement.value;

    let result;

    switch (currenncy) {
        case "EUR":
            result = amount / rateEUR;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
        case "GBP":
            result = amount / reteGBP;
            break;
        case "CHF":
            result = amount / rateCHF;
            break;
    }

    resultTextElement.innerText = result.toFixed(2) + " " + currenncy;
})