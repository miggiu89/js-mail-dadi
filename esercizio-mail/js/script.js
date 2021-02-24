
// Creo un prompt dove inserire i dati di acesso
var email = prompt('Ciao! Inserisci la tua Email');
var emailList = ['marco@gmail.com', 'luca@gmail.com', 'sergio@gmail.com', 'paolo@gmail.com', 'antonella@gmail.com'];
var emailValid = false;

// verifico che l'email sia coretta
for (let i = 0; i <= emailList.length; i++) {
    if (emailList[i] === email ) {
        emailValid = true;
    }
}

// creo un output a seconda della risposta
if (!emailValid) {
  alert('Le tue credenziali non corrispondono! Riprova!');
} else {
  document.getElementById('accountName').innerText = 'benvenuto ' + email;
}
 

