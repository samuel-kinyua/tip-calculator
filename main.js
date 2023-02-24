const bill = parseFloat(document.getElementById('bill').value.trim());
const people = parseFloat(document.getElementById('NumPeople').value.trim());
const tip = document.getElementById('tipNums');
const total = document.getElementById('totalNums');

function fivePercent() {
    const tipAmount = (5 * bill / 100) / people;
    tip.textContent = tipAmount.toFixed(2);

}
