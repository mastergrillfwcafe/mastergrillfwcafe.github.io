document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav");

    if (toggleButton && navMenu) {
        // Toggle open/close menu
        toggleButton.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = navMenu.classList.toggle("show");
            toggleButton.classList.toggle("active", isOpen);
            toggleButton.textContent = isOpen ? "✕" : "☰";
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            if (!navMenu.contains(e.target) && !toggleButton.contains(e.target)) {
                navMenu.classList.remove("show");
                toggleButton.classList.remove("active");
                toggleButton.textContent = "☰";
            }
        });

        // Close menu when clicking any nav link
        navMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("show");
                toggleButton.classList.remove("active");
                toggleButton.textContent = "☰";
            });
        });
    }
});

// Animate buttons when they scroll into view
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    buttons.forEach((btn) => observer.observe(btn));
});