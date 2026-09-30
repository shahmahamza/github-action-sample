function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");
}

function choosePlan() {
    alert("Starter plan selected!");
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("form-message");

    message.textContent =
        `Thanks, ${name}! Your message has been received.`;

    event.target.reset();
}
