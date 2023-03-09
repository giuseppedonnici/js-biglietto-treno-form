const sumbitBtn = document.getElementById("submit-btn");
sumbitBtn.addEventListener("click", function () {
    // Prendere i valori degli inpute convertirli in numeri
    const kmPercorsiInput = document.getElementById("km-percorsi");
    const kmPercorsi = parseInt(kmPercorsiInput.value);

    const etaPasseggeroInput = document.getElementById("eta-passeggero");
    const etaPasseggero = parseInt(etaPasseggeroInput.value);

    console.log(kmPercorsi, etaPasseggero);

    // LOGICA
    // Definisco il prezzo del biglietto che sarà 0.21 * km e creo delle variabili
    // vuote che mi serviranno solamente se l'utente inserirà valori numerici
    const prezzoStandard = (kmPercorsi * 0.21);
    let scontoMinori;
    let scontoOver;
    let prezzoFinale;
    console.log(prezzoStandard);
    // Se l'età dell'utente è < 18 
    //     calcolo il 20% di sconto e lo sottraggo al prezzo standard del biglietto
    if (!isNaN(kmPercorsi) && !isNaN(etaPasseggero)) {
        if (etaPasseggero < 18) {
            scontoMinori = (prezzoStandard * 0.2);
            prezzoFinale = (prezzoStandard - scontoMinori);
            document.getElementById("result").innerHTML = `Il prezzo standard del biglietto è: ${prezzoStandard} ma siccome sei minorenne è stato applicato uno sconto del 20% quindi il costo finale del tuo biglietto è ${prezzoFinale.toFixed(2)} €`;
            // ALTRIMENTI SE l'età è compresa tra 18 e 65
            //     prezzo del biglietto standard
        } else if (etaPasseggero >= 18 && etaPasseggero <= 65) {
            prezzoFinale = prezzoStandard;
            document.getElementById("result").innerHTML = `Il costo finale del tuo biglietto è ${prezzoFinale.toFixed(2)} €`;
            // ALTRIMENTI
            //     calcolo il 40% di sconto e lo sottraggi al prezzo standard del biglietto
        } else {
            scontoOver = (prezzoStandard * 0.4);
            prezzoFinale = (prezzoStandard - scontoOver);
            document.getElementById("result").innerHTML = `Il prezzo standard del biglietto è: ${prezzoStandard} ma siccome hai più di 65 anni è stato applicato uno sconto del 40% quindi il costo finale del tuo biglietto è ${prezzoFinale.toFixed(2)} €`;
        }
        console.log(prezzoFinale.toFixed(2) + " €");
    } else {
        document.getElementById("result").innerHTML = "Attenzione! Devi compilare entrambi i campi";
    }
    
    // Pulisco i campi di input
    kmPercorsiInput.value = "";
    etaPasseggeroInput.value = "";
});

