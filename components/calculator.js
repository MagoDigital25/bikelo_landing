class BikeloCalculator extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: 'Inter', sans-serif;
        }
        .calculator-container {
          background: #000814;
          color: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          max-width: 32rem;
          margin: 0 auto;
        }
        .calculator-title {
          font-size: 1.5rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .calculator-input {
          margin-bottom: 1.5rem;
        }
        .calculator-input label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }
        .calculator-range {
          -webkit-appearance: none;
          width: 100%;
          height: 0.5rem;
          border-radius: 0.25rem;
          background: linear-gradient(to right, #FFB700, #facc15);
          outline: none;
          margin-bottom: 0.5rem;
        }
        .calculator-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          background: #FFB700;
          cursor: pointer;
          border: 2px solid white;
        }
        .range-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #9ca3af;
        }
        .calculator-result {
          background: #FFB700;
          color: #000814;
          padding: 1rem;
          border-radius: 0.5rem;
          text-align: center;
          margin-top: 1.5rem;
        }
        .result-value {
          font-size: 1.5rem;
          font-weight: bold;
        }
      </style>
      <div class="calculator-container">
        <h3 class="calculator-title">Calcula tu ahorro potencial</h3>
        
        <div class="calculator-input">
          <label for="hours">Horas/semana en presupuestos</label>
          <input type="range" id="hours" class="calculator-range" min="1" max="20" value="8">
          <div class="range-labels">
            <span>1h</span>
            <span id="hours-value">8h</span>
            <span>20h</span>
          </div>
        </div>
        
        <div class="calculator-input">
          <label for="purchases">Volumen mensual de compras (€)</label>
          <input type="range" id="purchases" class="calculator-range" min="500" max="50000" value="10000" step="500">
          <div class="range-labels">
            <span>500€</span>
            <span id="purchases-value">10.000€</span>
            <span>50.000€</span>
          </div>
        </div>
        
        <div class="calculator-input">
          <label for="errors">Errores mensuales típicos</label>
          <input type="range" id="errors" class="calculator-range" min="0" max="20" value="5">
          <div class="range-labels">
            <span>0</span>
            <span id="errors-value">5</span>
            <span>20+</span>
          </div>
        </div>
        
        <div class="calculator-result">
          <p>Total pérdida mensual: <span id="loss-value" class="result-value">1.820</span>€</p>
          <p class="text-sm">vs Coste Bikelo: 79€/mes</p>
        </div>
      </div>
    `;

    this.setupCalculator();
  }

  setupCalculator() {
    const hoursRange = this.shadowRoot.getElementById('hours');
    const hoursValue = this.shadowRoot.getElementById('hours-value');
    const purchasesRange = this.shadowRoot.getElementById('purchases');
    const purchasesValue = this.shadowRoot.getElementById('purchases-value');
    const errorsRange = this.shadowRoot.getElementById('errors');
    const errorsValue = this.shadowRoot.getElementById('errors-value');
    const lossValue = this.shadowRoot.getElementById('loss-value');

    const updateCalculator = () => {
      hoursValue.textContent = hoursRange.value + 'h';
      purchasesValue.textContent = new Intl.NumberFormat('es-ES').format(purchasesRange.value) + '€';
      errorsValue.textContent = errorsRange.value;
      
      const hoursCost = hoursRange.value * 25 * 4;
      const purchasesCost = purchasesRange.value * 0.03 * 0.5;
      const errorsCost = errorsRange.value * 150;
      
      const totalLoss = Math.round(hoursCost + purchasesCost + errorsCost);
      lossValue.textContent = new Intl.NumberFormat('es-ES').format(totalLoss);
    };

    hoursRange.addEventListener('input', updateCalculator);
    purchasesRange.addEventListener('input', updateCalculator);
    errorsRange.addEventListener('input', updateCalculator);
    
    updateCalculator();
  }
}

customElements.define('bikelo-calculator', BikeloCalculator);