const choiceBtn = document.getElementById("choiceBtn")
let choices = document.getElementById("choices")
let choicesArr = ["js-logo.png", "python-logo.png", "react-logo.png"]

function randomChoice() {
    index = Math.floor(Math.random() * choicesArr.length)
    choices.src = `./images/${choicesArr[index]}`
}

choiceBtn.addEventListener("click", () => {
    randomChoice()
})