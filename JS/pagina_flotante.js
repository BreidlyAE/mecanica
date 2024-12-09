
        // Mostrar la ventana flotante al cargar la página
        window.onload = function() {
            const popupOverlay = document.getElementById('popupOverlay');
            popupOverlay.style.display = 'flex'; // Mostrar la ventana flotante
        };

        // Cerrar la ventana flotante
        document.getElementById('closePopup').addEventListener('click', function() {
            const popupOverlay = document.getElementById('popupOverlay');
            popupOverlay.style.display = 'none';
        });
    