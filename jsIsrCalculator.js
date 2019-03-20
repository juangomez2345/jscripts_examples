
function calcular()
{
 var inferior = 38177;
 var porcentaje = 30;
 var fijo = 7162
 var total = 50000;
 var exedente = (total - inferior);
 var exedenteFinal = ((exedente * porcentaje )/100);
 var descuento = (fijo + exedenteFinal);
 var libre = (total - descuento);

 console.log('final: ' + libre);
}

calcular();



