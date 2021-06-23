function addHeader() {
  const headerContEl = document.querySelector(".header-contenedor");
  header(headerContEl);
  burger();
}

function addFooter() {
  const footerContEl = document.querySelector(".footer-contenedor");
  footer(footerContEl);
}

const loadServicios = async (entry) => {
  if ("content" in document.createElement("template")) {
    // Instanciar los elementos "servicios"
    for (let index = 0; index < entry.length; index++) {
      var servicios = document.querySelector(".servicios");
      var template = document.querySelector(".servicio-template");

      // Clonar el template y sustituir por el contenido
      var clone = template.content.cloneNode(true);
      var servicioTitulo = clone.querySelector(".servicio__titulo");
      servicioTitulo.textContent = entry[index].fields.titulo;
      var servicioDescripcion = clone.querySelector(".servicio__descripcion");
      servicioDescripcion.textContent = entry[index].fields.descripcion;

      // fetch imagen
      var servicioImagen = clone.querySelector(".servicio__imagen");
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

function main() {
  addFooter();
  addHeader();
  const serviciosJson = fetchServicios();
  serviciosJson.then((entry) => {
    loadServicios(entry);
  });
}

main();
