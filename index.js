function addHeader() {
  const headerContEl = document.querySelector(".header-contenedor");
  header(headerContEl);
  burger();
}

function addFooter() {
  const footerContEl = document.querySelector(".footer-contenedor");
  footer(footerContEl);
}

const loadPresentacion = async (entry) => {
  if ("content" in document.createElement("template")) {
    // Instanciar los elementos "presentacion"
    for (let index = 0; index < entry.length; index++) {
      var presentacion = document.querySelector(".presentacion");
      var template = document.querySelector(".template-presentacion");

      // Clonar el template y sustituir por el contenido
      var clone = template.content.cloneNode(true);
      var presentacionTitulo = clone.querySelector(".presentacion__titulo");
      presentacionTitulo.textContent = entry[index].fields.titulo;
      var presentacionDescripcion = clone.querySelector(".presentacion__texto");
      presentacionDescripcion.textContent = entry[index].fields.descripcion;

      // fetch imagen
      var presentacionImagen = clone.querySelector(".presentacion__foto");
      await fetch(
        "https://cdn.contentful.com/spaces/d2bkp66t71gu/environments/master/assets/" +
          entry[index].fields.imagen.sys.id +
          "?access_token=0i8h4DTJiqy4tl2Af562Wc8ekUkff07fehqiET9HCPU"
      )
        .then((r) => {
          return r.json();
        })
        .then((json) => {
          presentacionImagen.setAttribute("src", json.fields.file.url);
        });

      // append child
      presentacion.appendChild(clone);
    }
  } else {
    // Find another way to add the rows to the table because
    // the HTML template element is not supported.
  }
};

function fetchPresentacion() {
  // fetch desde contentful
  const entries = fetch(
    "https://cdn.contentful.com/spaces/d2bkp66t71gu/environments/master/entries?access_token=0i8h4DTJiqy4tl2Af562Wc8ekUkff07fehqiET9HCPU"
  )
    .then((r) => {
      return r.json();
    })
    .then((json) => {
      //filtrar por contenido (presentacion)
      const presentacionJson = json.items.filter((item) => {
        return item.sys.contentType.sys.id == "presentacion";
      });
      return presentacionJson;
    });

  return entries;
}

function renderPresentacion() {
  const presentacionJson = fetchPresentacion();
  presentacionJson.then((entry) => {
    loadPresentacion(entry);
  });
}

const loadServicios = async (entry) => {
  if ("content" in document.createElement("template")) {
    // Instanciar los elementos "servicios"
    for (let index = 0; index < entry.length; index++) {
      var servicios = document.querySelector(".mis-servicios__servicios");
      var template = document.querySelector(".servicio-template");

      // Clonar el template y sustituir por el contenido
      var clone = template.content.cloneNode(true);
      var servicioTitulo = clone.querySelector(
        ".mis-servicios__servicio-titulo"
      );
      servicioTitulo.textContent = entry[index].fields.titulo;
      var servicioDescripcion = clone.querySelector(
        ".mis-servicios__servicio-texto"
      );
      servicioDescripcion.textContent = entry[index].fields.descripcion;

      // fetch imagen
      var servicioImagen = clone.querySelector(
        ".mis-servicios__servicio-imagen"
      );
      const imagen = await fetch(
        "https://cdn.contentful.com/spaces/d2bkp66t71gu/environments/master/assets/" +
          entry[index].fields.imagen.sys.id +
          "?access_token=0i8h4DTJiqy4tl2Af562Wc8ekUkff07fehqiET9HCPU"
      )
        .then((r) => {
          return r.json();
        })
        .then((json) => {
          servicioImagen.setAttribute("src", json.fields.file.url);
        });

      // append child
      servicios.appendChild(clone);
    }
  } else {
    // Find another way to add the rows to the table because
    // the HTML template element is not supported.
  }
};

function fetchServicios() {
  // fetch desde contentful
  const entries = fetch(
    "https://cdn.contentful.com/spaces/d2bkp66t71gu/environments/master/entries?access_token=0i8h4DTJiqy4tl2Af562Wc8ekUkff07fehqiET9HCPU"
  )
    .then((r) => {
      return r.json();
    })
    .then((json) => {
      //filtrar por contenido (servicio)
      const serviciosJson = json.items.filter((item) => {
        return item.sys.contentType.sys.id == "servicio";
      });
      return serviciosJson;
    });

  return entries;
}

function renderServicios() {
  const serviciosJson = fetchServicios();
  serviciosJson.then((entry) => {
    loadServicios(entry);
  });
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
  renderServicios();
  renderPresentacion();
  sendMensaje();
}

main();
