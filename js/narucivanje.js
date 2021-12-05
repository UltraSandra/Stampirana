var dugme = document.getElementById("submit");
dugme.addEventListener("click", potvrda);

function potvrda(){

    var odg = confirm("Da li ste sigurni da želite da poručite?");
    if(odg == true) {
        napraviNarudzbinu();
    }
    else{
        alert("Niste potvrdili narudžbinu!!!");
    }
}

function napraviNarudzbinu(){
    
    var nizPodataka = document.getElementsByTagName("input");
    var imePrezime = nizPodataka[0].value + " " + nizPodataka[1].value;
    var email = nizPodataka[2].value;
    var adresa = nizPodataka[3].value;
    var telefon = nizPodataka[4].value;
    
    poruka = "Poštovani/poštovana " + imePrezime + ", uspešno ste naručili vaš model, očekujte isporuku na adresu: " + adresa + ". Ako bude problema obratićemo vam se na:" + "\n  email: " + email + "\n  telefon:" + telefon;

    alert(poruka);
}