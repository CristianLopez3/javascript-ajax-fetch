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
    .catch( err => console.log("Error"))
    .finally(() => console.log("Se ejecutara de cualquier forma"));

})()