// Funktion för att hämta och hantera inmatning
function skapaKontakt() {
    const namn = document.getElementById('namn').value;
    const telefon = document.getElementById('telefon').value;

    
    // Om både namn och telefon fälten har innehåll så fortsätt 
    if (namn && telefon) {
        const kontaktlista = document.getElementById('kontaktlista');

        // Skapar en ny lista
        const li = document.createElement('li');
        li.className = 'contact-item';

        // Skapar en ny namn-input
        const namnIn = document.createElement('input');
        namnIn.type = 'text';
        namnIn.value = namn;
        namnIn.disabled = true; //Ifylld textfält ska vara disabled.

        // Ska ny telefon-input.
        const telefonIn = document.createElement('input');
        telefonIn.type = 'text';
        telefonIn.value = telefon;
        telefonIn.disabled = true; //Ifylld textfält ska vara disabled.

        // Skapar Ändra-knapp
        const ändraKnapp = document.createElement('button');
        ändraKnapp.textContent = 'Ändra';
        ändraKnapp.onclick = () => växlaRedigering(namnIn, telefonIn, ändraKnapp);

        // Skapar Radera-knapp
        const raderaKnapp = document.createElement('button');
        raderaKnapp.textContent = 'Radera';
        raderaKnapp.onclick = () => raderaKontakt(li);

        // Appendar knappar och inputs till listan.
        li.append(namnIn);
        li.append(telefonIn);
        li.append(ändraKnapp);
        li.append(raderaKnapp);
        kontaktlista.append(li);

        // Kallar på funktionen för att radera fälten.
        rensaFält();
    } 
    
    //  Om fälten är tomma så vissa felmeddelandet.
    else {
        alert("Skriv innehåll i båda fält");
    }
}

function växlaRedigering(namnIn, telefonIn, ändraKnapp) {
    // Växla knapparnarnas namn beroende på deras aktuella värde.
    if (ändraKnapp.textContent === 'Ändra') {
        namnIn.disabled = false; // Tillåter inmatning 
        telefonIn.disabled = false; // Öppnar för inmatning
        ändraKnapp.textContent = 'Spara'; // Ändrar knappens text till "Spara"
    } else {
        // Annars avaktiveras inmatningsmöjligheten och ändrar på knappens text tillbaks till "Ändra"
        namnIn.disabled = true; 
        telefonIn.disabled = true; 
        ändraKnapp.textContent = 'Ändra'; 
    }
}

function raderaKontakt(li) {
    li.remove(); // Raderar kontakten från listan.
}

// Rensar innehåll i fälten
function rensaFält() {
    document.getElementById('namn').value = '';
    document.getElementById('telefon').value = '';
}
