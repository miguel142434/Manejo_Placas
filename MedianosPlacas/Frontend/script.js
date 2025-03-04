document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("registroForm")) {
        inicializarFormulario();
    } else if (document.getElementById("registroTabla")) {
        mostrarRegistros();
    }
});

function inicializarFormulario() {
    let nuevoID = Date.now();
    document.getElementById("id").value = nuevoID;

    document.getElementById("guardarBtn").addEventListener("click", function () {
        let id = document.getElementById("id").value;
        let placa = document.getElementById("placa").value;
        let marca = document.getElementById("marca").value;
        let modelo = document.getElementById("modelo").value;
        let color = document.getElementById("color").value;
        let fecha_ingreso = document.getElementById("fecha_ingreso").value;

        if (!placa || !marca || !modelo || !color || !fecha_ingreso) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        let registros = JSON.parse(sessionStorage.getItem("registros")) || [];
        registros.push({ id, placa, marca, modelo, color, fecha_ingreso });
        sessionStorage.setItem("registros", JSON.stringify(registros));

        alert("Registro guardado con éxito!");
        window.location.href = "index.html";
    });
}

function mostrarRegistros() {
    let tabla = document.getElementById("registroTabla");

    if (!tabla) return;

    let registros = JSON.parse(sessionStorage.getItem("registros")) || [];
    tabla.innerHTML = "";

    registros.forEach((registro, index) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${registro.placa}</td>
            <td>${registro.id}</td>
            <td>${registro.marca}</td>
            <td>${registro.modelo}</td>
            <td>${registro.color}</td>
            <td>${registro.fecha_ingreso}</td>
            <td><button class="delete-btn" onclick="eliminarRegistro(${index})">Eliminar</button></td>
        `;
        tabla.appendChild(fila);
    });
}

function eliminarRegistro(index) {
    let registros = JSON.parse(sessionStorage.getItem("registros")) || [];

    registros.splice(index, 1); 
    sessionStorage.setItem("registros", JSON.stringify(registros));

    mostrarRegistros();
}
