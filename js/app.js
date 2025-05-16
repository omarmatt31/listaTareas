const agregarTarea = (e) =>{
    e.preventDefault()
    const listadoTareas = document.querySelector('.list-group')
    //console.log(listadoTareas)
    const tareaNueva = document.getElementById('tareaNueva').value
    listadoTareas.innerHTML += `                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <div class="text-start flex-grow-1 ms-2 me-3">
                        ${tareaNueva}
                    </div>
                    <button class="btn btn-outline-danger" type="button" id="button-addon2"><i class="bi bi-trash3"></i></button>
                </li> `
    formAgregar.reset()
}

const eliminarTarea = () =>{
    console.log("Elimina una tarea")
}

const formAgregar = document.getElementById('tareaForm')
const btnEliminar = document.querySelector('.list-group')
formAgregar.addEventListener('submit', agregarTarea)
btnEliminar.addEventListener('click', eliminarTarea)