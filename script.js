function abrirmenu(){
    let BarraMenuAberto = document.getElementById('barra-menu');
    let desfoqueFundo = document.getElementsByClassName('main-title');
    
    if (BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "150px";
        BarraMenuAberto.style.height = "285px";

    }else{
        BarraMenuAberto.style.width = "0px";
        BarraMenuAberto.style.height = "0px";
    }
}