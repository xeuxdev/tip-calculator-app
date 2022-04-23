const billEl = document.querySelector("#bill");
const btnGroup = document.querySelector("#btn-group"),
  buttonEl = btnGroup.querySelectorAll("button");
const customEl = document.querySelector("#custom");
const noOfPeople = document.querySelector("#no-of-people");
const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");
const errorTxt = document.querySelector("#error");
const resetBtn = document.querySelector("#reset-btn");

let tip_Percentage = 0;
let bill_Amount = 0;
let no_Of_people = 0;

function removeActiveTipClass() {
  buttonEl.forEach((percent) => {
    percent.classList.remove("active");
  });
}

function calculateTip() {
  if (tip_Percentage <= 0 || bill_Amount <= 0 || no_Of_people <= 0) return;

  const tips = (tip_Percentage / 100) * bill_Amount;
  let tip_Amount = tips / no_Of_people;
  let tip_Total = bill_Amount / no_Of_people + tip_Amount;
  tipAmount.textContent = `$${tip_Amount.toFixed(2)}`;
  totalAmount.textContent = `$${tip_Total.toFixed(2)}`;
  resetBtn.classList.add("active");
}

function checkInput() {
  if (isNaN(no_Of_people)) return;
  if (no_Of_people < 0) {
    errorTxt.textContent = "Can't be Zero or Less";
    noOfPeople.value = "";
  }
  if (no_Of_people < 1) {
    noOfPeople.classList.add("error");
    errorTxt.textContent = "Can't be Zero";
  } else {
    noOfPeople.classList.remove("error");
    errorTxt.textContent = "";
  }
}

buttonEl.forEach((percent) => {
  percent.addEventListener("click", () => {
    removeActiveTipClass();
    percent.classList.add("active");
    tip_Percentage = Number(percent.value);
    checkInput();
    calculateTip();
  });
});

customEl.addEventListener("input", (val) => {
  removeActiveTipClass();
  tip_Percentage = Number(val.target.value);
  calculateTip();
});

billEl.addEventListener("input", (val) => {
  bill_Amount = Number(val.target.value);
  calculateTip();
});

noOfPeople.addEventListener("input", (val) => {
  let numOfPeople = Number(val.target.value);
  no_Of_people = Math.ceil(numOfPeople);
  checkInput();
  calculateTip();
});

resetBtn.addEventListener("click", () => {
  billEl.value = "";
  tip_Percentage = 0;
  customEl.value = "";
  noOfPeople.value = "";
  removeActiveTipClass();
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  resetBtn.classList.remove("active");
});
