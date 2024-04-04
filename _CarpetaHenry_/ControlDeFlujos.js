function viajar(destino){
    if (destino === "Brasil") {
       return "Gire a la Izquierda"
    } else if (destino === "Argentina"){
        return "Gire a la Derecha"
    } else {
       return "NOS PERDIMOS"
    }
}

viajar()

function PuedeViajar (edad){
    if (edad >= 18){
        return true
    } else {
        return false
    }
}

PuedeViajar ();
