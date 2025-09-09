// Array para almacenar los nombres
let listaAmigos = [];

// Acceder a los elementos del DOM
const inputAmigo = document.getElementById('amigo');
const botonSortear = document.getElementById('buttonAdd');
const listaUL = document.getElementById('listaAmigos');
const ulResultado = document.getElementById('resultado');

// Añadir un amigo a la lista 
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre !== '') {
        listaAmigos.push(nombre);

        const nuevoLI = document.createElement('li');
        nuevoLI.textContent = nombre;
        listaUL.appendChild(nuevoLI);

        inputAmigo.value = '';

    } else {
        alert('Por favor, introduce un nombre.');
    }
}

// Tecla Enter añada nombre
inputAmigo.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo(); 
    }
});



//Evento de clic en el botón Sortear
botonSortear.addEventListener('click', function() {
    if (listaAmigos.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        const nombreGanador = listaAmigos[indiceAleatorio];

        ulResultado.innerHTML = `<li>¡El ganador es: ${nombreGanador}!</li>`;
        
        listaAmigos = [];
        listaUL.innerHTML = '';
    } else {
        ulResultado.innerHTML = '<li>No hay nombres en la lista para sortear.</li>';
    }
});


