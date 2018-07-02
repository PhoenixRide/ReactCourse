function calculoPrestamo()
{

//Variables utilizadas en las fórmulas 

var importe=document.forms[0].importe.value*1;
var interest=document.forms[0].rate.value*1;

var t;

//Bucle para seleccionar las cuotas

for (i=0; i<document.forms[0].term.options.length; i++)

{

if (document.forms[0].term.options[i].selected)
t = document.forms[0].term.options[i].value*1;
}

//Estas son las fórmulas para realizar el cálculo del total a pagar y total por cuota


var totalPorPagar= importe * Math.pow(( 1  + interest/100), t);

var cantidadPorCuota = totalPorPagar / t;


// funcion para que solo me tome dos decimales 
function intlRound(numero, decimales = 2, usarComa = false) {
    var opciones = {
        maximumFractionDigits: decimales, 
        useGrouping: false
    };
    usarComa = usarComa ? "es" : "en";
    return new Intl.NumberFormat(usarComa, opciones).format(numero);
}


var cantidadPorCuotaRedondeado = intlRound(cantidadPorCuota);

var totalPorPagarRedondeado = intlRound(totalPorPagar)


//Muestro el resultado de lo pagado por cada cuota

document.getElementById("cuotaMensual").innerHTML=cantidadPorCuotaRedondeado;

//Muestro el resultado del monto total a pagar del prestamo

document.getElementById("total").innerHTML=totalPorPagarRedondeado;

}