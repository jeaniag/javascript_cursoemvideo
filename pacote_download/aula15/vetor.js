let valores = [8,1,7,4,2,9]
valores.push(7)

for (c=0; c< valores.length; c++){
    console.log(`a posição ${c} tem valor ${valores[c]}`)
}
console.log("")
for (let pos in valores){
    console.log(`a posição ${pos} tem valor ${valores[pos]}`)
}
console.log("")
index=valores.indexOf(7)
console.log(`O número 7 está na posição ${index}`)