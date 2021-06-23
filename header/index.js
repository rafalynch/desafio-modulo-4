function header(el) {
  const contactFormEl = document.createElement("div");
  contactFormEl.innerHTML = `
      <div class="header">
      <nav class="header__nav">
      <a href="./index.html">
      <img
        class="header__logo"
        src="./images/logo-rafa.png"
        alt="logo-rafa"
      />
      </a>
        <img class="header__burger" src="./images/burger.svg" />
        <div class="header__nav-links">
          <a href="./portfolio.html" class="header__menu-link">Portfolio</a>
          <a href="./servicios.html" class="header__menu-link">Servicios</a>
          <a href="./contacto.html" class="header__menu-link">Contacto</a>
        </div>
      </nav>
      <div class="header__menu-mobile">
        <img class="header__x" src="./images/X.svg" />
        <a href="./portfolio.html" class="header__menu-link">Portfolio</a>
        <a href="./servicios.html" class="header__menu-link">Servicios</a>
        <a href="./contacto.html" class="header__menu-link">Contacto</a>
      </div>
    </div>
  `;
  el.appendChild(contactFormEl);
}

function burger() {
  const abrirVentanaEl = document.querySelector(".header__burger");
  const cerrarVentanaEl = document.querySelector(".header__x");
  const menuEl = document.querySelector(".header__menu-mobile");

  abrirVentanaEl.addEventListener("click", () => {
    menuEl.style.display = "grid";
  });

  cerrarVentanaEl.addEventListener("click", () => {
    menuEl.style.display = "none";
  });
}
