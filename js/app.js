let numeroAleatorio = 0;

function generarNumeroAleatorio() {
    console.log("Desde generar número")
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    console.log(numeroAleatorio);
}

function consultarNumero() {
    let alertMsg = document.getElementById("alert-msg");
    let alertWindow = document.querySelector("#alert-window")
    //Buscar el valor de input
    console.log("Desde consultar el número")
    let numeroIngresado = parseInt(document.getElementById('numeroIngresado').value);
    console.log(numeroIngresado);
    console.log(numeroAleatorio);
    if (numeroIngresado === numeroAleatorio) {
        alertMsg.innerHTML = "<h2>Lo lograste</h2>"
        console.log(alertMsg)
        alertWindow.className = "alert alert-success"
    } else if (numeroIngresado > numeroAleatorio) {
        alertMsg.innerHTML = "<h2>Ingresaste un número mayor.</h2> Casi lo logras"
        console.log(alertMsg)
        alertWindow.className = "alert alert-warning"
    } else {
        alertMsg.innerHTML = "<h2>Ingresaste un número menor.</h2> Casi lo logras"
        console.log(alertMsg)
        alertWindow.className = "alert alert-warning"
    }
}