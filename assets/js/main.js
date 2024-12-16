// Berechnung Grund- und Gesamtumsatz
function calculate(event) {
    event.preventDefault()

    // Werte aus dem HTMl-Formular holen
    const size = document.querySelector("#size").valueAsNumber;
    const weight = document.querySelector("#weight").valueAsNumber;
    const age = document.querySelector("#age").valueAsNumber;
    const activity = document.querySelector("#activity").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Ergebnisse definieren
    const result = document.querySelector(".result");

    // Error-Container definieren
    const errorCalculate = document.querySelector(".error_calculate");
    
    // Globalen Wert aus Input-Feld Type "Number" holen
    const inputNumber = document.querySelectorAll(".input_zahl");

    console.log({inputNumber});

    // Input-Wert in String umwandeln
    inputString = size.toString();

    // console.log(inputNumber[0].value);

    // Fehler abfangen wenn Formular nicht ausgefüllt ist
    for (i = 0; i<inputNumber.length; i++) {
        if (!inputNumber[i].value) {
            
        errorCalculate.classList.add("error_text");
        errorCalculate.innerHTML = `<p class="error_text">Bitte füllen Sie alle Felder aus</p>`;

        // Fehlermeldung nach 1 Sekunde wieder ausblenden
        setTimeout(() => {
            errorCalculate.classList.remove("error_text");
            // Fehlermeldung entfernen
            errorCalculate.innerHTML = ""; 
        }, 1500);
        return;
        }
    }

    // Abfrage ob "Male" ausgewählt wurde
    if (gender == "male") {
        
        // Grundumsatz kcal berechnen
        let grundumsatz_male = 66.47 + (13.7 * weight) + (5 * size) - (6.8 * age);

        // Abfrage der ausgewählten Aktivität
        if (activity == "schlafen") {
        ergebnisKcal = grundumsatz_male * 0.95;
        } else
        if (activity == "nur_sitzen_oder_liegen") {
            ergebnisKcal = grundumsatz_male * 1.2;
        } else
        if (activity == "ausschließlich_sitzend") {
            ergebnisKcal = grundumsatz_male * 1.5;
        }
        else
        if (activity == "vorwiegend_sitzende") {
            ergebnisKcal = grundumsatz_male * 1.7;
        }
        else
        if (activity == "überwiegend_gehend_oder_stehend") {
            ergebnisKcal = grundumsatz_male * 1.9;
        }
        else
        if (activity == "körperlich_anstrengend") {
            ergebnisKcal = grundumsatz_male * 2.2;
        }

        // Grundumsatz kJ berechnen
        let grundumsatz_male_kJ = grundumsatz_male * 4.184;

        // Kilojoule berechnen
        ergebnisKJ = ergebnisKcal * 4.184;

        // Hinzufügen der Klassen für kcal und kJoule
        result.classList.add("kcal_text", "kj_text");

        // Werte aus der vorherigen Berechnung löschen
        let kcal = document.querySelector(".kcal_text");
        let kJ = document.querySelector(".kj_text");
        kcal.innerHTML = "";
        kJ.innerHTML = " ";
        
        // Grundumsatz ausgeben
        result.innerHTML += `<p class="kcal_text">${grundumsatz_male.toFixed(2)}</p>`;
        result.innerHTML += `<p class="kj_text">${grundumsatz_male_kJ.toFixed(2)}</p>`;

        // Umsatz nach Aktivität ausgeben
        result.innerHTML += `<p class="kcal_text">${ergebnisKcal.toFixed(2)}</p>`;
        result.innerHTML += `<p class="kj_text">${ergebnisKJ.toFixed(2)}</p>`;
    } else
    // Abfrage ob "Male" ausgewählt wurde
    if (gender == "female") {
        
        // Grundumsatz kcal berechnen
        let grundumsatz_female = 655.1 + (9.6 * weight) + (1.8 * size) - (4.7 * age);

        // Abfrage der ausgewählten Aktivität
        if (activity == "schlafen") {
        ergebnisKcal = grundumsatz_female * 0.9;
        }
        else 
        if (activity == "nur_sitzen_oder_liegen") {
            ergebnisKcal = grundumsatz_female * 1.2;
        }
        else 
        if (activity == "ausschließlich_sitzend") {
            ergebnisKcal = grundumsatz_female * 1.5;
        }
        else 
        if (activity == "vorwiegend_sitzende") {
            ergebnisKcal = grundumsatz_female * 1.7;
        }
        else 
        if (activity == "überwiegend_gehend_oder_stehend") {
            ergebnisKcal = grundumsatz_female * 1.9;
        }
        else 
        if (activity == "körperlich_anstrengend") {
            ergebnisKcal = grundumsatz_female * 2.2;
        }

        // Grundumsatz kJ berechnen
        let grundumsatz_female_kJ = grundumsatz_female * 4.184;

        // Kilojoule berechnen
        ergebnisKJ = ergebnisKcal * 4.184;

        // Hinzufügen der Klassen für kcal und kJoule
        result.classList.add("kcal_text", "kj_text");

        // Werte aus der vorherigen Berechnung löschen
        let kcal = document.querySelector(".kcal_text");
        let kJ = document.querySelector(".kj_text");
        kcal.innerHTML = "";
        kJ.innerHTML = " ";
        
        // Grundumsatz ausgeben
        result.innerHTML += `<p class="kcal_text">${grundumsatz_female.toFixed(2)}</p>`;
        result.innerHTML += `<p class="kj_text">${grundumsatz_female_kJ.toFixed(2)}</p>`;

        // Umsatz nach Aktivität ausgeben
        result.innerHTML += `<p class="kcal_text">${ergebnisKcal.toFixed(2)}</p>`;
        result.innerHTML += `<p class="kj_text">${ergebnisKJ.toFixed(2)}</p>`;
    }
}

