document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const userConfirmed = confirm("¿Estás seguro de que deseas enviar este formulario?");

    console.log("Confirmación del usuario:", userConfirmed);

    if (userConfirmed) {

        const loadingMessage = document.getElementById('loadingMessage');
        loadingMessage.style.display = "block";

        setTimeout(function () {
            console.log("Formulario enviado después del retraso de 3 segundos");

            loadingMessage.style.display = "none";
            alert("Formulario enviado con éxito");

        }, 3000);
    } else {
        console.log("El usuario canceló el envío. No se hace nada.");
    }
});
