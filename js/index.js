window.addEventListener('load',start,false);
function start() {
    // $(window).on('scroll', function () {
    //     var pixs = $(document).scrollTop()
    //     pixs = pixs / 40;
    //     $("#cover").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" });     
    // });
    


    $(window).scroll(function(){
        var doVrha = $(document).scrollTop();
        var visinaKaver = $("#cover").height();
        var visinaKaverTekst = $("#coverTekst").height();

        if (doVrha > (visinaKaver - 2*visinaKaverTekst)) {
            $("#coverTekst").hide();
        }
        else{
            $("#coverTekst").show();
        }
        if (doVrha==0) {
            $("#coverTekst").show();
        }
    });
}