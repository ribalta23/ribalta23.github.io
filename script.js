let position = window.pageYOffset;

window.onscroll = function() {
    let scroll = window.pageYOffset;
    if(position >= scroll) {
        document.getElementById('navbar').style.top = '0';
    }
    else {
        document.getElementById('navbar').style.top = '-100px';
    }
    position = scroll;
}

//---------------------------------------------------------------

var menu = 0;

function menuDrop() {
    menuD = document.getElementById('headerDrop');
    if (menu == 0) {
        menuD.style.top = '0';
        menu = 1;
    } 
    else {
        menuD.style.top = '-110vh';
        menu = 0;
    }
}
function amagarMenu(){
    menuD = document.getElementById('headerDrop');
    menuD.style.display = 'none';
}

//---------------------------------------------------------------
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
//-------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    const sliderItems = document.querySelectorAll(".slider-item");
    let currentIndex = 0;

    setInterval(function() {
        // Oculta el ícono actual
        sliderItems[currentIndex].style.opacity = 0;

        // Actualiza el índice al siguiente elemento
        currentIndex = (currentIndex + 1) % sliderItems.length;

        // Muestra el nuevo ícono
        sliderItems[currentIndex].style.opacity = 1;
    }, 2000); // Cambia cada 2 segundos (2000 milisegundos)
});