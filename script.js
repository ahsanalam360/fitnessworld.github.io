document.addEventListener("DOMContentLoaded", () => {
    // 1. Display Welcome Message on Index Page
    if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
        const welcomeMessage = document.getElementById("welcome-message");
        welcomeMessage.textContent = "Welcome to Fitness World!";
        welcomeMessage.classList.remove("hidden");
    }

    // 2. Interactive Greeting Functionality
    const greetButton = document.getElementById("greet-button");
    const nameInput = document.getElementById("name-input");
    const greetingOutput = document.getElementById("greeting-output");

    greetButton.addEventListener("click", () => {
        const name = nameInput.value.trim();
        if (name) {
            greetingOutput.textContent = `Hello, ${name}! We're excited to have you here. 😊`;
        } else {
            greetingOutput.textContent = "Please enter your name to get a personalized greeting.";
        }
    });
});
