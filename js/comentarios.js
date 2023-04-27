// Obtener el formulario y el campo de comentario de la página
const formInputItem = document.getElementById('formInputItem');
const item = document.getElementById('item');

// Obtener el nombre de la página actual
const currentPage = window.location.pathname.split('/').pop().split('.')[0];

// Obtener la lista de comentarios de LocalStorage o inicializarla como un array vacío
let comments = JSON.parse(localStorage.getItem(currentPage)) || [];

// Cargar los comentarios existentes al cargar la página
window.onload = function() {
    mostrarLista();
}

// Agregar un evento de escucha para el formulario de comentario
formInputItem.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Agregar el comentario a la lista de comentarios
    comments.push(item.value);
    formInputItem.reset();
    
    // Guardar la lista de comentarios en LocalStorage
    localStorage.setItem(currentPage, JSON.stringify(comments));
    
    // Mostrar la lista de comentarios actualizada
    mostrarLista();
});

// Función para mostrar la lista de comentarios
function mostrarLista(){
    const contenedorLista = document.getElementById('contenedorLista');
    contenedorLista.innerHTML = '';
    
    // Crear una lista no ordenada y agregar cada comentario como un elemento de lista
    const lista = document.createElement('ul');
    contenedorLista.appendChild(lista);
    comments.forEach(function(comment) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = comment;
        li.appendChild(p);
        lista.appendChild(li);
    });
}


 