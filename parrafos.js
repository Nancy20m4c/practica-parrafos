
/* DECLARAMOS VARIABLES DE ELEMENTOS HTML */
var panelAlerta = document.getElementById('panel-alerta');
var botonAlerta = document.getElementById('boton-alerta');
var panelPrincipal = document.getElementById('panel-principal');
var insertarParrafo = true;
var tiposAlerta = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

/**
 *  Funcion obtenida con ayuda de la doc de Bootstrap.
 * 
 * @param {*} mensaje - Mensaje de la alerta.
 * @param {*} tipoAlerta - tipo de alerta bootstrap = primary, secondary, success, danger, warning, info, light, dark" role="alert">
 */
function alert(mensaje, tipoAlerta) {
    // creamos elemento div
    var alerta = document.createElement('div');
    // Añadimos una clase panel-alerta al div: alerta
    alerta.className = 'panel-alerta';
    // Añadimos estructura html de la  alerta (del ejemplo web de bootstrap) al elemento div: alerta 
    alerta.innerHTML = '<div class="alert alert-' + tipoAlerta + ' alert-dismissible" role="alert">' + mensaje + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    // Añadimos el elemento div al panel de alertas
    panelAlerta.append(alerta);
  
    // variable que nos permite controlar si debemos insertar o borrar los elementos.
    if (insertarParrafo) {
        // cremos elemento p
        var parrafo1 = document.createElement('p');
        var parrafo2 = document.createElement('p');    
        // añadimos una clase a los parrafos
        parrafo1.className = 'parrafo-dinamico';
        parrafo2.className = 'parrafo-dinamico';
        // insertamos texto a los parrafos
        parrafo1.innerText ='primer parrafo';
        parrafo2.innerText = 'segundo parrafo';
        // añadimos los parrafos al div: panel-principal
        panelPrincipal.append(parrafo1);
        panelPrincipal.append(parrafo2);
        // marcamos a false la variable para que la proxima vez nos borre los parrafos 
        insertarParrafo = false;
    } else {
            // usamos querySelectorAll para obtener todos los elementos con class="alert"
            var alerts = document.querySelectorAll('.alert');
            // usamos querySelectorAll para obtener todos los elementos con class="parrafo-dinamico"
            var parrafos = document.querySelectorAll('.parrafo-dinamico');

            // recorremos y eliminamos todos los parrafos -> p.parrafo-dinamico
            parrafos.forEach(element => {
                element.remove();
            });

            // recorremos y eliminamos todas las alertas -> div.alert
            alerts.forEach(element => {
                element.remove();
            });

            // marcamos a true la variable para que la proxima vez nos cree los parrafos y la alerta
            insertarParrafo = true;
    }
}

function alertaAleatoria() {
    // calculamos un número aleatorio entre 1 y la longitud del array alertas
    var random = Math.round(Math.random()*tiposAlerta.length - 1) + 1;
    // obtenemos una alerta de forma aleatoria
    //return tiposAlerta[random];
    return 'primary';
}

//añadir eventos aqui!!
// comprobamos si existe alerta antes de añadir el evento
if (botonAlerta) {
    // añadimos un evento al boton alerta
    botonAlerta.addEventListener(
      'click', // tipo de evento
      function () {alert('has presionado el botón', alertaAleatoria())} // funcion que ejecutamos
    );
}