// Mobiles Menü ausgeben
function showMenu () {
    const menu = document.querySelector(".mobile_menu");
    menu.classList.toggle("show_mobile_menu");
}

// Erste Ausgabe der monatlichen Kosten
showPriceMonth();

// Berechnung der monatlichen Preise
function costTimeMonth(event) {
    event.preventDefault()
    let btnMonth = document.querySelector("#btn_month");
    let btnYear = document.querySelector("#btn_year");

    // Hinzufügen bzw. Entfernen der Klasse "btn_aktiv" für die Buttons bei der Plan-Auswahl
    btnMonth.classList.add("btn_aktiv");
    btnYear.classList.remove("btn_aktiv");
    
    // Ausgabe der monatlichen Kosten nach Auswahl "Monthly"
    showPriceMonth();
}

// Berechnung der jährlichen Preise
function costTimeYear(event) {
    event.preventDefault()
    let btnMonth = document.querySelector("#btn_month");
    let btnYear = document.querySelector("#btn_year");
    let price = document.querySelectorAll(".price");

    // Hinzufügen bzw. Entfernen der Klasse "btn_aktiv" für die Buttons bei der Plan-Auswahl
    btnMonth.classList.remove("btn_aktiv");
    btnYear.classList.add("btn_aktiv");

    // Wert für Monatsbeträge festlegen
    const priceArrayYear = 
    ["$294/<span>year</span>", "$474/<span>year</span>", "$594/<span>year</span>"];
    
    // Ausgabe in HTML der Beiträge nach jährlichen Auswahl
    price[0].innerHTML = `<h3>${priceArrayYear[0]}</h3>`;
    price[1].innerHTML = `<h3>${priceArrayYear[1]}</h3>`;
    price[2].innerHTML = `<h3>${priceArrayYear[2]}</h3>`;
}


function showPriceMonth() {
        // Wert für Monatsbeträge festlegen
        const priceArrayMonth = 
        ["$49/<span>month</span>", "$79/<span>month</span>", "$99/<span>month</span>"];
        
        let price = document.querySelectorAll(".price");
    
        // Ausgabe in HTML der Monatsbeiträge nach monatlichen Auswahl
        price[0].innerHTML = `<h3>${priceArrayMonth[0]}</h3>`;
        price[1].innerHTML = `<h3>${priceArrayMonth[1]}</h3>`;
        price[2].innerHTML = `<h3>${priceArrayMonth[2]}</h3>`;
}