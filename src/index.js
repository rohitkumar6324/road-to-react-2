import navbar from "../components/navbar.js";
import {
    search,
    cSearch,
    debounce,
    sortSearch,
    filterSearch,
} from "../scripts/fetch.js";

import "../styles/style.css"

document.querySelector("#navbar").innerHTML = navbar();

const categories = document.querySelector("#categories").children;
console.log(categories);

for (let option of categories) {
    option.addEventListener("click", cSearch);
}

document.querySelector("#query").addEventListener("keydown", search);
document.querySelector("#query").addEventListener("input", debounce);
document.querySelector("#sort").addEventListener("change", sortSearch);
document.querySelector("#filter").addEventListener("change", filterSearch);