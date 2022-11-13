{
    // Welcome Message
    const welcome = () => {
        console.log("Witaj na mojej stronie Kalulatora walut! Pamiętaj by upewnić się z kiedy są podane kursy walut!")
    }

    const CalculateResult = (amount, currenncy) => {

        // Currency Rates
        const rateEUR = 4.7146;
        const rateUSD = 4.7328;
        const reteGBP = 5.3795;
        const rateCHF = 4.7905;

        switch (currenncy) {
            case "EUR":
                return result = amount / rateEUR;

            case "USD":
                return result = amount / rateUSD;

            case "GBP":
                return result = amount / reteGBP;

            case "CHF":
                return result = amount / rateCHF;
        }
    }

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-form__result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-form__amount");
        const currencyElement = document.querySelector(".js-form__currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = CalculateResult(amount, currency);

        updateResultText(amount, result, currency);
    }

  
    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);

    }
    welcome();
    init();
}