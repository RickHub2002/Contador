let currentNumberWrapper = document.getElementById('currentNumber');
const increment = document.getElementById('incrementButton');
const decrement = document.getElementById('decrementButton');

let currentNumber = 0

increment.addEventListener("click", () => {
    if(currentNumber < 50) {
        currentNumber += 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    condition();
});

decrement.addEventListener("click", () => {
    if(currentNumber > -10) {
        currentNumber -= 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    condition();
});

function condition() {
    if(currentNumber == 0) {
        currentNumberWrapper.style.color = '#e8e8e8';
    } else if(currentNumber < 0) {
        currentNumberWrapper.style.color = '#eb0e42';
    } else if(currentNumber > 0) {
        currentNumberWrapper.style.color = '#0eeb45';
    }
}


