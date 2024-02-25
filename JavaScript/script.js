document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("text");
    const textArray = ["Frontend Developer", "Programmer", "VideoGame Developer"];
    let index = 0;
    let isDeleting = false;
    let typingSpeed = 250;

    function type() {
        const currentText = textArray[index];
        if (!isDeleting) {
            textElement.textContent = currentText.slice(0, textElement.textContent.length + 1);
        } else {
            textElement.textContent = currentText.slice(0, textElement.textContent.length - 1);
        }

        if (!isDeleting && textElement.textContent === currentText) {
            isDeleting = true;
            typingSpeed = 300;
        } else if (isDeleting && textElement.textContent === "") {
            isDeleting = false;
            index = (index + 1) % textArray.length;
            typingSpeed = 100;
        }

        setTimeout(type, typingSpeed);
    }

    type();
});

function copy() {
    var correoBox = document.getElementById("correoBox");
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = correoBox.innerText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    Swal.fire({
        title: 'Copied correctly!',
        icon: 'success',
        confirmButtonText: 'Close'
    })
}

  

