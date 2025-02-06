document.addEventListener("mousemove", parallax);

function parallax(e) {
  document.querySelectorAll(".image").forEach(function(move) {
    let movingValue = move.getAttribute("data-value");
    let x = (e.clientX - window.innerWidth / 2) * movingValue;
    let y = (e.clientY - window.innerHeight / 2) * movingValue;

    move.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

const date = new Date();
let year = date.getFullYear();
let footerText = document.getElementById("footerText");
footerText.innerHTML = year + " @ Dylan Li"