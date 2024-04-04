function MayorYMenorYPar(num){
    if (num > 5 && num < 10 && num % 2 === 0 ) console.log(true); //Si el numero es mayor a 5 y menor a 10 log true y el resto de dividir el numero entre dos sea cero, esto verifica si es par o inpar  
    else console.log(false); // en caso contrario log false
}
MayorYMenorYPar(7);
MayorYMenorYPar(8);
//se puede agregar las condiciones que quieras, si no se cumple alguna el resultado sera false