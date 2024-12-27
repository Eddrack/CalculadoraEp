var segundoTexto = false;
var operador = "";


function sumar() {
    segundoTexto = true;
    operador = "+";

}
function restar() {
    segundoTexto = true;
    operador = "-";
    /**/
}
function multiplicar() {
    segundoTexto = true;
    operador = "*";
    /**/
}
function dividir() {
    segundoTexto = true;
    operador = "/";
    /**/
}

function Escribir(numbutton) {
    if (!segundoTexto) {
    txtNum1.value += numbutton;
    }
    if (segundoTexto) {
        txtNum2.value += numbutton;
    }
}

function operacion() {
    switch (operador) {
        case "+":
            alert("El Resultado es = " + (Number(txtNum1.value) + Number(txtNum2.value)));
            break;
        case "-":
            alert("El Resultado es = " + (Number(txtNum1.value) - Number(txtNum2.value)));
            break;
        case "*":
            alert("El Resultado es = " + (Number(txtNum1.value) * Number(txtNum2.value)));
            break;
        case "/":
            alert("El Resultado es = " + (Number(txtNum1.value) / Number(txtNum2.value)));
            break;
        default: 
            break;
    }
}

function borrarContenido() {
    txtNum1.value = '';
    txtNum2.value = '';
    segundoTexto = false;
    operador = "";
}

