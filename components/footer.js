class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #000814;
          color: white;
          padding: 4rem 2rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: bold;
          color: #FFB700;
          margin-bottom: 1rem;
        }
        .footer-heading {
          font-weight: bold;
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: #FFB700;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .social-links a {
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .social-links a:hover {
          background: #FFB700;
          color: #000814;
          transform: translateY(-2px);
        }
        .copyright {
          text-align: center;
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.875rem;
        }
        @media (max-width: 640px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div>
            <div class="footer-logo">
              <img src="https://huggingface.co/spaces/MagoDigi/bikelo-log-stica-ciclista-en-ia/resolve/main/images/Logotipo%20de%20Marca%20bikelo%20App_Blanco_Lucuma_lo.svg" alt="Bikelo" style="height:30px;">
</div>
            <p class="text-gray-400">La plataforma IA que revoluciona la gestión de talleres de ciclismo.</p>
            <div class="social-links">
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="linkedin"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="youtube"></i></a>
            </div>
          </div>
          <div>
            <h3 class="footer-heading">Navegación</h3>
            <div class="footer-links">
              <a href="#portada">Solución</a>
              <a href="#funciones">¿Qué hace?</a>
              <a href="#beneficios">Beneficios</a>
              <a href="#faq">Preguntas</a>
              <a href="#demo">Demo Gratis</a>
            </div>
          </div>
</div>
        
        <div class="copyright">
          &copy; ${new Date().getFullYear()} Bikelo. Todos los derechos reservados.
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);