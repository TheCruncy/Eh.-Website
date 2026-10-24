let randomNumber = Math.floor(Math.random() * 100) + 1;

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const currentValue = document.querySelector("#currentValue");

currentValue.textContent = "--- ";
output.textContent = "---";

function currentValueSet() {
    let currentValueText = Number(input.value);
    currentValue.textContent = currentValueText;
    output.textContent = currentValueText;
}

input.oninput = currentValueSet;



