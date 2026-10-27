const miningGame = document.querySelector("#miningGame");
const craftingGame = document.querySelector("#craftingGame");
const craftingGamePointer = document.querySelector("#craftingGamePointer");
const inventory = document.querySelector("#inventory");
const inventoryContent = [ ]

let leftMenuActive = miningGame;


function makeActiveMenu(x) {
    leftMenuActive.style.display = "none";
    x.style.display = "flex";
    leftMenuActive = x;
}

class Item {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    quantity = 1;
    getImageSource() {
        return `assets/images/${this.id}.png`;
    }
}

function addToInventory(id) {
    let invLength = inventoryContent.length
    let idMatch = false
    let currentItem = 0
    for (let i = 0; i <= invLength; i++) {
        console.log("searching")
        console.log(inventoryContent[i])
        if (inventoryContent[i]?.id === id) {
            console.log("Match found");
            idMatch = true;
            currentItem = i
            break;
        }
    }
    if (idMatch === true) {
        console.log("Attempting to increase quantity")
        inventoryContent[currentItem].quantity += 1
    }
    else {
        inventoryContent.push(new Item(id))
    }
    console.log(inventoryContent)
}

function addShitToFuck() {
    const para = document.createElement("p");
    const node = document.createTextNode("This is new.");
    para.appendChild(node);
    const element = inventory
    element.appendChild(para);
}
