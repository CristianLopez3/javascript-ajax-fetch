const d = document,
  $form = d.querySelector(".login");

d.addEventListener("submit",  e => {
  if(e.target === $form){

    const options = {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-type": "application/json; charset=UTF-8" // Corrección aquí
      },
      body: JSON.stringify({
        login: e.target.email.value,
        clave: e.target.password.value
      })
    }

    fetch("http://localhost:8080/login", options)
      .then(res => {
        if (!res.ok) { throw { status: res.status, statusText: res.statusText }; }
        return res.json();
      })
      .then(json => {
        const token = json.jwTtoken;
        console.info(token);
        localStorage.setItem("token", token);
      })
      .catch(err => {
        let message = err.statusText || "Ocurrió un error";
        $form.insertAdjacentHTML("afterend", `<p class="error">Error ${err.status}: ${message}</p>`);
      });
  }
});
