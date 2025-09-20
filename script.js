// Typing Effect
const texts = ["Web Dev", "3D Design"];
const typingElement = document.getElementById("typing-text");
let textIndex = 0, charIndex = 0, isDeleting = false;
const typingSpeed = 100, erasingSpeed = 50, delayBetween = 1500;

function typeLoop() {
    const currentText = texts[textIndex];
    if (!isDeleting && charIndex < currentText.length) {
        typingElement.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeLoop, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        typingElement.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeLoop, erasingSpeed);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeLoop, delayBetween);
    }
}
window.onload = typeLoop;

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Close when clicking outside any modal
window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};