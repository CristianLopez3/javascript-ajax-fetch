(() => {

    /* Creamos las variables para poder manipular los datos */
    const xhr = new XMLHttpRequest(), // metodo que nos permite manipular los datos
    $xht = document.getElementById("xhr"), // variable del dom que va a poner los datos
    $fragment = document.createDocumentFragment(); // variable para listar los elementos por fragmentos

    xhr.onreadystatechange = ("readystatechange", e => {

        if(xhr.readyState  !== 4) return ;
        if(xhr.status >= 200 && xhr.status < 300){
            console.log("exito");
            let json  = JSON.parse(xhr.responseText);

            json.forEach( element => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });

            $xht.appendChild($fragment);

            
        } else {
            let message = xhr.statusText || "ocurrio un error";
            $xht.innerHTML = `Error ${xhr.status}: ${message}`;
            console.log("fallo")
        }

    })

    
    xhr.open("GET", "https://jsonplaceholder.typicode.com/user"); // metodo y url a la que se va hacer la peticion
    xhr.send(); // enviamos la petición al servidor 


})();