// FUNCIÓN: realiza DESCUENTO SI SOS SOCIO

function precio_a_pagar(monto, socio) {
    if (socio == "Si" || socio == "si") {
      let precio_si = monto * 0.7;
    return precio_si;
    } else if (socio == "No" || socio == "no") {
    let precio_no = monto;
    return precio_no;
    }
}
//SE CREA OBJETO//

class Producto {
    constructor ( nombre , precio , stock){
        this.precio = nombre;
        this.precio = precio;
        this.stock = stock;
}
get_datos(){
    console.log("")
    console.log("Nombre: ", this.nombre)
    console.log("Precio: ", this.precio)
    console.log("Stock: ", this.stock)
    console.log("")
}
}

//ARRAY - LISTA DE PRODUCTOS//

let lista_de_productos =[ ];

lista_de_productos.push(new Producto("Balanceado", 2000, 8));
lista_de_productos.push(new Producto("Cucha", 8000, 12));
lista_de_productos.push(new Producto("Medicamento", 3000, 22));

//INPUT - VERIF. CLIENTE //

let socio = prompt(
    "Ingresar si es Socio: Si/No. Socios tienen beneficio de 30% de descuento."
    )

// VERIFICADOR DE SOCIO
while (
    socio != "Si" &&
    socio != "si" && 
    socio != "No" && 
    socio != "no") {
    alert(socio);
}

// BUCLE para COMPRAS

let compra = prompt(
    "Escriba lo que quiera comprar: Balanceado $2.000, Cucha $8000 o Medicamento $3.000. Al finalizar escriba Fin."
    );
    let cantidad_balanceado = 0;
    let cantidad_cucha = 0;
    let cantidad_medicamento = 0;
    let precio_total_balanceado = precio_a_pagar(lista_de_productos[0].precio, socio);
    let precio_total_cucha = precio_a_pagar(lista_de_productos[1].precio, socio);
    let precio_total_medicamento = precio_a_pagar(lista_de_productos[2].precio, socio);

while (compra != "Fin" && compra != "fin") {
    if (
        compra == "Balanceado" || 
        (compra == "balanceado" && lista_de_productos[0].stock>0)
        ) {
            cantidad_balanceado++;
            lista_de_productos[0].stock--;
            } 
    else if (
        compra == "Cucha" ||
        (compra == "cucha" && lista_de_productos[1].stock>0)
        ) {
            cantidad_cucha++;
            lista_de_productos[1].stock--;
            }
    else if (
        compra == "Medicamento" ||
        (compra == "medicamento" && lista_de_productos[2].stock>0)
        ) {
            cantidad_medicamento++;
            lista_de_productos[2].stock--;
    }
    else {
    alert("Ingrese valor");
    }
compra = prompt(
    "Desea agregar: Balanceado $2.000, Cucha $8.000 o Medicamento $3.000. Al finalizar la compra escriba Fin"
);
}

// CÁLCULO COMPRAS

if (cantidad_balanceado > 0) {
    console.log("Compraste " , cantidad_balanceado , " balanceado y gastaste $" , cantidad_balanceado * precio_total_balanceado
);
}
if (cantidad_cucha > 0) {
    console.log( "Compraste ", cantidad_cucha , " cucha/s y gastaste $" , cantidad_cucha * precio_total_cucha
);
}
if (cantidad_medicamento > 0) {
    console.log( "Compraste " , cantidad_medicamento , " medicamento/s y gastaste $" , cantidad_medicamento * precio_total_medicamento
);
}
let cantidad_total =
    cantidad_balanceado * precio_total_balanceado +
    cantidad_cucha * precio_total_cucha +
    cantidad_medicamento * precio_total_medicamento;

if (cantidad_total != NaN) {
console.log("Gastaste en total $", cantidad_total);
}

// CONTROL INTERNO POR CONSOLA STOCK FALTANTE

let stock_faltante =  lista_de_productos.filter((Producto) => Producto.stock == 0);

for (let Producto of stock_faltante) {
    console.log("Hay que comprar stock de " + Producto.nombre);
}
