const listaAmigos = [];

// Captura de elementos del DOM con los nombres correctos
const inputNombre = document.getElementById("amigo"); // Se corrige el ID
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    inputNombre.value = "";
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    lista.innerHTML = "";
    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    resultado.textContent = `🎉 El amigo secreto es: ${listaAmigos[indiceAleatorio]} 🎉`;
}
