function footer(el) {
  const contactFormEl = document.createElement("div");
  contactFormEl.innerHTML = `
      <footer class="footer">
      <img class="footer__logo" src="./images/logo-rafa.png" alt="logo-rafa" />
      <div class="footer__social-media">
        <a class="footer__social-media-link" href="https://instagram.com" target="__blank">
          <span class="footer__social-media-label">Instagram</span>
          <img
            src="./images/instagram.svg"
            alt="logo-footer"
            class="footer__social-media-icon"
          />
        </a>
        <a class="footer__social-media-link" href="https://linkedin.com" target="__blank">
          <span class="footer__social-media-label">Linkedin</span>
          <img
            src="./images/linkedin.svg"
            alt="logo-footer"
            class="footer__social-media-icon"
          />
        </a>
        <a class="footer__social-media-link" href="https://github.com" target="__blank">
          <span class="footer__social-media-label">Github</span>
          <img
            src="./images/github.svg"
            alt="logo-footer"
            class="footer__social-media-icon"
          />
        </a>
      </div>
    </footer>
  `;
  el.appendChild(contactFormEl);
}
