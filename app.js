let listaAmigos = [ ];
let titulo = document.getElementById('tituloH2');

function agregarAmigo() {
    let amigos = document.getElementById('amigo').value; 

    titulo.innerHTML = "Digite el nombre de sus amigos"

    if (amigos !== ""){
        listaAmigos.push(" " + amigos);
        mostrarLista();
        limpiarCaja();
    }else{
        titulo.innerHTML = "Ingresa un nombre válido";
    }

}

function mostrarLista(){
    document.getElementById('listaAmigos2').innerHTML = listaAmigos;
}

function sortearAmigo() {

    let numeroMaximo = listaAmigos.length - 1

    if (listaAmigos.length > 1){
        let aleatorio = numeroAleatorio(0, numeroMaximo)
        titulo.innerHTML = "Tu amigo secreto es: " + listaAmigos[aleatorio];
    }else{
        titulo.innerHTML = "Ingrese más nombres por favor"
    }
}


function limpiarCaja(){
    let cajaVacia = document.getElementById('amigo').value = '';
}


function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
