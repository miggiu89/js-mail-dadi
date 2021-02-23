
// dichiaro variabili
var pc;
var utente;
var vincitore;

// pulsante gioca
var pulsanteGioca = document.getElementById('play');
pulsanteGioca.addEventListener('click',
function() {

  
  // assegno un valore alle variabili
  pc = Math.floor(Math.random()*6) + 1;
  utente = Math.floor(Math.random()*6) + 1;
  vincitore = 'Hai vinto!';

  // istruzioni condizionali

  if (pc > utente) {
    vincitore = 'Mi dispiace.. Hai perso.';
    document.getElementById('high_score').className = 'red';
  } else if (pc == utente) {
    vincitore = 'PAREGGIO!';
    document.getElementById('high_score').className = 'grey';
  } else {
    document.getElementById('high_score').className = 'green';
  }

  //  stampo
  document.getElementById('computer').innerHTML = pc;
  document.getElementById('player').innerHTML = utente;
  document.getElementById('high_score').innerHTML = vincitore;

  // rendo visibile
  document.getElementById('computer').className = 'show';
  document.getElementById('player').className = 'show';
});



// pulsante reset
var pulsanteReset = document.getElementById('refresh');
pulsanteReset.addEventListener('click',
function() {

  document.getElementById('computer').className = 'hidden';
  document.getElementById('player').className = 'hidden';
  document.getElementById('high_score').innerHTML = '';
});
