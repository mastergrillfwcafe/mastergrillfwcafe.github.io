document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile nav toggle ---
  const toggleButton = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav");

  if (toggleButton && navMenu) {
    toggleButton.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle("show");
      toggleButton.classList.toggle("active", isOpen);
      toggleButton.textContent = isOpen ? "✕" : "☰";
    });

    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !toggleButton.contains(e.target)) {
        navMenu.classList.remove("show");
        toggleButton.classList.remove("active");
        toggleButton.textContent = "☰";
      }
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        toggleButton.classList.remove("active");
        toggleButton.textContent = "☰";
      });
    });
  }

  // --- Make .menu-card fully clickable (same tab) ---
  document.querySelectorAll(".menu-card").forEach((card) => {
    const link = card.querySelector("a");

    if (link) {
      // Clicking anywhere on the card goes to that link
      card.addEventListener("click", (e) => {
        if (!e.target.closest("a")) {
          window.location.href = link.href; // ✅ open in same tab
        }
      });

      // Prevent button click from triggering twice
      link.addEventListener("click", (e) => e.stopPropagation());
    }
  });
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

document.addEventListener("DOMContentLoaded", () => {
    // Make entire .menu-card clickable (for UX)
    document.querySelectorAll(".menu-card").forEach((card) => {
        const link = card.querySelector("a");

        // If the card contains a valid link
        if (link) {
            // Make card click open same link (in new tab)
            card.addEventListener("click", (e) => {
                // Prevent duplicate clicks from nested elements
                if (!e.target.closest("a")) {
                    window.open(link.href, "_blank");
                }
            });

            // Ensure button clicks don't trigger the card click event
            link.addEventListener("click", (e) => {
                e.stopPropagation(); // stop bubbling to card
            });
        }
    });
});