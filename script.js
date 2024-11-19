// Select the menu toggle button and nav links
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Toggle menu visibility
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu when a link is clicked (optional)
navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("show");
  }
});
