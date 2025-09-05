const huree = document.createElement("div");
huree.className = "huree";
const card = document.createElement("div");
card.className = "box";
const header = document.createElement("div");
header.className = "header";

const leftHead = document.createElement("div");
const title = document.createElement("div");
title.className = "title";
title.innerText = "Dice Sum Calculator";

const rightHead = document.createElement("div");
rightHead.classList.add("right");
const rollBox = document.createElement("button");
rollBox.className = "roll";
rollBox.innerText = "Dice: 2";
const rollSum = document.createElement("button");
rollSum.className = "roll";
rollSum.innerText = "Sum:";
const rollDice = document.createElement("button");
rollDice.className = "rollZuw";
rollDice.innerHTML = "ROLL";

const dice = document.createElement("div");
dice.classList.add("dc");
const diceImage = document.createElement("img");
diceImage.classList.add("img");

function ROLL() {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  diceImage.src = `./picture/2.die_0.gif`;

  function updateImage() {
    if (diceRoll === 1) {
      diceImage.src = `./picture/2.die_1.png`;
    }
    if (diceRoll === 2) {
      diceImage.src = `./picture/2.die_2.png`;
    }
    if (diceRoll === 3) {
      diceImage.src = `./picture/2.die_3.png`;
    }
    if (diceRoll === 4) {
      diceImage.src = `./picture/2.die_4.png`;
    }
    if (diceRoll === 5) {
      diceImage.src = `./picture/2.die_5.png`;
    }
    if (diceRoll === 6) {
      diceImage.src = `./picture/2.die_6.png`;
    }
  }
  setTimeout(updateImage, 1000);
}
rollDice.onclick = ROLL;

leftHead.appendChild(title);
rightHead.appendChild(rollBox);
rightHead.appendChild(rollSum);
rightHead.appendChild(rollDice);

dice.appendChild(diceImage);
header.appendChild(leftHead);
header.appendChild(rightHead);

card.appendChild(header);
card.appendChild(dice);
huree.appendChild(card);
document.body.appendChild(huree);
