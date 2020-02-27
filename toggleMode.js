import { element } from "prop-types";

document.getElementById("toggleMode").onclick = toggleMode()

function toggleMode() {
    let webpage = document.body;
    webpage.classList.toggle("dark-mode");
};