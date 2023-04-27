let modal = document.getElementById(`modal`);
let btnCerrar = document.getElementById(`btnCerrar`).addEventListener(`click`, cerrarModal);
function cerrarModal(){ 
    modal.close()
    //con el metodo close podes cerrar hasta con esc
}
setTimeout(() => {
    modal.showModal()
}, 6000);


