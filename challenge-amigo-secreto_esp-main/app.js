// Lista para almacenar los nombres de los amigos
const listaAmigos = [];

// Array para almacenar los amigos ya sorteados
const amigosSorteados = [];

// Referencias a los elementos del DOM
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        inputAmigo.focus();
        return;
    }
    listaAmigos.push(nombre);
    mostrarListaAmigos();
    inputAmigo.value = "";
    inputAmigo.focus();
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    ulListaAmigos.innerHTML = "";
    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ulListaAmigos.appendChild(li);
    });
}

// Referencia al ul de resultados
const ulResultado = document.getElementById("resultado");

// Función para asignar amigos secretos
function sortearAmigo() {
    ulResultado.innerHTML = ""; // Limpia resultados anteriores

    if (listaAmigos.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No hay amigos para sortear.";
        ulResultado.appendChild(li);
        return;
    }

    if (amigosSorteados.length === listaAmigos.length) {
        const li = document.createElement("li");
        li.textContent = "Todos los amigos ya han sido sorteados.";
        ulResultado.appendChild(li);
        return;
    }

    let indiceAleatorio;
    let amigoSorteado;

    // Buscar un amigo que no haya sido sorteado aún
    do {
        indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        amigoSorteado = listaAmigos[indiceAleatorio];
    } while (amigosSorteados.includes(amigoSorteado));

    amigosSorteados.push(amigoSorteado);

    // Mostrar el resultado
    const li = document.createElement("li");
    li.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    ulResultado.appendChild(li);
}
