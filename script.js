document.addEventListener("DOMContentLoaded", function(event) {
    const firstNumberInput = document.querySelector("#first-number");
    const secondNumberInput = document.querySelector("#second-number");
    const operationButtons = document.querySelectorAll("#operation-btn")
    const resultContainer = document.querySelector("#result-container");

    function calculate(operation) {
        const firstNumber = parseFloat(firstNumberInput.value);
        const secondNumber = parseFloat(secondNumberInput.value);
        let result = 0;

        if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
            window.alert("Inputs cannot be empty.");
            return;
        }

        switch(operation) {
            case "add":
                result = firstNumber + secondNumber;
                break;
            case "subtract":
                result = firstNumber - secondNumber;
                break;
            case "multiply":
                result = firstNumber * secondNumber;
                break;
            case "divide":
                if (secondNumber === 0) {
                    window.alert("Cannot divide by zero.");
                    return;
                } else {
                    result = firstNumber / secondNumber;
                    break;
                }
            default:
                window.alert("Please enter a valid operation.");
                return;
                
        }

        return result;
    } 

    for (const button of operationButtons) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            resultContainer.innerHTML = "";

            const operation = event.target.dataset.operation;

            const result = calculate(operation);

            const resultSpan = document.createElement("span");
            resultSpan.textContent = result;
            resultContainer.appendChild(resultSpan);
        })
    }
})