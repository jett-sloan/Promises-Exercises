let deckId

axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(response =>{
    deckId = response.data.deck_id
    return axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
})
.then(firstCardResponse => {
    const firstCard = firstCardResponse.data.cards[0];
    console.log(`First card: ${firstCard.value} of ${firstCard.suit}`);
    
    displayCard(firstCard.value,firstCard.suit)

    return axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);

  })
  .catch(error => {
    console.error('Error:', error);
  });

  function drawCard(deckId) {
    return axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  }
  
  
  const hitButton = document.getElementById('hitButton');
  hitButton.addEventListener('click', function() {
      // Draw another card when the button is clicked
      drawCard(deckId)
      .then(cardResponse => {
          const newCard = cardResponse.data.cards[0];
        if (!newCard){
            const Stop = document.getElementById('STOP')
            Stop.textContent = 'The Deck Is Empty'
        }
          displayCard(newCard.value, newCard.suit);
      })})

  function displayCard(value, suit) {
    const cardDiv = document.getElementById('container');
    cardDiv.textContent = `${value} of ${suit}`;
  }
