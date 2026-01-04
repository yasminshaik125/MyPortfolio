function sayHello() {
    alert("Hello 👋 Thanks for visiting my portfolio!");
}
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}const text = "Aspiring Software Engineer | Computer Science Student..";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();
function toggleDarkMode() {
    document.body.classList.toggle("dark");

    const btn = document.getElementById("darkModeBtn");
    if (document.body.classList.contains("dark")) {
        btn.innerText = "☀️";
    } else {
        btn.innerText = "🌙";
    }
}

