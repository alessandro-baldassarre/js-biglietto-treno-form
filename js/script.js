
// eseguo il codice descritto nella funzione solo dopo l'evento click del botton genera

document.getElementById("btn-genera").addEventListener("click", function(){

    const name = document.getElementById("input-name").value;
    console.log(name);

    const kmRoute = document.getElementById("input-km").value;
    console.log(kmRoute);

    let ageSelected = document.getElementById("imput-select");
    ageSelected = ageSelected.options[ageSelected.selectedIndex].text;
    console.log(ageSelected);

    document.getElementById("name-passenger").innerHTML = name;

    const kmPrice = 0.27;

    let price = kmRoute * kmPrice;

    document.getElementById("ticket").classList.remove("d-none");
    document.getElementById("ticket").classList.add("d-block");

    if (ageSelected === "Minorenne") {

        document.getElementById("ticket-type").innerHTML = `Biglietto con sconto del 20%`;
        price -= (price * 0.17);
        document.getElementById("ticket-price").innerHTML = `${price.toFixed(2)} €`;

    }
    else if (ageSelected === "Over 65") {

        document.getElementById("ticket-type").innerHTML = `Biglietto con sconto del 40%`;
        price -= (price * 0.33);
        document.getElementById("ticket-price").innerHTML = `${price.toFixed(2)} €`;
    }
    else{
        document.getElementById("ticket-type").innerHTML = `Biglietto Standard`;
        document.getElementById("ticket-price").innerHTML = `${price.toFixed(2)} €`;
    }

    let nCarriage = Math.floor((Math.random() * 10))+1;
    document.getElementById("carriage").innerHTML = nCarriage;

    let cpCode = Math.floor((Math.random() * 10000))+1000;
    document.getElementById("cp-code").innerHTML = cpCode;



});

document.getElementById("btn-annulla").addEventListener("click", function(){
    document.getElementById("ticket").classList.add("d-none");
    document.getElementById("ticket").classList.remove("d-block");

    document.getElementById("input-name").value = "";
    document.getElementById("input-km").value = "";
    document.getElementById("imput-select").options.selectedIndex = '<option selected>Maggiorenne</option>';
    
});