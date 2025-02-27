// agrega el valor del boton de la calculadora
function agregar(valor) {
    document.getElementById('pantalla').value += valor
}

function borrar() {
    document.getElementById('pantalla').value = ""
}

function calcular() {
    const valorPan = document.getElementById('pantalla').value
    const resultado = eval(valorPan)
    borrar()
    document.getElementById('pantalla').value += resultado
}