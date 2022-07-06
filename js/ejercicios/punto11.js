let numero1 = parseInt (prompt ("Ingrese un numero"))

console.log (numero1)

if (numero1 %2){
    document.write("Este numero es divisible por 2: " + (numero1 %2))
}
if (numero1 %3){
    document.write(" Este numero es divisible por 3: " + (numero1 %3))
}
if (numero1 %5){
    document.write(" Este numero es divisible por 5: " + (numero1 %5))
}
if (numero1 %7){
    document.write(" Este numero es divisible por 7: " + (numero1 %7))
}else {
    document.write(" Este numero no es divisible")
}