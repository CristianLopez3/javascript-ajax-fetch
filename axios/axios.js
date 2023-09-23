(()  => {
    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

    axios
    .get("https://jsonplaceholder.typicode.com/user")
    .then((result) => {
        console.log(result);
        let json = result.data;

        json.forEach(element => {
            $li = document.createElement("li");
            $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
            $fragment.appendChild($li);
        })

        $axios.appendChild($fragment);

    }).catch((err) => {
        console.log(err.response);
        let message = err.response.statusText || "Ocurrio un error";
        $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    }).finally(() => {
        console.log("Estamos en el finally")
    });

})();

(() => {
    const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

    async function getData(){
        try {
            let response = await axios.get("https://jsonplaceholder.typicode.com/users"),
            json = await response.data;
            json.forEach(element => {
                $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            })

            $axiosAsync.appendChild($fragment);

        } catch (error) {
            let message = error.response.statusText || "Ocurrio un error";
            $axiosAsync.innerHTML = `Error ${error.response.status}: ${message}`;
        } finally{
            console.log("Estamos en el finally async");
        }

    }

    getData();

})();