let randomNumber = Math.floor(Math.random() * 100) + 1;

const name = document.querySelector("#nameInput");
const output = document.querySelector("#output");
const nameSubmit = document.querySelector("#nameSubmit");
const dayOneText = document.querySelector("#dayOneText");

dayOneText.style.display = "none";
output.textContent = "---";

function submitButton() {
    output.textContent = nameInput.value;
}

nameSubmit.addEventListener("click", submitButton);

function hideActive(x) {
    x.style.display = "none";
}

function showDayOneText() {
    dayOneText.style.display = "block";
}


