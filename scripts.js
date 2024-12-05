function toggleDrop(id,bid) {
    const element = document.getElementById(id);
    const button = document.getElementById(bid);
    
    const currentDisplay = window.getComputedStyle(element).display;

    if (currentDisplay === "none") {
        element.style.display = "flex";
        button.innerHTML="Collapse"
    } else {
        element.style.display = "none";
        button.innerHTML="Expand"
    }
}
