
//opere.js


// Funzione per ordinare le opere in base alla data
function ordinaOpereCronologicamente() {
  // Seleziona tutte le opere
  var card = document.querySelectorAll('.card');

  // Converti la NodeList in un array
  var cardArray = Array.from(card);

  // Ordina le opere in base alla data
  cardArray.sort(function(a, b) {
    var datetimeA = new Date(a.dataset.data);
    var datetimeB = new Date(b.dataset.data);
    return datetimeA - datetimeB; // Ordine crescente
  });

  // Svuota il contenitore delle opere
  var cardContainer = document.getElementById('cardContainer');
  cardContainer.innerHTML = '';

  // Aggiungi le opere ordinate al contenitore
  cardArray.forEach(function(card) {
    cardContainer.appendChild(card);
  });
}

// Aggiungi un gestore di eventi al pulsante
document.getElementById('ordineCronologico').addEventListener('click', ordinaOpereCronologicamente);