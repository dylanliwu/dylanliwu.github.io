const subLandingTitle1 = document.getElementById("subLandingTitle1");
const subLandingTitle2 = document.getElementById("subLandingTitle2");

subLandingTitle2.style.display = "none";

let intervalId;
let timeoutId;
let isAnimating = false; // Flag to prevent multiple executions

function toggleFade() {
  if (isAnimating) return; // Prevent execution if already animating
  isAnimating = true;

  if (subLandingTitle2.classList.contains("fade-in")) {
    subLandingTitle2.classList.remove("fade-in");
    subLandingTitle2.classList.add("fade-out");
    subLandingTitle1.classList.remove("fade-out");
    subLandingTitle1.classList.add("fade-in");
    setTimeout(() => {
      subLandingTitle2.style.display = "none";
      subLandingTitle1.style.display = "inline";
      isAnimating = false; // Reset flag after animation
    }, 300);
  } else {
    subLandingTitle2.classList.remove("fade-out");
    subLandingTitle2.classList.add("fade-in");
    subLandingTitle1.classList.remove("fade-in");
    subLandingTitle1.classList.add("fade-out");
    setTimeout(() => {
      subLandingTitle2.style.display = "inline";
      subLandingTitle1.style.display = "none";
      isAnimating = false; // Reset flag after animation
    }, 300);
  }
}

function startFadeInterval() {
  timeoutId = setTimeout(() => {
    intervalId = setInterval(toggleFade, 3500);
    subLandingTitle1.classList.remove("slide-down");
  }, 1250);
}

function stopFadeInterval() {
  clearInterval(intervalId);
  clearTimeout(timeoutId);
}

startFadeInterval();

subLandingTitle1.addEventListener("mouseenter", stopFadeInterval);
subLandingTitle2.addEventListener("mouseenter", stopFadeInterval);

subLandingTitle1.addEventListener("mouseleave", startFadeInterval);
subLandingTitle2.addEventListener("mouseleave", startFadeInterval);

subLandingTitle1.addEventListener("click", toggleFade);
subLandingTitle2.addEventListener("click", toggleFade);

const projectContainer = document.querySelector(".projects-container");

const boxes = document.querySelectorAll(".project");

const navButton1 = document.getElementById("navButton1");
const navButton2 = document.getElementById("navButton2");
const navButton3 = document.getElementById("navButton3");
const navButton4 = document.getElementById("navButton4");
const navButton5 = document.getElementById("navButton5");

const primaryProjectTitle = document.getElementById("primaryProjectTitle");

function isVisible(projectElement) {
  const rect = projectElement.getBoundingClientRect();
  const xVisible = rect.x >= 0 && rect.right <= window.innerWidth;
  return xVisible;
}

let index = 1;

projectContainer.addEventListener("scroll", () => {
  boxes.forEach((box) => {
    if (box.id.indexOf("project1") !== -1 && isVisible(box)) {
      index = 1;
      navButton1.style.width = '30px';
      navButton2.style.width = '10px';
      navButton3.style.width = '10px';
      navButton4.style.width = '10px';
      navButton5.style.width = '10px';
      primaryProjectTitle.classList.remove("fade-out")
      primaryProjectTitle.classList.add("fade-in")
    }
    if (box.id.indexOf("project2") !== -1 && isVisible(box)) {
      index = 2;
      navButton1.style.width = '10px';
      navButton2.style.width = '30px';
      navButton3.style.width = '10px';
      navButton4.style.width = '10px';
      navButton5.style.width = '10px';
      primaryProjectTitle.classList.remove("fade-in")
      primaryProjectTitle.classList.add("fade-out")
    }
    if (box.id.indexOf("project3") !== -1 && isVisible(box)) {
      index = 3;
      navButton1.style.width = '10px';
      navButton2.style.width = '10px';
      navButton3.style.width = '30px';
      navButton4.style.width = '10px';
      navButton5.style.width = '10px';
    }
    if (box.id.indexOf("project4") !== -1 && isVisible(box)) {
      index = 4;
      navButton1.style.width = '10px';
      navButton2.style.width = '10px';
      navButton3.style.width = '10px';
      navButton4.style.width = '30px';
      navButton5.style.width = '10px';
    }
    if (box.id.indexOf("project5") !== -1 && isVisible(box)) {
      index = 5;
      navButton1.style.width = '10px';
      navButton2.style.width = '10px';
      navButton3.style.width = '10px';
      navButton4.style.width = '10px';
      navButton5.style.width = '30px';
    }
  });
});

function scrollToProject(targetIndex) {
  if (window.matchMedia("(min-width: 900px)").matches) {
    projectContainer.scrollBy({
      left: (screen.width - screen.width * 0.15) * (targetIndex - index),
      behavior: "smooth",
    });
  }
}

navButton1.addEventListener("click", () => scrollToProject(1));
navButton2.addEventListener("click", () => scrollToProject(2));
navButton3.addEventListener("click", () => scrollToProject(3));
navButton4.addEventListener("click", () => scrollToProject(4));
navButton5.addEventListener("click", () => scrollToProject(5));

const date = new Date();
let year = date.getFullYear();
let footerText = document.getElementById("footerText");
footerText.innerHTML = year + " @ Dylan Li"