function skapaKontakt() {
    const namn = document.getElementById('namn').value;
    const telefon = document.getElementById('telefon').value;
    
    if(namn && telefon){
        const kontaktlista = document.getElementById('kontaktlista')
        const li=document.createElement('li');

        li.textContent=`${namn} - ${telefon}`;
        
        kontaktlista.appendChild(li);

    }
    else {

    alert("Skriv innehåll i båda fält" );
    }

}