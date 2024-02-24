let tipPercent = document.querySelector(".tip-percent");
let tipRange = document.querySelector(".tip-range");
let peopleRange = document.querySelector(".people-range");
let numberOfPeople = document.querySelector(".number-people");
let tipValue = document.querySelector(".tip-value");
let billValue = document.querySelector(".bill-value");
let tipPerPerson = document.querySelector(".tip-per-person");
let totalPerPerson = document.querySelector(".total-per-person");
let totalAmount = document.querySelector(".total-amount-value");
let btn = document.querySelector("button");
document.addEventListener("input", function () {
  tipPercent.textContent = tipRange.value;
  tipValue.textContent = roundToTwoDecimalPlaces(
    (tipRange.value / 100) * billValue.value
  );
  totalAmount.textContent = roundToTwoDecimalPlaces(
    Number(billValue.value) + Number(tipValue.textContent)
  );
  numberOfPeople.textContent = peopleRange.value;
  tipPerPerson.textContent = roundToTwoDecimalPlaces(
    Number(tipValue.textContent) / peopleRange.value
  );
  totalPerPerson.textContent = roundToTwoDecimalPlaces(
    Number(totalAmount.textContent) / peopleRange.value
  );
});
function roundToTwoDecimalPlaces(num) {
  return num.toFixed(2);
}
