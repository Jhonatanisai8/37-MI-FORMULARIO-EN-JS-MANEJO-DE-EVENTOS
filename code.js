let control = 0
let userName = 'userAdmin'
let contrasenia = 'admin123'

function verificar() {
    let clave = document.getElementById('password').value
    let user = document.getElementById('userName').value

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