//Lisätään napin kuuntelijafunktio
document.querySelector("#ok").addEventListener("click", addNote);

//haetaan dokumentin elementit
let output = document.querySelector("#messages");

let checkbox = document.getElementById("important");

let today = new Date();
    let day = today.getDate().toString().padStart(2, "0");
    let month = (today.getMonth() + 1).toString().padStart(2, "0");
    let year = today.getFullYear().toString().slice(-2);
    let formattedDate = `${day}.${month}.${year}`;
    console.log(formattedDate);

function addNote() {
    //Luodaan otsikko johon tulee nimi-kentästä nimi ja lisäksi aikaleima
    let h3 = document.createElement("h3");

    let p = document.createElement("p");
    p.textContent = formattedDate + " " + nimi.value + ": " + viesti.value;

    //onko checkboxia painettu, jos on niin lisätään important muotoilu
    if(checkbox.checked) {
        h3.classList.add("important");
        p.classList.add("important");
    }

    //kaikki elementit bodyn sisälle
    output.append(h3, p, document.createElement("hr"));

    document.getElementById("nimi").value = "";
    document.getElementById("viesti").value = "";
}