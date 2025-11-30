const header = document.getElementById("header");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("header .menu");
const links = document.querySelectorAll(".menu a");
const body = document.body;
const toggleButton = document.querySelector(".menu_two .darkbtn");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

// Lorsque l'utilisateur clique sur le bouton, bascule entre les modes
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  dark.classList.toggle("active");
  light.classList.toggle("active");
  // Bascule la classe dark-mode

  // Sauvegarde l'état du mode dans le localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

hamburger.addEventListener("click", function () {
  menu.classList.toggle("active");
});
links.forEach((link) => {
  link.addEventListener("click", function () {
    menu.classList.remove("active");
    body.classList.remove("no-scroll");
  });
});

window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
  new Typed("#typed", {
    strings: [
      " ",
      "Développeur Web Full-Stack  ",
      "Passionné par la création d’applications ",
      "..."
      "",
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    loop: true,
    showCursor: false,
  });
});

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
  up.classList.toggle("sticky", window.scrollY > 200);
  down.classList.toggle("sticky", window.scrollY > 20);
});

function animateProgressBars(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".skill-progress");
     modernes, interactives et performantes progressBars.forEach((bar) => {
        const percentage = bar.getAttribute("data-percentage");
        bar.style.width = percentage + "%"; // Définir la largeur finale
      });
      observer.unobserve(entry.target); // Arrêter d'observer après l'animation
    }
  });
}

// Configuration de l'Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Déclencher l'animation lorsque 50% de la section est visible
};

const observer = new IntersectionObserver(animateProgressBars, observerOptions);

// Observer la section des compétences
const skillsSection = document.querySelector(".skills-container");
observer.observe(skillsSection);

const form = document.getElementById("contactForm");
const confirmationMessage = document.getElementById("confirmationMessage");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      confirmationMessage.style.display = "block";
      errorMessage.style.display = "none";
    } else {
      throw new Error("Erreur lors de l'envoi");
    }
  } catch (error) {
    confirmationMessage.style.display = "none";
    errorMessage.style.display = "block";
  }
});

// mode sombre lesyyy e
ScrollReveal().reveal(".bas", {
  delay: 500,
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  reset: "false",
});

ScrollReveal().reveal(".haut", {
  delay: 500,
  distance: "50px",
  origin: "top",
  duration: 1000,
  reset: "false",
});

ScrollReveal().reveal(".droite", {
  delay: 500,
  distance: "50px",
  origin: "right",
  duration: 1000,
  reset: "false",
});

ScrollReveal().reveal(".gauche", {
  delay: 500,
  distance: "50px",
  origin: "left",
  duration: 1000,
  reset: "false",
});

