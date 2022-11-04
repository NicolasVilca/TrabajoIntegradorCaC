let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let cant_tickets = document.getElementById("cant_tickets");
let categoria  = document.getElementById("categoria");

const precio_ticket = 200;
let promo_estudiante = 0.2; //80% de descuento
let promo_trainee = 0.5; //50% de descuento
let promo_junior = 0.85; //15% de descuento

//Funciones
function restablecer_fallos() {
    let i = document.querySelectorAll(".form-control");
    //i = i + document.querySelectorAll(".form-select");
    let j;
    for (j=0 ; j < i.length ; j++) {
        i[j].classList.remove("is-invalid");
    }

}



function precio_final() {

    restablecer_fallos();

    let campo_vacio = 0;

    if ((nombre.value === "") || (nombre.value.length < 3)) {
        campo_vacio++;
        //alert("Necesita completar el campo nombre");
        nombre.classList.add("is-invalid");
        nombre.focus();
    }

    if ((apellido.value === "") || (apellido.value.length < 3)) {
        campo_vacio++;
        //alert("Necesita completar el campo apellido");
        apellido.classList.add("is-invalid");
        apellido.focus();
    }

    const validarCorreo = correo => {
        return /^[^\@]+@[^\s@]+.[^\s@]+$/.test(correo)
    }

    if ((correo.value === "") || (!validarCorreo(correo.value))) {
        campo_vacio++;
        //alert("Necesita completar el campo correo");
        correo.classList.add("is-invalid");
        correo.focus();
    }  

    if ((cant_tickets.value == 0) || (isNaN(cant_tickets.value))) {
        campo_vacio++;
        //alert("Necesita completar el campo cantidad");
        cant_tickets.classList.add("is-invalid");
        cant_tickets.focus();
    }

    if (categoria.value == "Selecciona una categoria") {
        campo_vacio++;
        //alert("Necesita seleciconar una categoria");
        categoria.classList.add("is-invalid");
        categoria.focus();
    }

    // console.log(campo_vacio); verificaba el valor del campo vacio

    if (campo_vacio != 0) {
        if (campo_vacio == 1){
            alert("Necesitas completar un campo");
            return;
        }else {
            alert("Necesitas completar varios campos");
            return;
        }
    }

    let valor_final_tickets = (cant_tickets.value) * precio_ticket;

    switch (categoria.value) {
        case "1":
            break;
        case "2":
            valor_final_tickets = valor_final_tickets * promo_estudiante;
            break;
        case "3":
            valor_final_tickets = valor_final_tickets * promo_trainee;
            break;
        case "4":
            valor_final_tickets = valor_final_tickets * promo_junior;
            break;
    }

    total_pago.value = "Total a pagar: $" +valor_final_tickets;
    
    return;
}


function borrar_datos() {

    var mensaje = confirm("¿Estas seguro de esto?");
    if (!mensaje) {
        return;
    }

    restablecer_fallos();

    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    cant_tickets.value = "";
    categoria.value = "1";
    total_pago.value = "Total a pagar: $";
}