function CondicionCompleja(num){
    if (num >9 && num % 2 === 0 || num ===3) console.log(true)  // si el num es mayor a 9 y num su divicion es = a 0 o num es = a 3, console.log true, de lo contrario false 
    else console.log(false)
}

CondicionCompleja(10)
CondicionCompleja(3)
CondicionCompleja(6)
CondicionCompleja(5)