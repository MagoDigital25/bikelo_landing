// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const demoForm = document.querySelector('form');
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            // Here you would typically send this data to your backend
            console.log('Form submitted:', { name, email, phone });
            
            // Show success message
            alert(`¡Gracias ${name}! Hemos recibido tu solicitud de demo. Nos pondremos en contacto contigo pronto.`);
            
            // Reset form
            demoForm.reset();
        });
    }
    // Calculator functionality
    const hoursRange = document.getElementById('hours-range');
    const hoursValue = document.getElementById('hours-value');
    const purchasesRange = document.getElementById('purchases-range');
    const purchasesValue = document.getElementById('purchases-value');
    const errorsRange = document.getElementById('errors-range');
    const errorsValue = document.getElementById('errors-value');
    const lossValue = document.getElementById('loss-value');

    if (hoursRange) {
        hoursRange.addEventListener('input', updateCalculator);
        purchasesRange.addEventListener('input', updateCalculator);
        errorsRange.addEventListener('input', updateCalculator);
        updateCalculator(); // Initialize
    }

    function updateCalculator() {
        // Update displayed values
        hoursValue.textContent = hoursRange.value + 'h';
        purchasesValue.textContent = new Intl.NumberFormat('es-ES').format(purchasesRange.value) + '€';
        errorsValue.textContent = errorsRange.value;
        
        // Calculate total loss
        const hoursCost = hoursRange.value * 25 * 4; // 25€/h * 4 weeks
        const purchasesCost = purchasesRange.value * 0.03 * 0.5; // 3% savings on 50% of purchases
        const errorsCost = errorsRange.value * 150; // Avg 150€ per error
        
        const totalLoss = Math.round(hoursCost + purchasesCost + errorsCost);
        lossValue.textContent = new Intl.NumberFormat('es-ES').format(totalLoss);
    }

    // Feature accordions
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', function() {
            this.querySelector('.feature-list').classList.toggle('hidden');
        });
    });

    // Plan selection tracking
    document.querySelectorAll('[href="#demo"]').forEach(link => {
        link.addEventListener('click', function() {
            const plan = this.closest('.pricing-card')?.querySelector('h3')?.textContent || 'Custom';
            console.log('Selected plan:', plan);
            // Here you would typically send this to your analytics
        });
    });

    // Animate elements on scroll
const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                el.classList.add('animate-fade-in');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});