const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
    // Prendo gli input inseriti dall'utente
    const kmPercorsiInput = document.getElementById("km-percorsi");
    const kmPercorsi = parseInt(kmPercorsiInput.value);

    const etaPasseggeroInput = document.querySelector("#eta-passeggero");
    const etaPasseggero = etaPasseggeroInput.value;

    const nomePasseggeroInput = document.getElementById("nome-passeggero");
    const nomePasseggero = nomePasseggeroInput.value;

    console.log(kmPercorsi, etaPasseggero, nomePasseggero);


    // LOGICA
    // Definisco il prezzo del biglietto che sarà 0.21 * km e creo delle variabili

    const prezzoStandard = (kmPercorsi * 0.21);
    let scontoMinori;
    let prezzoFinale;
    console.log(prezzoStandard);
    // Eseguo il calcolo solamente se l'utente mi fornisce i 3 input che ho richiesto
    if (!isNaN(kmPercorsi) && (etaPasseggero !== 0) && (nomePasseggero !== "")) {
        if (etaPasseggero === 2) {
            //     calcolo il 20% di sconto e lo sottraggo al prezzo standard del biglietto solo se il passeggero è minorenne
            scontoMinori = (prezzoStandard * 0.2);
            prezzoFinale = (prezzoStandard - scontoMinori);
            document.getElementById("prezzo").innerHTML = `${prezzoFinale} €`;
            document.getElementById("tipo-biglietto").innerHTML = "Biglietto scontato";
            document.getElementById("pass").innerHTML = nomePasseggero;
            const rndNumber = Math.floor(Math.random() * 10) + 1;
            console.log(rndNumber);
            document.getElementById("num-carrozza").innerHTML = rndNumber;
            const rndCp = Math.floor(Math.random() * 99999) + 999;
            console.log(rndCp);
            document.getElementById("cp").innerHTML = rndCp;
        } else {
            // Se il passeggero non è minorenne paga la tariffa standard
            document.getElementById("prezzo").innerHTML = `${prezzoFinale} €`;
            document.getElementById("tipo-biglietto").innerHTML = "Biglietto standard";
            document.getElementById("pass").innerHTML = nomePasseggero;
            const rndNumber = Math.floor(Math.random() * 10) + 1;
            console.log(rndNumber);
            document.getElementById("num-carrozza").innerHTML = rndNumber;
            const rndCp = Math.floor(Math.random() * 99999) + 999;
            console.log(rndCp);
            document.getElementById("cp").innerHTML = rndCp;
        }
    } else {
        // Se l'utente non compila tutti e 3 i campi riceverà il messaggio di avviso
        document.getElementById("errore").innerHTML = "Attenzione! Devi compilare tutti i campi";
    }
});

const annullationBtn = document.getElementById("annulla");
annullationBtn.addEventListener("click", function () {
    // Pulisco i campi di input
    nomePasseggeroInput.value = "";
    kmPercorsiInput.value = "";
    etaPasseggeroInput.value = 0;
});