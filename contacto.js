function addHeader() {
  const headerContEl = document.querySelector(".header-contenedor");
  header(headerContEl);
  burger();
}

function addFooter() {
  const footerContEl = document.querySelector(".footer-contenedor");
  footer(footerContEl);
}

function main() {
  addHeader();
  addFooter();
}

main();
