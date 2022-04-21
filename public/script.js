const billEl = document.querySelector("#bill");
const btnGroup = document.querySelector("#btn-group"),
  buttonEl = btnGroup.querySelectorAll("button");
const customEl = document.querySelector("#custom");
const noOfPeople = document.querySelector("#no-of-people");
const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");
const errorTxt = document.querySelector("#error");
const resetBtn = document.querySelector("#reset-btn")

let tipPercentage = 15
let billAmount = 0
let no_Of_people = 0


function removeActiveTipClass(){
  buttonEl.forEach((percent) => {
    percent.classList.remove("active")
  })
}

function calculateTip() {
  if(tipPercentage <= 0 || billAmount <= 0 || no_Of_people <= 0) return

  const tips = (tipPercentage / 100) * billAmount
   let tip_Amount = tips / no_Of_people
  let tip_Total = billAmount / no_Of_people + tip_Amount
  tipAmount.textContent = `$${tip_Amount.toFixed(2)}`
  totalAmount.textContent = `$${tip_Total.toFixed(2)}`
  resetBtn.classList.add("active")

}

buttonEl.forEach((percent) => {
  percent.addEventListener("click", () => {
    removeActiveTipClass()
    percent.classList.add("active")
    tipPercentage = Number(percent.value)
    calculateTip()
  })
})

customEl.addEventListener("input", (val) => {
  removeActiveTipClass()
  tipPercentage = Number(val.target.value)
  calculateTip()
})

billEl.addEventListener("input", (val) => {
  billAmount = Number(val.target.value)
  calculateTip()
})

noOfPeople.addEventListener("input", (val) => {
  no_Of_people = Number(val.target.value)
  calculateTip()
})

resetBtn.addEventListener("click", () => {
  billEl.value = ""
  noOfPeople.value = ""
  removeActiveTipClass()
  tipAmount.textContent = "$0.00"
  totalAmount.textContent = "$0.00"
  resetBtn.classList.remove("active")
})