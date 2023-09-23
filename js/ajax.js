(() => {

    const xhr = new XMLHttpRequest(),
    $xht = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

    xhr.onreadystatechange("readystatechange", e => {
        
    })

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();
})();