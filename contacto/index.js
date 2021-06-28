function contacto(el) {
  const contactFormEl = document.createElement("div");
  contactFormEl.innerHTML = `
      <div class="contacto">
      <form class="form-contacto">
        <div class="form-contacto__inputs">
          <div class="form-contacto__input--nombre">
            <label class="form-contacto__label"
              >NOMBRE
              <input
                name="nombre"
                autocomplete="off"
                type="text"
                class="form-contacto__input"
              />
            </label>
          </div>
          <div class="form-contacto__input--email">
            <label class="form-contacto__label"
              >EMAIL
              <input
                name="email"
                autocomplete="off"
                type="text"
                class="form-contacto__input"
              />
            </label>
          </div>
          <div class="form-contacto__input--mensaje">
            <label class="form-contacto__label"
              >MENSAJE
              <textarea
                name="mensaje"
                class="form-contacto__textarea"
              ></textarea>
            </label>
          </div>
          <button class="form-contacto__boton">Enviar</button>
        </div>
      </form>
    </div>
  `;
  el.appendChild(contactFormEl);
}
