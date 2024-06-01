var form = document.getElementById("fake-submit");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var jmeno = document.getElementById("jmeno").value;
  var prijmeni = document.getElementById("prijmeni").value;
  var email = document.getElementById("email").value;
  var telefon = document.getElementById("telefon").value;
  var kurz = document.getElementById("kurz").value;
  var souhlas = document.getElementById("souhlas").checked;

  window.alert(
    "Formulář byl úspěšně odeslán s nasledujícími údaji:\nJméno: " +
      jmeno +
      "\nPříjmení: " +
      prijmeni +
      "\nEmail: " +
      email +
      "\nTelefon: " +
      telefon +
      "\nKurz: " +
      kurz +
      "\nTOS a GDPR: " +
      souhlas +
      "\nOčekávejte kontakt od našeho pracovníka na váš email nebo telefonní číslo."
  );
});
