const huree = document.createElement("div");
huree.classList.add("box");
const text = document.createElement("div");
const textToo = document.createElement("h1");
textToo.innerText = "🎯 Тоо таах тоглоом";
textToo.classList.add("guess");
const textUg = document.createElement("p");
textUg.innerText = "1-100 хооронд нууц тоо бий. Та тааж үзээрэй!";
textUg.classList.add("ug");
const too = document.createElement("div");
too.classList.add("too");
const bichih = document.createElement("input");
bichih.classList.add("nuuts");
bichih.placeholder = "   Тоогоо бичнэ үү...";
const shalgah = document.createElement("button");
shalgah.innerText = "Шалгах";
shalgah.classList.add("shalga");
const taah = document.createElement("p");
taah.innerText = "1-100 хооронд таагаарай!";
taah.classList.add("taah");
const dood = document.createElement("div");
dood.classList.add("dd");
const dahih = document.createElement("button");
dahih.innerText = "Дахин эхлэх";
dahih.classList.add("dahih");

let secret = Math.floor(Math.random() * 100) + 1;
let finished = false;

const input = bichih;
const checkBtn = shalgah;
const restartBtn = dahih;
const msg = taah;

function checkGuess() {
  if (finished) return;

  const guess = Number(input.value);

  if (!guess || guess < 1 || guess > 100) {
    msg.innerText = "❗ 1-100 хооронд тоо оруулна уу.";
    return;
  }

  if (guess === secret) {
    msg.innerText = `🎉 Зөв таалаа! Нууц тоо ${secret} байсан.`;
    finished = true;
  } else if (guess < secret) {
    msg.innerText = "🔼 Бага байна. Тоог нэм!";
  } else {
    msg.innerText = "🔽 Их байна. Тоог багасга!";
  }
}

function restartGame() {
  secret = Math.floor(Math.random() * 100) + 1;
  finished = false;
  input.value = "";
  msg.innerText = "1-100 хооронд таагаарай!";
}

checkBtn.onclick = checkGuess;
restartBtn.onclick = restartGame;

text.appendChild(textToo);
text.appendChild(textUg);
too.appendChild(bichih);
too.appendChild(shalgah);
dood.appendChild(dahih);
huree.appendChild(text);
huree.appendChild(too);
huree.appendChild(taah);
huree.appendChild(dood);
document.body.appendChild(huree);
