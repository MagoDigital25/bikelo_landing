class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: #000814;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .logo {
          color: #FFB700;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        ul { 
          display: flex; 
          gap: 2rem; 
          list-style: none; 
          margin: 0; 
          padding: 0;
          align-items: center;
        }
        a { 
          color: white; 
          text-decoration: none; 
          font-weight: 500;
          transition: color 0.2s;
          position: relative;
        }
        a:hover { 
          color: #FFB700;
        }
        a.active {
          color: #FFB700;
        }
        a.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #FFB700;
        }
        .cta-button {
          background: #FFB700;
          color: #000814;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.2s;
        }
        .cta-button:hover {
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 183, 0, 0.3);
        }
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block;
          }
          ul {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #000814;
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
          }
          ul.open {
            display: flex;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">
          <img src="https://huggingface.co/spaces/MagoDigi/bikelo-log-stica-ciclista-en-ia/resolve/main/images/Logotipo%20de%20Marca%20bikelo%20App_Blanco_Lucuma_lo.svg" alt="Bikelo" style="height:40px;">
</a>
        <button class="mobile-menu-button">
          <i data-feather="menu"></i>
        </button>
        <ul>
          <li><a href="#portada" class="active">Solución</a></li>
          <li hidden><a href="#pricing">Precios</a></li>
          <li><a href="#funciones">¿Que hace?</a></li>
          <li><a href="#beneficios">Beneficios</a></li>
          <li><a href="#faq">Preguntas</a></li>
          <li><a href="#demo" class="cta-button">Demo Gratis</a></li>
        </ul>
      </nav>
    `;
    
    // Mobile menu toggle
    const menuButton = this.shadowRoot.querySelector('.mobile-menu-button');
    const menu = this.shadowRoot.querySelector('ul');
    
    menuButton.addEventListener('click', () => {
      menu.classList.toggle('open');
      const icon = menuButton.querySelector('i');
      if (menu.classList.contains('open')) {
        feather.replace();
        icon.setAttribute('data-feather', 'x');
      } else {
        feather.replace();
        icon.setAttribute('data-feather', 'menu');
      }
      feather.replace();
    });
  }
}
customElements.define('custom-navbar', CustomNavbar);