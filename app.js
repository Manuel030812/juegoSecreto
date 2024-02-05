let numeroSecreto =0;
let intentos =0;
let listaNumerosSorteados = [];
let numeroMaximo= 10;


function asignarTextoEelemento(elemento,texto){
    let elemnetoHTML = document.querySelector(elemento);
    elemnetoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
    if (numeroSecreto === numeroDeUsuario){
        asignarTextoEelemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        // el usuario no acerto
        if(numeroDeUsuario> numeroSecreto){
            asignarTextoEelemento('p','el numero secreto es menor');

        }else{
            asignarTextoEelemento('p','el numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function reiniciarJuego(){
    //limpiar la caja,
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    condicionesIniciales();
    
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
 
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista 
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoEelemento('p','ya se sortearon todos los numero posibles');
    }else{

    

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }
    }

}
function condicionesIniciales(){
    asignarTextoEelemento('h1','juego del numero secreto');
    asignarTextoEelemento('p',`elije un numero del 1 al ${numeroMaximo}`);
    //generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //reiniciar el numero de intentos
    intentos = 1; 

}

condicionesIniciales();
/*
function recibeNombre(nombre){
    console.long('Hola'+ nombre);
}
function numerodoble(numero){
    numero= numero *2;
    console.long(numero);

}

function promedio(numero,numero2,numero3){
   let resultado= (numero+numero2+numero3)/3;
    console.long(resultado);

}

function numeroMayor(numero,numero2){
  if(numero<numero2){
        console.long(numero2);
    }else{
        console.long(numero);
    }

}
function numerporsi(mumero){
   numero= numero *numero;
    return numero*numero;

}




let listaGenrica = [];
let lenguajesDeProgramacion =['javaScript','C','c++','kotlin','python'];
lenguajesDeProgramacion.push('java');
lenguajesDeProgramacion.push('ruby');
lenguajesDeProgramacion.push('golang');

function muestreLista(){
    console.log(lenguajesDeProgramacion);
}

function muestreListaInversa(){
    for(let i = 10;i>0;i--){
        console.log(lenguajesDeProgramacion[i]);
    }
}
function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesReversoSeparadamente();

function promedioArray(){
    let array=[1,2,3,4];
    let resultado,promedio
    for(let i =0;i <10;i++){
        resultado += array[i];
    }
    promedio= resiltado/array.length;
}

function numGrandeMenor(){
    let array=[1,2,3,4];
    let mayor = 0,menor=0;
    for(let i =0;i <array.length;i++){
        if(mayor < array[i]){
            mayor = array[i];
        }else if(menor> array[i]){
            menor = array[i];
        }
    }
}

function promedioArray(){
    let array=[1,2,3,4];
    let suma
    for(let i =0;i < array.length ;i++){
        suma += array[i];
    }

    
}
function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }
*/