// MOBILE MENU

const menuIcon = document.getElementById("menu-icon");

const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {

        menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});


// CLOSE MENU AFTER CLICK

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


// TYPING ANIMATION

const typingText = document.querySelector(".typing");

const words = [
    "Frontend Developer",
    "Web Designer",
    "Creative Developer"
];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

    }


    let speed = deleting ? 50 : 100;


    if (!deleting && charIndex === currentWord.length) {

        deleting = true;

        speed = 1500;

    } else if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex++;

        if (wordIndex >= words.length) {

            wordIndex = 0;

        }

        speed = 500;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();


// ACTIVE NAVBAR

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// REVEAL ANIMATION

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});


document.querySelectorAll(
    ".section-heading, .about-content, .skill-card, .project-card, .contact-container"
).forEach(element => {

    observer.observe(element);

});