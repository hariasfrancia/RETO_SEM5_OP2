// “El náufrago satisfecho” ofrece hamburguesas sencillas, dobles y triples,las cuales tienen un costo de $20.00, $25.00 y $28.00 respectivamente. La empresa acepta tarjetas de crédito con un cargo de 5 % sobre la compra.
// Suponiendo que los clientes adquieren sólo un tipo de hamburguesa, realice un algoritmo para determinar cuánto debe pagar una persona por N hamburguesas.

function Hamburguesa(){
    var precHam;
    
    var tipoHam = +prompt("Ingrese tipo de hamburguesa: (1: SENCILLA - S/.20.00 | 2:DOBLE - S/.25.00 | 3:TRIPLE - S/. 28.00");
    var numHam = +prompt("Ingrese cantidad a comprar: ");

    switch(tipoHam){
        case 1: precHam = 20.00*numHam; break;
        case 2: precHam = 25.00*numHam; break;
        case 3: precHam = 28.00*numHam; break;
        default: console.log("Error, ingrese un valor dentro de las 3 categorías"); break;
    }
    console.log("Total de la compra es: S/."+precHam);
    
    var tipoPago = +prompt("Paga con Tarjeta: (1:SI | 2:NO)");
    
        if(tipoPago == 1){
            precHam = precHam - (precHam*0.05);
            console.log("Se Aplica un sobrecargo del 5%: "+precHam);
        }else if(tipoPago == 2){
            console.log("No hay descuento.")
        }
}
Hamburguesa();
