## First Issue

I tried to create an element for the result container but it would produce an error. You must **Create the element through the document first, and then append the element to the desired container.** Easy fix.

## Calculate Function

```javascript
function calculate(operation) {
        const firstNumber = parseInt(firstNumberInput.value, 10);
        const secondNumber = parseInt(secondNumberInput.value, 10);

        if (!firstNumber || !secondNumber) {
            window.alert("Inputs cannot be empty.");
            return;
        }

        switch(operation) {
            case "add":
                const result = firstNumber + secondNumber;
                break;
            case "subtract":
                const result = firstNumber - secondNumber;
                break;
            case "multiply":
                const result = firstNumber * secondNumber;
                break;
            case "divide":
                const result = firstNumber / secondNumber;
                break;
        }
    }
``` 

I asked ChatGPT if the current function was correct and it replied no. Here's what it said:
    - Validation treats ```0``` as empty.
    - ```parseInt()``` removes decimals.
    - ```result``` only exist inside each case.
    - Each ```case``` declares the same ```const result```.
    - Division needs a zero check.
    - Add a ```default``` case.

Here's what I did to fix all of the issues:
    - Validation treats ```0``` as empty.   
        Switched ```!firstNumber``` to ```Number.isNaN(firstNumber)``` and the same to the secondNumber.
    
    - ```parseInt()``` removes decimals.
        Switched ```parseInt()``` to ```parseFloat()```.

    - ```result``` only exists inside each case.
    - Each ```case``` declares the same ```const result```.
        I created the result variable using ```let``` outside the switch case, when declaring the number variables. Inside the switch case, I declared the variable with the respective operation.

    - Divison needs a zero check.
        Added a check within the switch case.

    - Add a ```default``` case.
        Added a window alert to check for invalid operations.

## Second Issue
    Had an issue with displaying the history list items on the webpage **The function call was below the return statement so it wouldn't run.**

