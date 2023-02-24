# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Strong cyan: hsl(172, 67%, 45%)

### Neutral

- Very dark cyan: hsl(183, 100%, 15%)
- Dark grayish cyan: hsl(186, 14%, 43%)
- Grayish cyan: hsl(184, 14%, 56%)
- Light grayish cyan: hsl(185, 41%, 84%)
- Very light grayish cyan: hsl(189, 41%, 97%)
- White: hsl(0, 0%, 100%)

## Typography

### Body Copy

- Font size (form inputs): 24px

### Font

- Family: [Space Mono](https://fonts.google.com/specimen/Space+Mono)
- Weights: 700




const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('NumPeople');
const tipDisplay = document.getElementById('tipNums');
const totalDisplay = document.getElementById('totalNums');

function calculateTip(tipPercentage) {
    const bill = parseFloat(billInput.value);
    const people = parseFloat(peopleInput.value);

    if (isNaN(bill) || isNaN(people)) {
        // Handle invalid input
        tipDisplay.textContent = '$0.00';
        totalDisplay.textContent = '$0.00';
        return;
    }

    const tipAmount = (tipPercentage * bill / 100) / people;
    tipDisplay.textContent = '$' + tipAmount.toFixed(2);

    const totalAmount = (bill / people) + tipAmount;
    totalDisplay.textContent = '$' + totalAmount.toFixed(2);
}

document.getElementById('one').addEventListener('click', function() {
    calculateTip(5);
});

document.getElementById('pili').addEventListener('click', function() {
    calculateTip(10);
});

document.getElementById('three').addEventListener('click', function() {
    calculateTip(15);
});

document.getElementById('four').addEventListener('click', function() {
    calculateTip(25);
});

document.getElementById('five').addEventListener('click', function() {
    calculateTip(50);
});

document.getElementById('custom').addEventListener('input', function() {
    const customTip = parseFloat(this.value);
    if (!isNaN(customTip)) {
        calculateTip(customTip);
    }
});

document.getElementById('reset').addEventListener('click', function() {
    billInput.value = '';
    peopleInput.value = '';
    tipDisplay.textContent = '$0.00';
    totalDisplay.textContent = '$0.00';
});

