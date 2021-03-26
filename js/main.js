////////* Saluda al usurio, le pide que ingrese su nombre y lo imprime en pantalla*///////////

alert("¡Bienvenido a Ecap!")

var nombre = prompt("Ingrese su nombre");
if (nombre != null) {
    document.getElementById('nombre').innerHTML = nombre;
}
///////////* Cambia de color los botones al hacer pasar el cursor por el boton*////////////

function changeColor(x) {
    if (x.style.background == "#a8dda8") {
        x.style.background = "#fff";
    } else {
        x.style.background = "#F7D358";
    }
    return false;
}
/*Desplazamiento suave entre secciones*/
function desplazamiento() {
    document.documentElement.style.scrollBehavior = "smooth";
}

/////////////*Mostrar/Ocultar los cursos segun criterio de búsqueda*///////////////
$('.tres-box-lista .filtro[category="all"]').addClass('ct_filtro-curso');

$('.filtro').click(function() {
    var catCurso = $(this).attr('category');
    console.log(catCurso);

    // AGREGANDO CLASE ACTIVA AL ENLACE SELECCIONADO
    $('.filtro').removeClass('ct_filtro-curso');
    $(this).addClass('ct_filtro-curso');

    // OCULTANDO CURSOS =========================
    $('.curso').hide();

    // MOSTRANDO CURSOS =========================
    $('.curso[category="' + catCurso + '"]').show();

    // MOSTRANDO TODOS LOS CURSOS =======================

    $('.filtro[category="todas"]').click(function() {
        $('.curso').show();
    });

});




/////////////////*Formulario*///////////////////
function validarFormulario() {

    var nombre = formulario.nombre.value;
    var correo = formulario.correo.value;
    var asunto = formulario.asunto.value;
    var mensaje = formulario.mensaje.value;

    if (nombre == "") {
        alert("Campo Nombre obligatorio");
        formulario.nombre.focus();
        return false;
    }

    if (correo == "") {
        alert("Campo Correo obligatorio");
        formulario.correo.focus();
        return false;
    }

    if (asunto == "") {
        alert("Campo Asunto obligatorio");
        formulario.asunto.focus();
        return false;
    }

    if (mensaje == "") {
        alert("Campo Mensaje obligatorio");
        formulario.mensaje.focus();
        return false;
    }

}
/////////////* Carousel de quienes somos */////////////////////
var items = $('.slide').length;
var itemsPos = 1;

//Paginacion --
for (i = 1; i <= items; i++) {
    $('.pagiacion').append('<li><i class="fas fa-circle"></i></li>');
}

$('.slide').hide(); //ocultar todos los slides
$('.slide:first').show(); //mostrar el primer slide
$('.paginacion li:first').css({ 'color': '#F4BC51' }); //dar color al primer item de la paginacion

//Ejecutamos todas las funciones
$('.paginacion li').click(paginacion);
$('.derecha i').click(nextSlider);
$('.izquierda i').click(prevSlider);

setInterval(function() {
    nextSlider();
}, 6000);

// FUNCIONES //
function paginacion() {
    var paginacionPos = $(this).index() + 1; //Posicion de la paginacion seleccionada

    $('.slide').hide();
    $('.slide:nth-child(' + paginacionPos + ')').fadeIn(); //Mostramos el slide seleccionado

    //Dandole estilos a la paginacion seleccionada
    $('.paginacion li').css({ 'color': '#858585' });
    $(this).css({ 'color': '#F4BC51' });

    itemsPos = paginacionPos;
}

function nextSlider() {
    if (itemsPos >= items) { itemsPos = 1; } else { itemsPos++; }

    $('.paginacion li').css({ 'color': '#858585' });
    $('.paginacion li:nth-child(' + itemsPos + ')').css({ 'color': '#F4BC51' });

    $('.slide').hide();
    $('.slide:nth-child(' + itemsPos + ')').fadeIn();

}

function prevSlider() {
    if (itemsPos <= 1) { itemsPos = items; } else { itemsPos--; }

    $('.paginacion li').css({ 'color': '#858585' });
    $('.paginacion li:nth-child(' + itemsPos + ')').css({ 'color': '#F4BC51' });

    $('.slide').hide();
    $('.slide:nth-child(' + itemsPos + ')').fadeIn();


}