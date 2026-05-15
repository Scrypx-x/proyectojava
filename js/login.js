document.getElementById('login-form').addEventListener('submit', function(event) {
    // Evita que el formulario se envíe de la manera tradicional (recargando la página)
    event.preventDefault();

    // Captura los valores de los inputs
    const userInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Credenciales predefinidas
    const userCorrecto = "admin";
    const passwordCorrecta = "1234";

    // Validación
    if (userInput === userCorrecto && passwordInput === passwordCorrecta) {
        // Guardamos el usuario en localStorage para poder usarlo en index.html
        localStorage.setItem('usuarioLogueado', userInput);
        
        alert('¡Acceso concedido!');
        
        // Redirecciona al index.html
        window.location.href = 'index.html';
    } else {
        alert('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
    }
});