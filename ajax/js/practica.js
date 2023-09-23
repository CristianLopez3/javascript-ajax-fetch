(() => {
    const datos = new XMLHttpRequest(),
    $tabla = document.querySelector("tbody");
    $fragment = document.createDocumentFragment();

    datos.onreadystatechange = (e) => {
        if (datos.readyState !== 4) return;
        if (datos.status >= 200 && datos.status < 300) {
            let json = JSON.parse(datos.responseText);
            json.forEach(element => {
                const $tr = document.createElement("tr"); // Crea una nueva fila
                const $tdNombre = document.createElement("td");
                $tdNombre.textContent = element.nombre;
                const $tdCategoria = document.createElement("td");
                $tdCategoria.textContent = element.categoria;
                const $tdDescripcion = document.createElement("td");
                $tdDescripcion.textContent = element.descripcion;

                // Agrega las celdas a la fila
                $tr.appendChild($tdNombre);
                $tr.appendChild($tdDescripcion);
                $tr.appendChild($tdCategoria);

                // Agrega la fila a la tabla
                $fragment.appendChild($tr);
                $tabla.appendChild($fragment);
            });
        } else {
            console.log("Falló la solicitud");
        }
    }

    datos.open("GET", "http://localhost:8080/producto");
    datos.send();
})();
