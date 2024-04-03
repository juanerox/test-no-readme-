// operaciones de comparacion 
console.log (4 < 7); 
console.log (4 < 1 );
console.log (4 > 4); 
console.log (4 == 7);
//Igualdad vs igualdad estricta 
console.log (3 == 3); 
console.log (3 === 3); 
console.log (3 == "3"); 
console.log (3 === "3");
console.log (7 == "7");
console.log (7 === "7");
//Asignación y asociatividad
var a = 1; // se ejecuta primero a=b lo que sobre escribe el valor de a *2
var b = 2; 
var c = a = b;
console.log (c); // por lo tanto c es igual que A Y B, C es =2