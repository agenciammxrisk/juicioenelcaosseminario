// Configurar la URL del backend
// Cambiar esto a tu URL de Vercel una vez deployado
const BACKEND_URL = 'https://juicio-backend.vercel.app'; // Actualiza esto

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Obtener valores
      const nombre = contactForm.querySelector('input[type="text"]').value.trim();
      const email = contactForm.querySelector('input[type="email"]').value.trim();
      const mensaje = contactForm.querySelector('textarea').value.trim();
      
      // Validar
      if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos');
        return;
      }
      
      // Deshabilitar botón mientras se envía
      const button = contactForm.querySelector('button');
      const buttonText = button.textContent;
      button.disabled = true;
      button.textContent = 'Enviando...';
      
      try {
        const response = await fetch(`${BACKEND_URL}/api/contacto`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre,
            email,
            mensaje,
          }),
        });
        
        const data = await response.json();
        
        if (response.ok && data.success) {
          alert('✅ Mensaje enviado exitosamente. Nos pondremos en contacto pronto.');
          contactForm.reset();
        } else {
          alert('❌ Error: ' + (data.error || 'No se pudo enviar el mensaje'));
        }
      } catch (error) {
        console.error('Error:', error);
        alert('❌ Error al enviar. Intenta de nuevo más tarde.');
      } finally {
        button.disabled = false;
        button.textContent = buttonText;
      }
    });
  }
});
