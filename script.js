let randomNumber = Math.floor(Math.random() * 100) + 1;

const name = document.querySelector("#nameInput");
const output = document.querySelector("#output");
const nameSubmit = document.querySelector("#nameSubmit");
const dayOneText = document.querySelector("#dayOneText");
const Timer = document.querySelector("#Timer");

let timerValue = 0;




Timer.textContent = "-----";
dayOneText.style.display = "none";
output.textContent = "---";



setInterval(timerGoUp, 1000);




function timerGoUp() {
    timerValue += 1;
    Timer.textContent = timerValue;
}


function makeReadOnly(x) {
    x.readOnly = true;
}

function hideActive(x) {
    x.style.display = "none";
}

function submitButton() {
    output.textContent = nameInput.value;
    hideActive();
}

nameSubmit.addEventListener("click", submitButton);

function showDayOneText() {
    dayOneText.style.display = "block";
}


