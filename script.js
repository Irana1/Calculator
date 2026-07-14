document.addEventListener("DOMContentLoaded", function(event) {
    const firstNumberInput = document.querySelector("#first-number");
    const secondNumberInput = document.querySelector("#second-number");
    const operatorSelector = document.querySelector("#operators");
    const calculateButton = document.querySelector("#calculate");
    const resultContainer = document.querySelector("#result-container");

    calculateButton.addEventListener("click", function(event) {
        event.preventDefault;
        resultContainer.innerHTML = ""

        const resultSpan = document.createElement("span");
        const firstNumber = parseInt(firstNumberInput.value, 10);
        const secondNumber = parseInt(secondNumberInput.value, 10);

        if (operatorSelector.value === "addition") {
            const result = firstNumber + secondNumber;

            resultSpan.textContent = result;
        } else if (operatorSelector.value === "subtraction") {
            const result = firstNumber - secondNumber;

            resultSpan.textContent = result;
        } else if (operatorSelector.value === "multiplication") {
            const result = firstNumber * secondNumber;

            resultSpan.textContent = result;
        } else if (operatorSelector.value === "division") {
            const result = firstNumber / secondNumber;

            resultSpan.textContent = result;
        }

        resultContainer.appendChild(resultSpan);
    })
})