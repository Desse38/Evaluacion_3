function validar() {
    var retorno_direccion = val_direccion();
    var retorno_nombre = val_nombre();
    var retorno_contraseña = val_contraseña();
    var retorno_confirmacion = val_confirmacion();
    var retorno_telefono = val_telefono();
    var retorno_url = val_url();
    var retorno_lista = val_lista();
    var retorno_comuna = val_comuna();
    return retorno_nombre && retorno_contraseña && retorno_confirmacion && retorno_telefono && retorno_url && retorno_lista && retorno_direccion && retorno_comuna;
}

function val_nombre() {
    var nombre = document.getElementById("input_nombre").value;
    var div_error_nombre = document.getElementById("error_nombre");
    var nombre = input_nombre.value;
    if (nombre == "") {
        div_error_nombre.innerHTML = "El nombre es Obligatorio"
        div_error_nombre.className = "text-danger small mt-1"
        return false;
    } else if (nombre.length < 5) {
        div_error_nombre.innerHTML = "Debe contener como mínimo  5 caracteres"
        div_error_nombre.className = "text-danger small mt-1"
        return false;

    } else if (nombre.length > 10) {
        div_error_nombre.innerHTML = "Debe contener como máximo 10 caracteres"
        div_error_nombre.className = "text-danger small mt-1"
        return false;

    } else if (!letra(nombre.charAt(0))) {
        div_error_nombre.innerHTML = "Su nombre de usuario debe comenzar con una letra"
        div_error_nombre.className = "text-danger small mt-1"
        return false;

    } else if (!letrasyNumeros(nombre)) {
        div_error_nombre.innerHTML = "No puede usar caracteres especiales"
        div_error_nombre.className = "text-danger small mt-1"
        return false;


    } else if (!digitosFinales(nombre)) {
        div_error_nombre.innerHTML = "Solamente puedes tener dígitos al final del nombre";
        div_error_nombre.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_nombre.innerHTML = "";
        return true;
    }

}

function val_contraseña() {
    var contraseña = document.getElementById("input_contraseña").value;
    var div_error_contraseña = document.getElementById("error_contraseña");
    var nombre = document.getElementById("input_nombre").value;
    if (contraseña === "") {
        div_error_contraseña.innerHTML = "La contraseña es obligatoria";
        div_error_contraseña.className = "text-danger small mt-1";
        return false;
    } else if (contraseña.length < 4) {
        div_error_contraseña.innerHTML = "La contraseña debe tener al menos 4 caracteres";
        div_error_contraseña.className = "text-danger small mt-1";
        return false;
    } else if (contraseña.includes(nombre)) {
        div_error_contraseña.innerHTML = "La contraseña no puede contener el nombre de usuario";
        div_error_contraseña.className = "text-danger small mt-1";
        return false;

    } else if (!buscaNumeros(contraseña)) {
        div_error_contraseña.innerHTML = "La contraseña debe contener al menos un dígito";
        div_error_contraseña.className = "text-danger small mt-1";
        return false;
    } return true;
}
function val_confirmacion() {
    var confirmacion = document.getElementById("input_confirmacion").value;
    var div_error_confirmacion = document.getElementById("error_confirmacion");
    var contraseña = document.getElementById("input_contraseña").value;
    if (confirmacion !== contraseña) {
        div_error_confirmacion.innerHTML = "Las contraseñas deben ser semejantes";
        div_error_confirmacion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_confirmacion.innerHTML = "";
        return true;
    }
}
function val_telefono() {
    var telefono = document.getElementById("input_telefono").value;
    var div_error_telefono = document.getElementById("error_telefono");
    var numeroTelefono = telefono.split('').filter(char => '0123456789'.includes(char)).join('');

    if (telefono === "") {
        div_error_telefono.innerHTML = "El número de teléfono es obligatorio";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } else if (numeroTelefono.length === 11 && numeroTelefono.startsWith('569')) {
        div_error_telefono.innerHTML = '';
        return true;
    } else {
        div_error_telefono.innerHTML = "El número debe tener el formato +569XXXXXXXX";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    }
}

function val_direccion() {
    var direccion = document.getElementById("input_direccion").value;
    var div_error_direccion = document.getElementById("error_direccion");
    if (direccion == "") {
        div_error_direccion.innerHTML = "La dirección es obligatoria";
        div_error_direccion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true;
    }
}
function val_comuna() {
    var comuna = document.getElementById("select_comuna").value;
    var div_error_comuna = document.getElementById("error_comuna");
    if (comuna === "default") {
        div_error_comuna.innerHTML = "Debe seleccionar una Comuna";
        div_error_comuna.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}
function val_url() {
    var url = document.getElementById("input_url").value;
    var div_error_url = document.getElementById("error_url");
    if (url == "") {
        div_error_url.innerHTML = "Ingresar un sitio web es obligatorio";
        div_error_url.className = "text-danger small mt-1";
        return false;
    } else if (!url.startsWith("https://www.") && !url.startsWith("http://www.")) {
        div_error_url.innerHTML = "Debe seguir el formato de ejemplo https://www.sitioejemplo.com";
        div_error_url.className = "text-danger small mt-1";
        return false;
    } return true;

}


var intereses = [];

function actualizar() {
    var div_lista = document.getElementById("lista_intereses");
    div_lista.innerHTML = "";
    var ul = document.createElement("ul");
    ul.className = "list-group";
    for (var i in intereses) {
        var li = document.createElement("li");
        li.innerHTML = intereses[i];
        li.className = "list-group-item";
        ul.appendChild(li);
    }
    div_lista.appendChild(ul);
}

function agregar_aficion() {
    var input_aficion = document.getElementById("input_aficion");
    var aficion = input_aficion.value.trim();
    if (aficion !== "") {
        intereses.push(aficion);
        input_aficion.value = "";
        actualizar();
    }
}

function val_lista() {

    if (intereses.length < 2) {
        var div_error_aficiones = document.getElementById("error_aficiones");
        div_error_aficiones.innerHTML = "Debe ingresar al menos dos aficiones.";
        div_error_aficiones.className = "text-danger small mt-1";
        return false;
    }else {return true;}
}
var botonAgregar = document.getElementById("boton_agregar");
botonAgregar.addEventListener("click", agregar_aficion);

document.getElementById("boton_agregar").addEventListener("click", function () {
    agregar_aficion();
});



function letra(primer_caracter) {
    return (primer_caracter >= "a" && primer_caracter <= "z") || (primer_caracter >= "A" && primer_caracter <= "Z")
}



function letrasyNumeros(nombre) {
    var caracteresvalidos = "QWERTYUIOPÑLKJHGFDSAZXCVBNM1234567890qwertyuiopasdfghjklñzxcvbnm1234567890";
    for (var i = 0; i < nombre.length; i++) {
        if (caracteresvalidos.indexOf(nombre.charAt(i)) === -1) {
            return false;
        }
    } return true;
}
function digito(caracter) {
    return caracter >= "0" && caracter <= "9";
}

function digitosFinales(nombre) {
    var Digitos = false;
    for (var i = 1; i < nombre.length; i++) {
        if (digito(nombre.charAt(i))) {
            Digitos = true;
        } else if (!Digitos) {
            return true;
        } else if (i !== nombre.length - 1) {
            return false;
        }
    }
    return Digitos;
}

function buscaNumeros(str) {
    var numeros = "0123456789";
    for (var i = 0; i < str.length; i++) {
        if (numeros.includes(str[i])) {
            return true;
        }
    }
    return false;
}