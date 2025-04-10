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