function ora(elem){
    let ora = new Date();
    let ido = document.getElementById("ido");
    let varos = {"New_York":"America/New_York",
                "Dallas":"America/Chicago", 
                "Los_Angeles":"America/Los_Angeles", 
                "Moszkva":"Europe/Moscow",
                "Omszk":"Asia/Omsk",
                "Vlagyivosztok":"Asia/Vladivostok",
                "Sydney":"Australia/Sydney", 
                "Alice_Springs":"Australia/Darwin",
                "Perth":"Australia/Perth"};

    for(let i = 0, n = Object.keys(varos).length; i < n; i++){
        ido.innerHTML = ora.toLocaleString("hu-HU", {timeZone: varos[elem.value]});
    }
}