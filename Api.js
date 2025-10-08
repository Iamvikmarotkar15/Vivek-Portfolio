// Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.classList.toggle("fa-sun");
  toggle.classList.toggle("fa-moon");
});

// Typing Effect
const text = "Vivek Marotkar";
let index = 0;
function typingEffect() {
  document.querySelector(".typing").textContent = text.slice(0, index);
  index++;
  if (index <= text.length) setTimeout(typingEffect, 120);
}
typingEffect();
