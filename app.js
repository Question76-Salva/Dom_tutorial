/**
 *       ==========================
 *       === Eliminar elementos ===
 *       ==========================
 */


// Obtener elemento
const row = document.querySelector('.row');

// Obtener formulario
const form = document.getElementById('course-form');

// Variable para el ID de cada tarjeta
let idCard=1;

// Activar evento
form.addEventListener('submit', function (e) {

    // Desactivar refresco automatico
    e.preventDefault();

    // Obtener valores de los inputs del formulario
    let title = document.getElementById('title-form').value;
    let description = document.getElementById('description-form').value;

    // Crear card
    create_card(title, description);
    idCard++;
	
	// Resetear formulario al enviar MUY IMPORTANTE
	form.reset();
})



function create_card(title, description) {

    // Crear template HTML dinámicamente
    let html = `<div class="col-sm-6 col-md-4" id="${idCard}">
    <div class="thumbnail">
        <div class="caption">
            <h3 id="title_card"> ${title} </h3>
            <p id="description_card"> ${description} </p>
            <p>
                <a href="#" class="btn btn-danger" onclick="delete_card(${idCard})" >Eliminar</a>
            </p>
        </div>
    </div>
</div>  
         
    `;

    // Colocarlo dentro del div "row"
    // += -> Muy importante para actualizarlo
    row.innerHTML += html;
    /** Cambiado por un evento onclick en el Html */
    // Añadimos evento a todo el div "row" para poder eliminarlo al hacer click en su botón
    //row.addEventListener('click',delete_card);
    
}

function delete_card(id) {

    // Comprobación
    // console.log('Carta a eliminar');


    // Para poder elminar un elemento necesitamos 
    // el PADRE (div .row) y el ID del elemento a eliminar   
    var padre = document.getElementById('padre');
    var hijo = document.getElementById(id);
    var garbage = padre.removeChild(hijo);
   

}