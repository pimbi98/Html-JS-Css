function obtenerNombre() {
    return "pipo";
}

function obtenerApellido(){
    return "scozzatti";
}

function obtenerCompleto(){
    const nombre = obtenerNombre()
    const apellido = obtenerApellido()
    let completo = nombre + ' ' + apellido
    return completo;
}

const nombreCompleto = obtenerCompleto()


alert(nombreCompleto)

console.log(nombreCompleto)