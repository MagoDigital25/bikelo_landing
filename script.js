
// Carousel functionality
function initCarousel() {
  const carousel = document.querySelector('.carousel-slides');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const dots = document.querySelectorAll('.dot');
  const descriptions = document.querySelectorAll('.feature-description');
  let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.carousel-slide').length;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
    
    // Update descriptions
    descriptions.forEach((desc, index) => {
      desc.classList.toggle('hidden', index !== currentIndex);
      desc.classList.toggle('active', index === currentIndex);
    });
  }

  // Navigation
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  });

  // Dot navigation
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentIndex = parseInt(dot.dataset.index);
      updateCarousel();
    });
  });

  // Auto-rotate (optional)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }, 5000);
}

// Initialize carousel if exists
if (document.querySelector('.carousel-container')) {
  initCarousel();
}

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const demoForm = document.querySelector('form');
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            // URL del webhook de Make
            const webhookUrl = 'https://hook.eu2.make.com/k7nknc1ahgjv52a5k3xr6zye9234vn6w';

            // Enviar datos al webhook
            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-make-apikey': '-iqndT.Ox2zFn?wa'
                },
                body: JSON.stringify({ name, email, phone })
            })
            .then(response => {
                if (response.ok) {
                    alert(`¡Gracias ${name}! Hemos recibido tu solicitud de demo. Nos pondremos en contacto contigo pronto.`);
                    demoForm.reset();
                } else {
                    alert('Hubo un problema al enviar tu solicitud. Inténtalo de nuevo.');
                }
            })
            .catch(error => {
                console.error('Error al enviar al webhook:', error);
                alert('Error de conexión. Inténtalo más tarde.');
            });
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

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const button = item.querySelector('button');
  const content = item.querySelector('.faq-content');
  const icon = item.querySelector('.faq-icon');
  
  button.addEventListener('click', () => {
    const isOpen = content.classList.contains('hidden');
    
    // Close all other items
    document.querySelectorAll('.faq-content').forEach(el => {
      if (el !== content) el.classList.add('hidden');
    });
    document.querySelectorAll('.faq-icon').forEach(el => {
      if (el !== icon) {
        el.setAttribute('data-feather', 'chevron-down');
        feather.replace();
      }
    });
    
    // Toggle current item
    if (isOpen) {
      content.classList.remove('hidden');
      icon.setAttribute('data-feather', 'chevron-up');
    } else {
      content.classList.add('hidden');
      icon.setAttribute('data-feather', 'chevron-down');
    }
    feather.replace();
  });
});

// Cookie Consent
const cookieConsent = document.getElementById('cookie-consent');
const cookieAccept = document.getElementById('cookie-accept');

if (!localStorage.getItem('cookieConsent')) {
  cookieConsent.classList.remove('hidden');
}

cookieAccept.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'true');
  cookieConsent.classList.add('hidden');
});

// Exit Intent Popup
document.addEventListener('mouseout', (e) => {
  if (e.relatedTarget === null && e.clientY < 50) {
    // Show exit intent popup
    console.log('Exit intent detected - would show popup here');
  }
});

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on load

// Initialize chatbot (placeholder)
console.log('Chatbot would be initialized here');

// Retargeting pixel (placeholder)
console.log('Retargeting pixel would be loaded here');
});
