
/* DECLARAMOS VARIABLES DE ELEMENTOS HTML */
var panelAlerta = document.getElementById('panel-alerta');
var botonAlerta = document.getElementById('boton-alerta');
var panelPrincipal = document.getElementById('panel-principal');
var insertarParrafo = true;
var tiposAlerta = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
var temaCss = document.getElementById('temaCSS')
var botonTema = document.getElementById('boton-tema');
var botonFont = document.getElementById('boton-font');

function cambiarTema(){
    var href = temaCss.getAttribute('href');
    if(href === 'tema_oscuro.css'){
        temaCss.setAttribute('href','tema_claro.css');
        botonTema.innerText='Tema Oscuro';
        alert('Has cambiado a tema claro.', 'success');
    } else {
        temaCss.setAttribute('href','tema_oscuro.css');
        botonTema.innerText='Tema Claro';
        alert('Has cambiado a tema oscuro.', 'success');
    }
}


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

    setTimeout(
        () => {
            alerta.remove();
        }, 5000
    )
}

function cambiarStyle(){

}

//añadir eventos aqui!!
    botonAlerta.addEventListener('click',function () {alert('has presionado el botón', 'primary');});
    botonTema.addEventListener('click', function(){cambiarTema();});
    botonFont.addEventListener('click', function(){cambiarStyle();});
