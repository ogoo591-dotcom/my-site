const huree = document.createElement("div");
huree.classList.add("huree");
const box = document.createElement("div");
box.classList.add("hairtsag");
const zurag = document.createElement("IMG");
zurag.setAttribute("src", "./picture/1.cal-img.jpg");
zurag.classList.add("zurag");

const input1 = document.createElement("div");
input1.classList.add("calcHeader");
const screen = input1;
screen.innerText = "0";
screen.classList.add("screen");

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("calcFooter");

const btnItemAc = document.createElement("button");
btnItemAc.innerText = "AC";
btnItemAc.classList.add("btn");
const btnItemNem = document.createElement("button");
btnItemNem.innerText = "+/-";
btnItemNem.classList.add("btn");
const btnItemHuw = document.createElement("button");
btnItemHuw.innerText = "%";
btnItemHuw.classList.add("btn");
const btnItemHuvaah = document.createElement("button");
btnItemHuvaah.innerText = "÷";
btnItemHuvaah.classList.add("btn");
btnItemHuvaah.classList.add("btnNemeh");
const btnItem7 = document.createElement("button");
btnItem7.innerText = "7";
btnItem7.classList.add("btn");
const btnItem8 = document.createElement("button");
btnItem8.innerText = "8";
btnItem8.classList.add("btn");
const btnItem9 = document.createElement("button");
btnItem9.innerText = "9";
btnItem9.classList.add("btn");
const btnItemVrj = document.createElement("button");
btnItemVrj.innerText = "x";
btnItemVrj.classList.add("btn");
btnItemVrj.classList.add("btnNemeh");
const btnItem4 = document.createElement("button");
btnItem4.innerText = "4";
btnItem4.classList.add("btn");
const btnItem5 = document.createElement("button");
btnItem5.innerText = "5";
btnItem5.classList.add("btn");
const btnItem6 = document.createElement("button");
btnItem6.innerText = "6";
btnItem6.classList.add("btn");
const btnItemHasah = document.createElement("button");
btnItemHasah.innerText = "-";
btnItemHasah.classList.add("btn");
btnItemHasah.classList.add("btnNemeh");
const btnItem1 = document.createElement("button");
btnItem1.innerText = "1";
btnItem1.classList.add("btn");
const btnItem2 = document.createElement("button");
btnItem2.innerText = "2";
btnItem2.classList.add("btn");
const btnItem3 = document.createElement("button");
btnItem3.innerText = "3";
btnItem3.classList.add("btn");
const btnItemNemeh = document.createElement("button");
btnItemNemeh.innerText = "+";
btnItemNemeh.classList.add("btn");
btnItemNemeh.classList.add("btnNemeh");
const btnItem0 = document.createElement("button");
btnItem0.innerText = "0";
btnItem0.classList.add("btnTeg");
const btnItemTseg = document.createElement("button");
btnItemTseg.innerText = ".";
btnItemTseg.classList.add("btn");
const btnItemTentsvv = document.createElement("button");
btnItemTentsvv.innerText = "=";
btnItemTentsvv.classList.add("btn");
btnItemTentsvv.classList.add("btnNemeh");

let displayValue = "0";
let firstOperand = null;
let operator = null;
let waitingForSecond = false;

function updateScreen() {
  screen.textContent = displayValue;
}
function inputDigit(d) {
  if (waitingForSecond) {
    displayValue = String(d);
    waitingForSecond = false;
  } else {
    displayValue = displayValue === "0" ? String(d) : displayValue + String(d);
  }
  updateScreen();
}
function inputDot() {
  if (waitingForSecond) {
    displayValue = "0.";
    waitingForSecond = false;
    updateScreen();
    return;
  }
  if (!displayValue.includes(".")) {
    displayValue += ".";
    updateScreen();
  }
}
function toggleSign() {
  if (displayValue === "0") return;
  if (displayValue.startsWith("-")) displayValue = displayValue.slice(1);
  else displayValue = "-" + displayValue;
  updateScreen();
}
function percent() {
  const n = parseFloat(displayValue);
  displayValue = String(n / 100);
  if (operator && firstOperand !== null && !waitingForSecond) {
    waitingForSecond = false;
  }
  updateScreen();
}
function compute(a, op, b) {
  const x = parseFloat(a),
    y = parseFloat(b);
  if (op === "+") return x + y;
  if (op === "-") return x - y;
  if (op === "*") return x * y;
  if (op === "/") return y === 0 ? NaN : x / y;
  return y;
}
function handleOperator(nextOp) {
  const input = displayValue;

  if (firstOperand === null) {
    firstOperand = input;
  } else if (!waitingForSecond && operator) {
    const result = compute(firstOperand, operator, input);
    displayValue = String(result);
    firstOperand = displayValue;
    updateScreen();
  }
  operator = nextOp;
  waitingForSecond = true;
}
function equals() {
  if (operator === null || waitingForSecond) return;
  const result = compute(firstOperand, operator, displayValue);
  displayValue = String(result);
  firstOperand = null;
  operator = null;
  waitingForSecond = false;
  updateScreen();
}
function allClear() {
  displayValue = "0";
  firstOperand = null;
  operator = null;
  waitingForSecond = false;
  updateScreen();
}
btnItem0.onclick = () => inputDigit(0);
btnItem1.onclick = () => inputDigit(1);
btnItem2.onclick = () => inputDigit(2);
btnItem3.onclick = () => inputDigit(3);
btnItem4.onclick = () => inputDigit(4);
btnItem5.onclick = () => inputDigit(5);
btnItem6.onclick = () => inputDigit(6);
btnItem7.onclick = () => inputDigit(7);
btnItem8.onclick = () => inputDigit(8);
btnItem9.onclick = () => inputDigit(9);

btnItemTseg.onclick = inputDot;
btnItemNem.onclick = toggleSign;
btnItemHuw.onclick = percent;
btnItemAc.onclick = allClear;
btnItemTentsvv.onclick = equals;

btnItemNemeh.onclick = () => handleOperator("+");
btnItemHasah.onclick = () => handleOperator("-");
btnItemVrj.onclick = () => handleOperator("*");
btnItemHuvaah.onclick = () => handleOperator("/");

updateScreen();

buttonContainer.appendChild(btnItemAc);
buttonContainer.appendChild(btnItemNem);
buttonContainer.appendChild(btnItemHuw);
buttonContainer.appendChild(btnItemHuvaah);
buttonContainer.appendChild(btnItem7);
buttonContainer.appendChild(btnItem8);
buttonContainer.appendChild(btnItem9);
buttonContainer.appendChild(btnItemVrj);
buttonContainer.appendChild(btnItem4);
buttonContainer.appendChild(btnItem5);
buttonContainer.appendChild(btnItem6);
buttonContainer.appendChild(btnItemHasah);
buttonContainer.appendChild(btnItem1);
buttonContainer.appendChild(btnItem2);
buttonContainer.appendChild(btnItem3);
buttonContainer.appendChild(btnItemNemeh);
buttonContainer.appendChild(btnItem0);
buttonContainer.appendChild(btnItemTseg);
buttonContainer.appendChild(btnItemTentsvv);

box.appendChild(input1);
box.appendChild(buttonContainer);
huree.appendChild(box);
huree.appendChild(zurag);
document.body.appendChild(huree);
