let player = {

    name: "PlayerOP"
}
let cards = [] // array - an orderd lsit of items
let sum = 0
let hasBalckJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = "Name: " + player.name

function getRandomCard() {

    let randomCardNumber = Math.floor(Math.random() * 13 ) + 1

    if ( randomCardNumber === 1) {
        return 11
    } else if ( randomCardNumber > 10) {
        return 10
    } else {
        return randomCardNumber
    }
    
}
function startGame(){

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] 
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++) {

        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "You've a Blackjack!"
        hasBalckJack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {

    if (isAlive === true && hasBalckJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}