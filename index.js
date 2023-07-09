let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let headingEl = document.getElementById("heading-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function resetCount() {
    saveEl.textContent = "Previous Rounds: "
    countEl.textContent = 0
    count = 0
}
