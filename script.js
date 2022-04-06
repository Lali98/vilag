function ora(elem){
    let ora = new Date();
    let ido = document.getElementById("ido");
    let v = document.getElementById("varos");
    let varos = {"New_York":"America/New_York",
                "Dallas":"America/Chicago", 
                "Los_Angeles":"America/Los_Angeles", 
                "Moszkva":"Europe/Moscow",
                "Omszk":"Asia/Omsk",
                "Vlagyivosztok":"Asia/Vladivostok",
                "Sydney":"Australia/Sydney", 
                "Alice_Springs":"Australia/Darwin",
                "Perth":"Australia/Perth"};

    ido.innerHTML = ora.toLocaleString("hu-HU", {timeZone: varos[elem.value]});

    let varosnev = elem.value;
    if(varosnev.search('_') != -1){
        varosnev = varosnev.replace('_', ' ');
    }

    v.innerHTML = varosnev;

    setTimeout("ora(document.getElementById('vilag'))", 1000);
}