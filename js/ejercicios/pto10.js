let numero1 = parseInt (prompt ("ingrese un numero"))

console.log(numero1)

if (numero1 /2){
    document.write("Este numero es divisible por 2: " + (numero1 /2))
}else if (numero1 /3){
    document.write("Este numero es divisible por 3: " + (numero1 /3))
}else if (numero1 /5){
    document.write("Este numero es divisible por 5: " + (numero1 /5))
}else if (numero1 /7){
    document.write("Este numero es divisible por 7: " + (numero1 /7))
}else {
    document.write("Este numero no es divisible")
}