(() => {

    const $fetch = document.getElementById("fetch"), // variable del dom que va a poner los datos
    $fragment = document.createDocumentFragment(); // variable para listar los elementos por fragmentos

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) =>   res.ok ? res.json () : Promise.reject(res))
    .then((json)=> {
        json.forEach( element => {
            const $li = document.createElement("li");
            $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
            $fragment.appendChild($li);
        });


        $fetch.appendChild($fragment);

    }) 
    // .catch( err => console.log("Error"))
    // .finally(() => console.log("Se ejecutara de cualquier forma"));

})();



(() => {
    const $async = document.getElementById("async"),
        $fragment = document.createDocumentFragment();

    async function getRequest() {
        try{
            /** 
             * Con el await de la función async podemos controlar el flujo de nuestra petición de 
             * una forma mucha más ordenata.
             * TRY - CATCH -> es una forma más simple de manejar nuestras validaciones ya que podemos 
             * imprimir mensjes mucho más personalizados
             *  */
            let response = await fetch("https://jsonplaceholder.typicode.com/users"),
            json = await response.json();

            if(!response.ok) throw ({status: response.status, statusText: response.statusText})

            json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });

            $async.appendChild($fragment);


        } catch(error) {
            console.error(error)
            let message = error.statusText || "Ocurrió un error";
            $async.innerHTML =  `Error ${error.status}: ${message}`;
        } finally{
            console.log("Codigo que se ejecuta si o si")
        }

       
    }

    getRequest();
})();
