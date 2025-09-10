// Lista para almacenar los nombres de los amigos
const listaAmigos = [];

// Referencias a los elementos del DOM
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        inputAmigo.focus();
        return
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

// ...existing code...

// Referencia al ul de resultados
const ulResultado = document.getElementById("resultado");

// Función para asignar amigos secretos
function sortearAmigo() {
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; // Limpia resultados anteriores

    if (listaAmigos.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No hay amigos para sortear.";
        ulResultado.appendChild(li);
        return;
    }

    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado
    const li = document.createElement("li");
    li.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    ulResultado.appendChild(li);


