//pide dni con letra
//comprueba la letra
//alert diciendo ok
//git(index scrpt)
//commi gitpusht
//enviar enlace a repositorio

function pideDNI() {
    let dni = prompt("Introduce dni con laletra");
    
    if (dni.length !== 9) {
        alert("has introducido mal el dni Debe tener 8 nmieros y un letra");
        return;
    }

    for (let i = 0; i < 8; i++) {
        if (isNaN(dni[i])) {
            alert("los primeros 8 caracteres deben ser numeros");
            return;
        }
    }

    let letra = dni[8];
    if (!(/[A-Za-z]/).test(letra)) {
        alert("El ultimo carccter debe ser una un letra");
        return;
    }

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let numero = parseInt(dni.substring(0, 8)); 
    let indice = numero % 23; 
    let letraCorrecta = letras[indice];

    if (letra.toUpperCase() == letraCorrecta) {
        alert("DNI válido. La letra es correcta");
    } else {
        alert(`DNI inválido. La letra debería ser: ${letraCorrecta}.`);
    }
}