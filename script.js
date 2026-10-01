// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }
});


// Close mobile menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = "☰";

    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "#e11d48";

        return;
    }

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been sent successfully 💖";

    formMessage.style.color = "#8b2fc9";

    contactForm.reset();

});


// =========================
// PRICING BUTTON
// =========================

const priceBtn = document.getElementById("priceBtn");

priceBtn.addEventListener("click", function () {

    alert(
        "Thank you for choosing Shahma Premium! 💜\n\nWe will contact you soon."
    );

});


// =========================
// SCROLL ANIMATION
// =========================

const cards = document.querySelectorAll(
    ".about-card, .feature-card, .pricing-card"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.7s ease";

    observer.observe(card);

});
