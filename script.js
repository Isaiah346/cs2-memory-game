console.log("script started");

function flipCard(cardId) {
    console.log("click");
    let card = document.getElementById(cardId);
    card.style.color = "white";
    card.style.backgroundColor = "gray";
}

