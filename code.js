let control = 0
let userName = 'userAdmin'
let contrasenia = 'admin123'

function verificar() {
    let clave = document.getElementById('password').value
    let user = document.getElementById('userName').value
    let indexSeleccion = document.getElementById('lenguajes')


    if (indexSeleccion.selectedIndex == 0) {
        alert('Por favor seleccionar una opcion')
    }
    if (clave != contrasenia && userName != user) {
        alert('Clave  y Usuario incorrectos, Intente de nuevo')
        control++
        if (control === 3) {
            alert('Has superado en numero de intentos')
        }
    } else {
        window.open("htpps://www.google.com")
    }



}


function seleccionarLenguaje() {
    let indexSeleccion = document.getElementById('lenguajes')
    document.getElementById('text01').value = indexSeleccion.selectedIndex
    document.getElementById('text02').value = indexSeleccion.options[indexSeleccion.selectedIndex].text
    document.getElementById('text03').value = indexSeleccion.options[indexSeleccion.selectedIndex].value
}

function seleccionarRol() {
    let cantidad = 0
    let rol = ''

    if (document.getElementById('developer').checked) {
        cantidad++
        rol = 'Developer'
    }
    if (document.getElementById('tester').checked) {
        cantidad++
        rol = 'Tester'
    }
    if (document.getElementById('manager').checked) {
        cantidad++
        rol = 'Manager'
    }
    document.getElementById('textMostarRol').value = rol

}

function seleccionarIdioma() {
    let idioma = ''
    if (document.getElementById('español').checked) {
        idioma = 'Español'
    }
    if (document.getElementById('ingles').checked) {
        idioma = 'Ingles'
    }
    document.getElementById('textMostarIdioma').value = idioma
}

function invocarMensaje() {
    if (document.getElementById('mensaje').value.length > 100) {
        alert('Mensaje muy extenso');
    } else {
        alert('Gracias');
    }
}