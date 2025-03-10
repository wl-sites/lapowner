// Sélection des éléments
const navLinks = document.getElementById("navLinks");
const burger = document.querySelector(".burger");

// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
    navLinks.classList.toggle("active");
}

// Fonction pour fermer le menu
function closeMenu() {
    navLinks.classList.remove("active");
}

// Ferme le menu lorsqu'on clique sur un lien
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", closeMenu);
});

// Ferme le menu lorsqu'on clique en dehors du menu
document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
        closeMenu();
    }
});


// burger Animation 
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        // Ajoute ou enlève la classe active pour l'animation du menu
        nav.classList.toggle("nav-active");

        // Anime chaque lien avec un délai progressif
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""; // Si l'animation est déjà là, on la réinitialise
            } else {
                link.style.animation = `fadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Animation du burger en mode croix
        burger.classList.toggle("toggle");
    });
});

/* Animation keyframes */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}`;
document.head.appendChild(style);


// clic 
document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll("#navLinks a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien

            let targetId = this.getAttribute("href").substring(1); // Récupère l'ID de la section
            let targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Ajuste selon la hauteur du header si nécessaire
                    behavior: "smooth"
                });
            }
        });
    });
});

// toggle
document.getElementById("themeToggle").addEventListener("click", function() {
    document.documentElement.classList.toggle("root-2");
});


// sign in 
document.addEventListener("DOMContentLoaded", () => {
    const signInButton = document.getElementById("signIn");
    const overlay = document.getElementById("overlay");
    const loginForm = document.getElementById("loginForm");
    const closeBtn = document.getElementById("closeBtn");

    // Afficher le formulaire et l'overlay
    signInButton.addEventListener("click", (event) => {
        event.preventDefault();
        overlay.style.display = "block";
        loginForm.style.display = "block";
    });

    // Cacher le formulaire et l'overlay
    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
        loginForm.style.display = "none";
    });

    // Cacher le formulaire en cliquant sur l'overlay
    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        loginForm.style.display = "none";
    });
});


// id 
window.addEventListener("scroll", function() {
    let themeToggle = document.getElementById("themeToggle");
    let header = document.getElementById("header");

    // Sauvegarde de la position initiale
    let initialThemeToggleTop = themeToggle.offsetTop;
    let initialHeaderTop = header.offsetTop;

    // Appliquer transform pour garder les éléments fixes
    themeToggle.style.transform = `translateY(${window.scrollY}px)`;
    header.style.transform = `translateY(${window.scrollY}px)`;
});
