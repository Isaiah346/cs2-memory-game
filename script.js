console.log("script started");
// Variable to track guesses
let numGuesses = 0;

// Var to track first card pick (empty to start)
let firstCardId = "";
let secondCardId = "";

function flipCard(cardId) {
    // Print click to console to test that click works
    console.log("click");
    // This gets the html card 
    let card = document.getElementById(cardId);
    // Change colors to flip card and reveal texts 
    card.style.color = "white";
    card.style.backgroundColor = "gray";

    // Check which pick it is
    if (firstCardId == "") {
        // Store 1st card id 
        firstCardId = cardId; 
        console.log("first = " + firstCardId);
    }
    else {
        // Store 2nd card id
         secondCardId = cardId; 
         // checkForMatch();
         setTimeout(checkForMatch, 1000);
         console.log("second = " + secondCardId);
    }

}

function checkForMatch() {
    // Get the card elements 
    let firstCard = document.getElementById(firstCardId);
    let secondCard = document.getElementedById(secondCardId);

    if (firstCard.innerText == secondCard.innerText) {
        // Green bg color to show match
        firstCard.style.backgroundColor = "green";
        secondCard.style.backgroundColor = "green";
    }
    else {
        // Cards don't match, reset the styles
        firstCard.style.color = "red";
        firstCard.style.backgroundColor = "red";
        secondCard.style.color = "red";
        secondCard.style.backgroundColor = "red";
    } 


    // Reset for next pick
    firstCardId = "";
    secondCardId = "";
}