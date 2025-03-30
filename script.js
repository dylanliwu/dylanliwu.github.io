const projectContainer = document.querySelector(".projects-container");

const boxes = document.querySelectorAll(".project");

const navButton1 = document.getElementById("navButton1");
const navButton2 = document.getElementById("navButton2");
const navButton3 = document.getElementById("navButton3");
const navButton4 = document.getElementById("navButton4");
const navButton5 = document.getElementById("navButton5");
const navButton6 = document.getElementById("navButton6");
const navButton7 = document.getElementById("navButton7");

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
      navButton6.style.width = '10px';
      navButton7.style.width = '10px';
      primaryProjectTitle.classList.remove("fade-out");
      primaryProjectTitle.classList.add("fade-in");
    }
    if (box.id.indexOf("project2") !== -1 && isVisible(box)) {
      index = 2;
      navButton1.style.width = '10px';
      navButton2.style.width = '30px';
      navButton3.style.width = '10px';
      navButton4.style.width = '10px';
      navButton5.style.width = '10px';
      navButton6.style.width = '10px';
      navButton7.style.width = '10px';
      primaryProjectTitle.classList.remove("fade-in");
      primaryProjectTitle.classList.add("fade-out");
    }
    if (box.id.indexOf("project3") !== -1 && isVisible(box)) {
      index = 3;
      navButton1.style.width = '10px';
      navButton2.style.width = '10px';
      navButton3.style.width = '30px';
      navButton4.style.width = '10px';
      navButton5.style.width = '10px';
      navButton6.style.width = '10px';
      navButton7.style.width = '10px';
    }
    if (box.id.indexOf("project4") !== -1 && isVisible(box)) {
      index = 4;
      navButton1.style.width = '10px';
      navButton2.style.width = '10px';
      navButton3.style.width = '10px';
      navButton4.style.width = '30px';
      navButton5.style.width = '10px';
      navButton6.style.width = '10px';
      navButton7.style.width = '10px';
    }
    if (box.id.indexOf("project5") !== -1 && isVisible(box)) {
      index = 5;
      navButton1.style.width = '10px';
      navButton2.style.width = '10px';
      navButton3.style.width = '10px';
      navButton4.style.width = '10px';
      navButton5.style.width = '30px';
      navButton6.style.width = '10px';
      navButton7.style.width = '10px';
    }
    if (box.id.indexOf("project6") !== -1 && isVisible(box)) {
      index = 6;
      navButton1.style.width = '10px';
      navButton2.style.width = '10px';
      navButton3.style.width = '10px';
      navButton4.style.width = '10px';
      navButton5.style.width = '10px';
      navButton6.style.width = '30px';
      navButton7.style.width = '10px';
    }
    if (box.id.indexOf("project7") !== -1 && isVisible(box)) {
      index = 7;
      navButton1.style.width = '10px';
      navButton2.style.width = '10px';
      navButton3.style.width = '10px';
      navButton4.style.width = '10px';
      navButton5.style.width = '10px';
      navButton6.style.width = '10px';
      navButton7.style.width = '30px';
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
navButton6.addEventListener("click", () => scrollToProject(6));
navButton7.addEventListener("click", () => scrollToProject(7));

document.addEventListener("DOMContentLoaded", () => {
  const navBar = document.querySelector(".nav-bar");
  navBar.style.opacity = "0"; // Ensure it's hidden initially
  navBar.style.animation = "navBarSlideDown 0.5s 1.5s ease-out forwards"; // Trigger the animation
});

const date = new Date();
let year = date.getFullYear();
let footerText = document.getElementById("footerText");
footerText.innerHTML = year + " @ Dylan Li";