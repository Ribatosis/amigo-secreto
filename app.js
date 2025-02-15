let listaAmigos = [ ];
let titulo = document.querySelector('h2');

function agregarAmigo() {
    let amigos = document.getElementById('amigo').value; 

    if (amigos !== ""){
        listaAmigos.push(" " + amigos);
        mostrarLista();
        limpiarCaja();
    }else{
        alert("Ingresa un nombre válido")
    }

}

function mostrarLista(){
    document.getElementById('listaAmigos2').innerHTML = listaAmigos;
}

function limpiarCaja(){
    let cajaVacia = document.getElementById('amigo').value = '';
}
