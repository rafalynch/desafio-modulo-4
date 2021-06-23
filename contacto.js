function addHeader() {
  const headerContEl = document.querySelector(".header-contenedor");
  header(headerContEl);
  burger();
}

function addFooter() {
  const footerContEl = document.querySelector(".footer-contenedor");
  footer(footerContEl);
}

function sendMensaje() {
  document
    .querySelector(".form-contacto")
    .addEventListener("submit", sendMensajePost);
}

function sendMensajePost(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const value = Object.fromEntries(formData.entries());
  value["nombre"] = formData.getAll("nombre");
  value["email"] = formData.getAll("email");
  value["mensaje"] = formData.getAll("mensaje");

  var data = {
    to: "rafa_lynch@hotmail.com",
    message:
      "Mensaje de " +
      value["nombre"] +
      " (" +
      value["email"] +
      ") " +
      "que dice: " +
      value["mensaje"],
  };

  fetch("https://apx-api.vercel.app/api/utils/dwf", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      console.log("Success:", response);
      location.reload();
    });
}

function main() {
  addHeader();
  addFooter();
  sendMensaje();
}

main();
