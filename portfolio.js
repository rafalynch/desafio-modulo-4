function addHeader() {
  const headerContEl = document.querySelector(".header-contenedor");
  header(headerContEl);
  burger();
}

function addFooter() {
  const footerContEl = document.querySelector(".footer-contenedor");
  footer(footerContEl);
}

const loadPortfolio = async (entry) => {
  if ("content" in document.createElement("template")) {
    // Instanciar los elementos "portfolio"
    for (let index = 0; index < entry.length; index++) {
      var portfolio = document.querySelector(".portfolio");
      var template = document.querySelector(".trabajo-template");

      // Clonar el template y sustituir por el contenido
      var clone = template.content.cloneNode(true);
      var trabajoTitulo = clone.querySelector(".trabajo__titulo");
      trabajoTitulo.textContent = entry[index].fields.title;
      var trabajoDescripcion = clone.querySelector(".trabajo__descripcion");
      trabajoDescripcion.textContent = entry[index].fields.description;
      var trabajoUrl = clone.querySelector(".trabajo__link");
      trabajoUrl.textContent = entry[index].fields.url;
      trabajoUrl.setAttribute("href", entry[index].fields.url);

      // fetch imagen
      var trabajoImagen = clone.querySelector(".trabajo__imagen");
      await fetch(
        "https://cdn.contentful.com/spaces/d2bkp66t71gu/environments/master/assets/" +
          entry[index].fields.image.sys.id +
          "?access_token=0i8h4DTJiqy4tl2Af562Wc8ekUkff07fehqiET9HCPU"
      )
        .then((r) => {
          return r.json();
        })
        .then((json) => {
          trabajoImagen.setAttribute("src", json.fields.file.url);
        });

      // append child
      portfolio.appendChild(clone);
    }
  } else {
    // Find another way to add the rows to the table because
    // the HTML template element is not supported.
  }
};

function fetchPortfolio() {
  // fetch desde contentful
  const entries = fetch(
    "https://cdn.contentful.com/spaces/d2bkp66t71gu/environments/master/entries?access_token=0i8h4DTJiqy4tl2Af562Wc8ekUkff07fehqiET9HCPU"
  )
    .then((r) => {
      return r.json();
    })
    .then((json) => {
      //filtrar por contenido (work)
      const portfolioJson = json.items.filter((item) => {
        return item.sys.contentType.sys.id == "work";
      });
      return portfolioJson;
    });

  return entries;
}

function main() {
  addHeader();
  addFooter();
  const portfolioJson = fetchPortfolio();
  portfolioJson.then((entry) => {
    loadPortfolio(entry);
  });
}

main();
