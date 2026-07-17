document.addEventListener("DOMContentLoaded", function(event) {
    const firstNumberInput = document.querySelector("#first-number");
    const secondNumberInput = document.querySelector("#second-number");
    const operationButtons = document.querySelectorAll("#operation-btn")
    const clearInputButton = document.querySelector("#clear-input");
    const resultContainer = document.querySelector("#result-container");
    const historyList = document.querySelector("#history-list");
    const clearHistoryButton = document.querySelector("#clear-history");

    
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

        addToHistory(firstNumber, operation, secondNumber, result);
        return result;
    }

    function addToHistory(firstNumber, operation, secondNumber, result) {
        const symbols = {
            add: "+",
            subtract: "-",
            multiply: "*",
            divide: "/"
        }

        const historyText = `${firstNumber} ${symbols[operation]} ${secondNumber} = ${result}`;
        const historyItem = document.createElement("li");
        historyItem.textContent = historyText;
        historyList.appendChild(historyItem);
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

    clearInputButton.addEventListener("click", function(event) {
        event.preventDefault;

        firstNumberInput.value = "";
        secondNumberInput.value = "";
        resultContainer.innerHTML = "";
        firstNumberInput.focus();
    })

    clearHistoryButton.addEventListener("click", function(event) {
        event.preventDefault;

        historyList.innerHTML = "";
    })
})