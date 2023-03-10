const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('NumPeople');
const tipDisplay = document.getElementById('tipNums');
const totalDisplay = document.getElementById('totalNums');
const custominput = document.getElementById('custom')

function calculateTip(tipPercentage){
    const bill = parseFloat(billInput.value);
    const people = parseFloat(peopleInput.value);
   

    if (isNaN(bill) || isNaN(people)){
        tipDisplay.textContent = '$0.00';
        totalDisplay.textContent = '$0.00';
        return;
    }
      

    const tipAmount = (tipPercentage * bill / 100)/people;
    tipDisplay.textContent = '$' + tipAmount.toFixed(2);
    
    const totalAmount = (bill / people) + tipAmount;
    totalDisplay.textContent = '$' + totalAmount.toFixed(2);



}


document.getElementById('one').addEventListener('click', function(){
    calculateTip(5);
});

document.getElementById('pili').addEventListener('click', function(){
    calculateTip(10);
});

document.getElementById('three').addEventListener('click', function(){
    calculateTip(15);
});

document.getElementById('four').addEventListener('click', function(){
    calculateTip(25);
});

document.getElementById('five').addEventListener('click', function(){
    calculateTip(50);
});

document.getElementById('custom').addEventListener('input', function(){
    const customTip = parseFloat(this.value);

    if(!isNaN(customTip)){
        calculateTip(customTip);
    }
});

document.getElementById('reset').addEventListener('click', function() {
    billInput.value = '';
    peopleInput.value = '';
    custominput.value = '';
    tipDisplay.textContent = '$0.00';
    totalDisplay.textContent = '$0.00';

});