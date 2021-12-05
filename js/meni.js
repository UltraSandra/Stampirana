var burger = document.getElementsByClassName("burger")[0];
burger.addEventListener('click', meniDole, false);
function meniDole(){
    var padajuciMeni = document.getElementsByTagName("ul")[0];
    if(padajuciMeni.style.display === "none"){
        padajuciMeni.style.display="inline-block";
    }
    else{
        padajuciMeni.style.display="none";
    }
}

var iks = document.getElementsByClassName("iks")[0];
iks.addEventListener('click', meniGore, false);
function meniGore(){
    var padajuciMeni = document.getElementsByTagName("ul")[0];
    if(padajuciMeni.style.display === "none"){
        padajuciMeni.style.display="inline-block";
    }
    else{
        padajuciMeni.style.display="none";
    }
}