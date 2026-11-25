
// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = !navLinks.classList.contains("hidden");

        navLinks.classList.toggle("hidden");
        navLinks.classList.toggle("flex");

        menuToggle.textContent = isOpen ? "☰" : "✕";

        menuToggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

    });

    // Close menu after clicking
    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth < 768) {

                navLinks.classList.add("hidden");
                navLinks.classList.remove("flex");

                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");

            }

        });

    });

}

// Current Year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Typing Animation
const typedText = document.getElementById("typedText");

if (typedText) {

    const words = [
        "Full Stack Developer",
        "MERN Stack Developer",
        "Web Developer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        charIndex += deleting ? -1 : 1;

        typedText.textContent =
            currentWord.substring(0, charIndex);

        let speed = deleting ? 50 : 100;

        if (!deleting && charIndex === currentWord.length) {

            deleting = true;
            speed = 1500;

        } else if (deleting && charIndex === 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

            speed = 500;

        }

        setTimeout(typeEffect, speed);

    }

    typeEffect();

}
