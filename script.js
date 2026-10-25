// Mobile Menu
const menu = document.getElementById("menu-toggle");

document.querySelectorAll(".nav-links-container a").forEach(link => {
    link.addEventListener("click", () => {
        menu.checked = false;
    });
});


// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", (e) => {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Hero Typing Effect
const heroText = document.getElementById("typing-text");

const roles = [
    "Software Developer",
    "Frontend Developer",
    "Java Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeHero() {

    if (!heroText) return;

    const text = roles[roleIndex];

    heroText.textContent = text.substring(0, charIndex);


    if (!deleting) {

        charIndex++;

        if (charIndex > text.length) {

            deleting = true;

            setTimeout(typeHero, 1200);

            return;
        }

    } else {

        charIndex--;

        if (charIndex < 0) {

            charIndex = 0;
            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }


    setTimeout(
        typeHero,
        deleting ? 60 : 100
    );
}

typeHero();


// About Typing Effect
const aboutText =
    document.getElementById("about-typing-text");

const aboutRoles = [
    "Software Developer",
    "Frontend Developer"
];

let aboutRoleIndex = 0;
let aboutCharIndex = 0;
let aboutDeleting = false;


function typeAbout() {

    if (!aboutText) return;

    const text =
        aboutRoles[aboutRoleIndex];

    aboutText.textContent =
        text.substring(0, aboutCharIndex);


    if (!aboutDeleting) {

        aboutCharIndex++;

        if (aboutCharIndex > text.length) {

            aboutDeleting = true;

            setTimeout(typeAbout, 1200);

            return;
        }

    } else {

        aboutCharIndex--;

        if (aboutCharIndex < 0) {

            aboutCharIndex = 0;
            aboutDeleting = false;

            aboutRoleIndex++;

            if (
                aboutRoleIndex >=
                aboutRoles.length
            ) {
                aboutRoleIndex = 0;
            }

        }

    }


    setTimeout(
        typeAbout,
        aboutDeleting ? 60 : 100
    );
}

typeAbout();