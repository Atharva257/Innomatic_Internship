const themes = {
    numbers: ["1", "2", "3", "4", "5", "6", "7", "8"],
    food: ["🍎", "🍌", "🍇", "🍉", "🍒", "🥑", "🍍", "🥕"],
    animals: ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"]
};

function startGame(theme) {
    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = ""; // Clear previous game

    const gameBoard = document.createElement("div");
    gameBoard.className = "game-board";
    gameContainer.appendChild(gameBoard);

    let symbols = [...themes[theme], ...themes[theme]].sort(() => Math.random() - 0.5);
    let selectedCards = [];
    let matchedCards = [];

    symbols.forEach((symbol, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.symbol = symbol;
        card.dataset.index = index;
        card.textContent = "?";

        card.addEventListener("click", function () {
            if (selectedCards.length < 2 && !matchedCards.includes(index) && !selectedCards.includes(card)) {
                card.textContent = symbol;
                card.classList.add("flipped");
                selectedCards.push({ card, symbol, index });

                if (selectedCards.length === 2) {
                    setTimeout(checkMatch, 500);
                }
            }
        });

        gameBoard.appendChild(card);
    });

    function checkMatch() {
        if (selectedCards[0].symbol === selectedCards[1].symbol) {
            matchedCards.push(selectedCards[0].index, selectedCards[1].index);
        } else {
            selectedCards.forEach(({ card }) => {
                card.textContent = "?";
                card.classList.remove("flipped");
            });
        }
        selectedCards = [];
    }
}
