let numero1 = parseInt (prompt ("ingrese un primer numero"))
let numero2 = parseInt (prompt ("ingrese un segundo numero"))
let numero3 = parseInt (prompt ("ingrese un tercer numero"))

console.log(numero1) 
console.log(numero2) 
console.log(numero3) 

if (numero1 > numero2 && numero3){
    document.write(
        "el primer numero es el mayor: " + numero1
    )
}else if (numero2 > numero3 && numero1){
    document.write(
        "el segundo numero es el mayor: " + numero2
    )
}else if (numero3 > numero1 && numero2){
    document.write(
        "el tercer numero es el mayor: " + numero3
    )
}