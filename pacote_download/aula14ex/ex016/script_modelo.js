function contar(){
    var ini=document.getElementById("txtini")
    var fim=document.getElementById("txtfim")
    let pas=document.querySelector("input#txtpas")
    let res=document.getElementById("res")
 
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML="Impossível contar!"
        window.alert("[ERRO] faltam dados!")
       
    }else{
        res.innerHTML= "Contando... <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if (p <= 0){
            window.alert("Passo invalido! Considerando PASSO=1")
            p=1
        }
        if (i<=f){
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                //UNICODE EMOJI LIST (google)
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            //contagem decrescente
            for (let c = i; c >= f; c -= p) {
                //UNICODE EMOJI LIST (google)
                res.innerHTML += `${c} \u{1F449}`
            }           
        }

        res.innerHTML += `\u{1F3C1}`
    }
}