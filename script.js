document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("text");
    const textArray = ["Frontend Developer", "Programmer", "VideoGame Developer"];
    let index = 0;
    let isDeleting = false;
    let typingSpeed = 250; // Velocidad de escritura en milisegundos

    function type() {
        const currentText = textArray[index];
        if (!isDeleting) {
            // Escribir
            textElement.textContent = currentText.slice(0, textElement.textContent.length + 1);
        } else {
            // Borrar
            textElement.textContent = currentText.slice(0, textElement.textContent.length - 1);
        }

        if (!isDeleting && textElement.textContent === currentText) {
            // Comienza a borrar después de un retraso
            isDeleting = true;
            typingSpeed = 300; // Retraso antes de borrar
        } else if (isDeleting && textElement.textContent === "") {
            // Cambiar a la siguiente línea después de borrar
            isDeleting = false;
            index = (index + 1) % textArray.length;
            typingSpeed = 100; // Restaura la velocidad de escritura
        }

        setTimeout(type, typingSpeed);
    }

    type();
});

function toggleDetails(projectId) {
    const details = document.getElementById(projectId);
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}