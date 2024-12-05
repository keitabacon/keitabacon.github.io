function toggleDrop(id,bid) {
    const element = document.getElementById(id);
    const button = document.getElementById(bid);

    // Get the computed style of the element for its display property
    const currentDisplay = window.getComputedStyle(element).display;

    if (currentDisplay === "none") {
        element.style.display = "flex";
        button.innerHTML="Collapse"
    } else {
        element.style.display = "none";
        button.innerHTML="Expand"
    }
}
