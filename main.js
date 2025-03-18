document.addEventListener("DOMContentLoaded", function () {
    // Animasi typing effect untuk nama dan judul
    const typingTitle = document.getElementById("typing-title");
    const typingSubtitle = document.getElementById("typing-subtitle");

    if (typingTitle) {
        typingTitle.classList.add("typing-effect");
    }

    if (typingSubtitle) {
        setTimeout(() => {
            typingSubtitle.classList.add("typing-effect");
        }, 2000); // Delay untuk subtitle
    }

    // Animasi latar belakang dinamis dengan transisi halus
    const colors = ["#f0a7d5", "#7c82f5", "#a7f5d5", "#ff4081"];
    let currentIndex = 0;

    function changeBackground() {
        document.body.style.background = `linear-gradient(to right, ${colors[currentIndex]}, ${colors[(currentIndex + 1) % colors.length]})`;
        currentIndex = (currentIndex + 1) % colors.length;
    }

    setInterval(changeBackground, 5000); // Ubah latar belakang setiap 5 detik

    // Efek hover hanya pada judul (h3)
    const hoverEffects = document.querySelectorAll(".hover-effect");
    hoverEffects.forEach((effect) => {
        effect.addEventListener("mouseenter", () => {
            effect.style.transform = "translateY(-5px)";
            effect.style.color = "#ff4081";
        });

        effect.addEventListener("mouseleave", () => {
            effect.style.transform = "translateY(0)";
            effect.style.color = "inherit";
        });
    });
});