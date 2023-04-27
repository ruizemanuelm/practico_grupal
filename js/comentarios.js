const contenedorLista = document.getElementById('contenedorLista');
const formInputItem = document.getElementById('formInputItem');
let item = document.getElementById('item');
let listaDeItems = [];
formInputItem.addEventListener('submit', agregarItem);

// Cargar la lista de elementos al cargar la página
window.onload = function() {
    cargarLista();
}

function agregarItem(e){
    e.preventDefault();
    listaDeItems.push(item.value);
    formInputItem.reset();
    mostrarLista();
    
    // Guardar la lista de elementos en localStorage
    localStorage.setItem('listaDeItems', JSON.stringify(listaDeItems));
}

function mostrarLista(){
    contenedorLista.innerHTML = '';
    const lista = document.createElement('ul');
    contenedorLista.appendChild(lista);
    listaDeItems.forEach(function (item,index) {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li).innerHTML;
    });
}

function eliminar (index){
    let bandera = confirm(`Seguro desea eliminar el item: ${listaDeItems[index]}?`);
    if(bandera === true){
        listaDeItems.splice(index,1);
        mostrarLista();
        
        // Actualizar la lista de elementos en localStorage después de eliminar un ítem
        localStorage.setItem('listaDeItems', JSON.stringify(listaDeItems));
    }
}

function cargarLista() {
    // Cargar la lista de elementos de localStorage
    if (localStorage.getItem('listaDeItems')) {
        listaDeItems = JSON.parse(localStorage.getItem('listaDeItems'));
        mostrarLista();
    }
}
 