const buttonForm = document.getElementById("publish");
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
buttonForm.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("http://localhost:8080/graphql", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: `mutation {
        createPersona(datos: {
          nombre: "${nombre.value}",
          edad: ${edad.value}
        }) {
          id
        }
       }
       `,
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
});
