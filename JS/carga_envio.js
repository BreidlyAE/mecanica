// script.js

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const loadingMessage = document.getElementById('loadingMessage');
    loadingMessage.classList.add('active');
    setTimeout(function() {
        loadingMessage.classList.remove('active'); 
        alert("Formulario enviado con éxito");
    }, 3000); 
});

