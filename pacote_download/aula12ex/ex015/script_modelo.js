function verificar(){
    var data=new Date()
    var ano=data.getFullYear()
    var fano=document.getElementById("txtano")
    var res=document.querySelector("div#res")

    if (fano.value.length == 0 || fano.value > ano){
        window.alert("Verifique os dados e tente novamente")
    }else{
        var fsex=document.getElementsByName('radsex')
        var idade=ano-Number(fano.value)
        //res.innerHTML=`Idade calculada ${idade}`
        var genero=''
        var img=document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero="homem"
            if (idade >=0 && idade <12){
                //criança 
                img.setAttribute('src','pexels_criança_homem_cut.jpg')   
            }else if (idade < 21 ){
                //jovem
                img.setAttribute('src','pexels_jovem_homem_cut.jpg') 
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','pexels_adulto_homem_cut.jpg') 
            }else{
                //idoso
                img.setAttribute('src','pexels_idoso_homem_cut.jpg') 
            }
        }else if (fsex[1].checked){
            genero="mulher"
            if (idade >=0 && idade <12){
                //criança 
                img.setAttribute('src','pexels_criança_mulher_cut.jpg')   
            }else if (idade < 21 ){
                //jovem
                img.setAttribute('src','pexels_jovem_mulher_cut.jpg') 
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','pexels_adulta_mulher_cut.jpg') 
            }else{
                //idoso
                img.setAttribute('src','pexels_idosa_mulher_cut.jpg') 
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${genero} e idade ${idade}. <br><br>`
        res.appendChild(img)
    }
}