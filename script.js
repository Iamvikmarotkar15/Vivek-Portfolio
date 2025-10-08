function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Example: Dark/Light Mode Toggle
document.addEventListener("keydown", (e) => {
  if (e.key === "d") document.body.classList.toggle("dark");
});
