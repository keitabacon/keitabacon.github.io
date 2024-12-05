document.addEventListener("DOMContentLoaded", () => {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
            btn.textContent = content.style.display === "block" ? "Collapse" : "Expand";
        });
    });
});
