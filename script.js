// Funktion för att hämta och hantera inmatning
function skapaKontakt() {
    const namn = document.getElementById('namn').value;
    const telefon = document.getElementById('telefon').value;
    document.getElementById('varning').innerHTML = "";
    // Om både namn och telefon fälten har innehåll så fortsätt, annars printas felmeddelande. 
    if(validera(namn, telefon)){
        return;
    }

    const kontaktlista = document.getElementById('kontaktlista');
    
    // Skapar en ny lista
    const li = document.createElement('li');

    // Skapar en ny namn-input
    const namnIn = document.createElement('input');
    namnIn.type = 'text';
    namnIn.value = namn;
    namnIn.disabled = true; //Ifylld textfält ska vara disabled.

    // Skapar ny telefon-input.
    const telefonIn = document.createElement('input');
    telefonIn.type = 'text';
    telefonIn.value = telefon;
    telefonIn.disabled = true; //Ifylld textfält ska vara disabled.

    // Skapar Ändra-knapp
    const ändraKnapp = document.createElement('button');
    ändraKnapp.textContent = 'Ändra';
    
    ändraKnapp.addEventListener('click', function(){
        växlaRedigering(namnIn, telefonIn, ändraKnapp);
    });

    // Skapar Radera-knapp
    const raderaKnapp = document.createElement('button');
    raderaKnapp.textContent = 'Radera';
    
    raderaKnapp.addEventListener('click', function(){
        raderaKontakt(li);
    });

    // Appendar knappar och inputs till listan.
    li.append(namnIn);
    li.append(telefonIn);
    li.append(ändraKnapp);
    li.append(raderaKnapp);
    kontaktlista.append(li);

    // Kallar på funktionen för att radera fälten.
    rensaFält();
} 

// Testar om någon fält är tom
function validera(namn, telefon){
    if (namn === "" || telefon === ""){
        document.getElementById('varning').innerHTML = "Fälten får inte vara tomma";
        return true; // Om fälten är tomma  returnera true
    }
    return false; // Om fälten inte är tomma returnera false
}

// Raderar hela listan
function raderaLista() {
    document.getElementById('kontaktlista').innerHTML = '';
}

// Rensar innehåll i fälten
function rensaFält() {
    document.getElementById('namn').value = '';
    document.getElementById('telefon').value = '';
}

// Växla mellan redigering och sparande av kontakt
function växlaRedigering(namnIn, telefonIn, ändraKnapp) {
    if (ändraKnapp.textContent === 'Ändra') {
        // Aktiverar fältet för ändring
        namnIn.disabled = false;
        telefonIn.disabled = false;
        ändraKnapp.textContent = 'Spara'; // Ändrar knappens text till "Spara"
    } else {
        // Om inputvärderna inte är tomma så spara
        if (!namnIn.value || !telefonIn.value) {
            document.getElementById('varning2').innerHTML = "Fälten får inte vara tomma";
        } else {
            // Avaktivera fälten efter att de sparats
            namnIn.disabled = true;
            telefonIn.disabled = true;
            ändraKnapp.textContent = 'Ändra'; // Ändrar knappens text tillbaks till "Ändra"
            document.getElementById('varning2').innerHTML = ""; // Ta bort felmeddelande
        }
    }
}

// Raderar kontakten från listan.
function raderaKontakt(li) {
    li.remove(); 
}