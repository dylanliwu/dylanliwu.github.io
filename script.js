const menubutton = document.getElementById("menubutton");
const menucontent = document.getElementById("menucontent");

menubutton.addEventListener("click", () => {
    menubutton.classList.toggle("change");
    menucontent.style.display = menubutton.classList.contains("change") ? "flex" : "none";
});

document.addEventListener("click", (event) => {
    if (!menubutton.contains(event.target) && !menucontent.contains(event.target)) {
        menubutton.classList.remove("change");
        menucontent.style.display = "none";
    }
});

document.getElementById("aboutbox").addEventListener("click", function() {
    window.location.href = "about.html";
});

document.getElementById("workbox").addEventListener("click", function() {
    window.location.href = "work.html";
});

document.getElementById("spbox").addEventListener("click", function() {
    window.location.href = "sp.html";
});