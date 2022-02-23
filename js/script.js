
// eseguo il codice descritto nella funzione solo dopo l'evento click del botton genera

document.getElementById("btn-genera").addEventListener("click", function(){

    // creo una variabile per salvare il nome del passeggero dati in input
    const name = document.getElementById("input-name").value;
    console.log(name);

    // creo una variabile per salvare i chilometri del viaggio dati in input
    const kmRoute = document.getElementById("input-km").value;
    console.log(kmRoute);

    // creo una variabile per salvare l'opzione dell'età scelta dall'utente
    let ageSelected = document.getElementById("input-select");
    ageSelected = ageSelected.options[ageSelected.selectedIndex].text;
    console.log(ageSelected);

    // aggiorno i dati del nome stampandoli sull'html precedentemnte creato
    document.getElementById("name-passenger").innerHTML = name;

    const kmPrice = 0.27;

    // calcolo il prezzo totale senza sconto sapendo il prezzo per km
    let price = kmRoute * kmPrice;

    // cambio le classi sull'html per far vedere la finestra del biglietto creata precedentemnte
    document.getElementById("ticket").classList.remove("d-none");
    document.getElementById("ticket").classList.add("d-block");

    // controllo l'età del passeggero e in base al risultato applico lo sconto inerente e lo stampo sull'html
    if (ageSelected === "Minorenne") {

        document.getElementById("ticket-type").innerHTML = `Biglietto con sconto del 17%`;
        price -= (price * 0.17);
        document.getElementById("ticket-price").innerHTML = `${price.toFixed(2)} €`;

    }
    else if (ageSelected === "Over 65") {

        document.getElementById("ticket-type").innerHTML = `Biglietto con sconto del 33%`;
        price -= (price * 0.33);
        document.getElementById("ticket-price").innerHTML = `${price.toFixed(2)} €`;
    }
    else{
        document.getElementById("ticket-type").innerHTML = `Biglietto Standard`;
        document.getElementById("ticket-price").innerHTML = `${price.toFixed(2)} €`;
    }

    // creo una variabile con un numero random per il numero della cabina e lo stampo sull'html
    let nCarriage = Math.floor((Math.random() * 10))+1;
    document.getElementById("carriage").innerHTML = nCarriage;

    // creo una variabile con un numero random per il codice cp e lo stampo sull'html
    let cpCode = Math.floor((Math.random() * 10000))+1000;
    document.getElementById("cp-code").innerHTML = cpCode;



});

// eseguo il codice descritto nella funzione solo dopo l'evento click del botton annulla

document.getElementById("btn-annulla").addEventListener("click", function(){
    // elimino la finestra del biglietto
    document.getElementById("ticket").classList.add("d-none");
    document.getElementById("ticket").classList.remove("d-block");

    // resetto i valori di default degli input
    document.getElementById("input-name").value = "";
    document.getElementById("input-km").value = "";
    document.getElementById("input-select").options.selectedIndex = '<option selected>Maggiorenne</option>';
    
});