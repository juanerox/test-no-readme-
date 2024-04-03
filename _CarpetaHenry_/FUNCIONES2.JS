function cuidadoconelconsolelog(nombre) {
    console.log(nombre);
    return nombre;
}

function otrafuncion() {
    return (
        "El nombre retornado por la función cuidadoconelconsolelog es: " + 
        cuidadoconelconsolelog("juan")
    );
}

function cuidadoconelreturn(nombre){
    console.log(nombre);
    return nombre;
    
}