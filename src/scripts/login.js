// src/scripts/login.js logica de ingreso de sesión
const form = document.getElementById('loginForm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('email'); // recibe el campo email
    const passwordInput = document.getElementById('password'); // recibe el campo contraseña

    const email = emailInput.value.trim();  //se crea variable con email ingresado
    const password = passwordInput.value.trim();  //se crea variable con email ingresado

    // Ejemplo básico de validación y manejo de errores manual
    if (!email || !password) {
      alert('Error: Todos los campos son obligatorios.'); 
      return;
    }

    if (password.length < 6) {
      alert('Error: La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    console.log('Validación exitosa. Iniciando sesión para:', email);
    
    // Redirigir al dashboard
    window.location.href = '/dashboard';
  });
}