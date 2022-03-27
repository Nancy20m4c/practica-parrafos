
/* DECLARAMOS VARIABLES DE ELEMENTOS HTML */
var panelAlerta = document.getElementById('panel-alerta');
var panelPrincipal = document.getElementById('panel-principal');
var tiposAlerta = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
var temaCss = document.getElementById('temaCSS')
var botonTema = document.getElementById('boton-tema');
var botonFont = document.getElementById('boton-font');
var botonParrafo =document.getElementById('boton-parrafo');



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

function alert(mensaje, tipoAlerta) {
    var alerta = document.createElement('div');
    alerta.className = 'elemento-alerta';
    alerta.innerHTML = '<div class="alert alert-' + tipoAlerta + ' alert-dismissible" role="alert">' + mensaje + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    panelAlerta.append(alerta);

    setTimeout(
        () => {
            alerta.remove();
            
        }, 5000
    )
}

function cambiarStyle(){
    var clase = panelPrincipal.getAttribute('class');
    if(clase === 'arial'){
        panelPrincipal.setAttribute('class','times');
        botonFont.innerText='Fuente arial';
        alert('Has cambiado de fuente', 'danger');
    } else {
        panelPrincipal.setAttribute('class','arial');
        botonFont.innerText='Fuente Times';
        alert('Has cambiado de fuente', 'danger');
        
    }
}


function cambiarParrafos() {
    var p1 = document.getElementById('p1');
    var p1aux = p1.innerHTML;
    var p2 = document.getElementById('p2');
    var p2aux = p2.innerHTML;
    p1.innerHTML=p2aux;
    p2.innerHTML=p1aux;
    alert('Has cambiado los parrafos', 'warning');
}
//añadir eventos aqui!!
    botonTema.addEventListener('click', function(){cambiarTema();});
    botonFont.addEventListener('click', function(){cambiarStyle();});
    botonParrafo.addEventListener('click', function(){cambiarParrafos();});
