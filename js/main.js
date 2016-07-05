/*function anadirtarea (clase){
	var nueva = document.createElement("p");
	var tarea = document.getElementById("tareas");
	var boton1 = document.getElementById("ingtarea");
	var texto = document.createTextNode("texto");
//evetos
boton1.addEventListener("click", agregarTarea);
tarea.addEventListener("click", comprobarInput);

//funciones

var agregarTarea = function(){
	var tarea2 = tarea.value;
	var	nuevaTarea = document.createElement("li");
	var	enlace = document.createElement("a");
	var	contenido = document.createTextNode(tarea);
 
		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}

}	
*/

/*function anadirtarea (contenedor, texto, clase){
	var textinp = document.createElement("p");
	var texto = document.createTextNode(texto);
	textinp.setAttribute("class", clase);
	textinp.appendChild(texto);
	contenedor.appendChild(textinp);
}

function caller(clase){
	
	var tareas = document.getElementById("tareas");
	var input = document.getElementById('textinp');
	if (input.value.length > 0){
		document.createElement("p");
		var texto = document.createTextNode("input.value")
		p.appendChild(texto)
		texto.appendChild(tareas)
	}
	//var texto = tareas.children.length + 1
	//anadirtarea(tareas, texto, clase);
}*/

(function(){
	// Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");
 
	// Funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);
 
		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}
 
		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);
 
		tareaInput.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}
 
	};
	var comprobarInput = function(){
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};
 
	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};
 
	// Eventos
 
	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);
 
	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);
 
	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
}());
 





