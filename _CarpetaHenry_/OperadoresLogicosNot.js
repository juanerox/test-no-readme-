function negacion(permiso){
    if (permiso) console.log('Tiene permiso') //si permiso es true mostrara el mensaje,si es false no.
}


negacion(false)
negacion(true)

function negacion(permiso){
    if (!permiso) console.log('Tiene permiso') //si permiso es false motrara el mensaje,si es true no. 
}

negacion(false)
negacion(true)

function negacion(permiso){
    if (permiso === true) console.log('Tiene permiso') //si el permiso es igual a true mostrara el mensaje 
}

negacion(false)
negacion(true)

function negacion(permiso){
    if (permiso !== true) console.log('Tiene permiso') //si el valor es diferente a true no muestra el mensaje 
}

negacion(false)
negacion(true)