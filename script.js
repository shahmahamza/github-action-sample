// ============================
// MOBILE MENU
// ============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Close menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// ============================
// DOMAIN SEARCH
// ============================

const domainForm = document.getElementById("domainForm");
const domainInput = document.getElementById("domainInput");
const domainExtension = document.getElementById("domainExtension");
const domainResult = document.getElementById("domainResult");

domainForm.addEventListener("submit", (event) => {

    event.preventDefault();

    let domain = domainInput.value.trim();

    // Remove existing extensions
    domain = domain
        .replace(".com", "")
        .replace(".in", "")
        .replace(".net", "")
        .replace(".org", "");

    if (domain === "") {

        domainResult.textContent =
            "Please enter a domain name.";

        return;
    }

    const fullDomain =
        domain + domainExtension.value;

    domainResult.textContent =
        "🎉 " + fullDomain +
        " is available for this demo!";

});


// ============================
// PRICING BUTTONS
// ============================

const priceButtons =
    document.querySelectorAll(".price-btn");

priceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const plan =
            button.parentElement.querySelector("h3").textContent;

        alert(
            "You selected the " +
            plan +
            " hosting plan! 🚀"
        );

    });

});


// ============================
// CONTACT FORM
// ============================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        formMessage.style.color = "#dc2626";

        formMessage.textContent =
            "Please fill in all fields.";

        return;
    }


    formMessage.style.color = "#16a34a";

    formMessage.textContent =
        "Thanks, " +
        name +
        "! Your message has been received. 🎉";


    contactForm.reset();

});


// ============================
// SCROLL REVEAL
// ============================

const cards = document.querySelectorAll(
    ".feature-card, .price-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});


// Add animation class

const style = document.createElement("style");

style.textContent = `
    .feature-card.show,
    .price-card.show {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(style);
