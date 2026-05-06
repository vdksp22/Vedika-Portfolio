const text = "Vedika Patil";
const speed = 400;

let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typed-text").textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}

window.onload = typeEffect;