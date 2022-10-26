console.log("vai começar")
for (let c = 1; c <= 20; c++) {
    console.log(`Passo ${c}`)     
}
console.log("fim")


// faz loop baseado no tamanho do vetor e não do seu conteúdo como no shell
// nesse exemplo a variavel teste será 0,1,2
let valores=['carro', 'bike','navio']
for (let teste in valores){
    console.log(teste)
}
