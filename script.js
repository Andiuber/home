const particles = document.getElementById("particles");

for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.top = Math.random() * 100 + "%";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random(3, 6) + "s";
    particles.appendChild(particle);
}