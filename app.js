/*simulacion de una tienda con carrito de compras sumando articulos, pudiendo volver a ver el monto acumulado y 
pago en cuotas validando que sea entre 1 y 12 pagos 
y validando que no pueda pagar si su carrito esta vacio
 */

function calcCuotas(cant,carro) {
    carro=carro/cant
    return carro
}

let opcion=0
let total_carrito=0
let opCuotas=0
let cuotas=0

const carro=[]

class Producto{
    constructor(id,nombre,precio){
        this.id=id,
        this.nombre=nombre,
        this.precio=precio
    }
    mostrarProducto(){
        console.log(`Articulo:${this.nombre} Precio:${this.precio}`)
    }
}

const collar= new Producto(1,"Collar",1000)
const medias= new Producto(2,"Medias",2000)
const pulsera= new Producto(3,"pulsera",1500)
const anillo= new Producto(4,"Anillo",500)


alert("Bienvenido a - Primer pre entrega JS")
let nombre=prompt("Ingrese su nombre: ")

do{
    opcion=parseInt(prompt(`Hola ${nombre} Ingrese la opcion del articulo:
    1- Collar $1000
    2- Medias $2000
    3- Pulsera $1500
    4- Anillo $500
    --------------------------
    5- Ver carrito
    6- Pagar 
    0- Salir`))

    switch(opcion){
        case 1:
            carro.push(collar)
            total_carrito+=collar.precio
            alert(`
            +1 Collar
            +$1000 
            Su carrito tiene un total de $ ${total_carrito}`)
            break
        case 2:
            carro.push(medias)
            total_carrito+=medias.precio
            alert(`
            +1 Medias
            +$2000 
            Su carrito tiene un total de $ ${total_carrito}`)
            break
        case 3: 
            carro.push(pulsera)           
            total_carrito+=pulsera.precio
            alert(`
            +1 Pulsera
            +$1500
            Su carrito tiene un total de $ ${total_carrito}`)
            break
        case 4: 
            carro.push(anillo)          
            total_carrito+=anillo.precio
            alert(`
            +1 Anillo
            +$500
            Su carrito tiene un total de $ ${total_carrito}`)
            break
        case 5:
            alert(`
            El total es de: $ ${total_carrito}
            Cantidad de articulos: ${carro.length}
            * Puede ver detalladamente el carrito unicamente por consola`)
            for(let articulo of carro){
                console.log(`
                Articulo: ${articulo.nombre} 
                Precio: ${articulo.precio} 
                Id: ${articulo.id}`)
            }
            
            break
        case 6:
            if (total_carrito>0){
                opCuotas=parseInt(prompt(`Ingrese la cantidad de cuotas, entre 1 y 12 pagos `))
                while(opCuotas<=0 || opCuotas>12){
                    opCuotas=prompt(`
                    Error!!!
                    Ingrese un numero entre 1 y 12:`)
                }
                cuotas=calcCuotas(opCuotas,total_carrito)
                alert(`El total de la compra es $ ${total_carrito} en ${opCuotas} pagos de $ ${cuotas}
                Proximamente le enviaremos su factura
                Gracias por su compra. `)
                opcion=0
            }else{
                alert(`Primero debe agregar productos a su carrito`)
            }
            break
        case 0:
            if (total_carrito==0){
                alert("Gracias por visitarnos")
            }else
            {
                alert(`El total de su compra es: ${total_carrito}`)
            }
            break
        default:
            alert("Opcion invalida")
    }
            
}while(opcion!=0)       