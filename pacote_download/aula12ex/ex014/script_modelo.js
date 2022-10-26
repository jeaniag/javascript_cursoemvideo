function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var hora =18
    msg.innerHTML = `Agra são ${hora} horas`
    if ( hora >= 0 && hora < 12){
        img.src="pexel_manha_cut.png"
        document.body.style.background="#f1e8da"
    }else if ( hora < 18 ){
        img.src="pexel_tarde_cut.png"
        window.document.body.style.background="#e2967f"
    }else{
        img.src="pexel_noite_cut.png"
        document.body.style.background="#1b4c5b"
    }
}
