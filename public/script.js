const billEl = document.querySelector("#bill");
const btnGroup = document.querySelector("#btn-group"),
  buttonEl = btnGroup.querySelectorAll("button");
const customEl = document.querySelector("#custom");
const noOfPeople = document.querySelector("#no-of-people");
const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");
const errorTxt = document.querySelector("#error");

buttonEl.forEach((item) => {
  item.addEventListener("click", () => {
    btnvalue = parseInt(item.value)
    console.log(btnValue)
    calculateTip();
  });
});

customEl.addEventListener("input", () => {
  calculateTip();
});

noOfPeople.addEventListener("input", () => {
  calculateTip();
});

function calculateTip() {
  let bill = billEl.value;
  let numberOfPeople = noOfPeople.value;

  let tipAmountCalc = bill * (percent / 100) * numberOfPeople;
  let tipTotalCalc = bill / numberOfPeople + tipAmountCalc;

  tipAmount.textContent = `$${tipAmountCalc}`;
  totalAmount.textContent = `$${tipTotalCalc}`;
}
