const projectContainer = document.querySelector(".projects-container");

const boxes = document.querySelectorAll(".project");

const navButtons = document.querySelectorAll(".nav-button");

const primaryProjectTitle = document.getElementById("primaryProjectTitle");

function isVisible(projectElement) {
  const rect = projectElement.getBoundingClientRect();
  return rect.x >= 0 && rect.right <= window.innerWidth;
}

let index = 1;

projectContainer.addEventListener("scroll", () => {
  boxes.forEach((box) => {
    const projectNum = parseInt(box.id.match(/project(\d+)/)?.[1]);
    
    if (projectNum && isVisible(box)) {
      index = projectNum;

      if (projectNum === 1) {
        primaryProjectTitle.classList.remove("fade-out");
        primaryProjectTitle.classList.add("fade-in");
      } else if (projectNum === 2) {
        primaryProjectTitle.classList.remove("fade-in");
        primaryProjectTitle.classList.add("fade-out");
      }
    }
  });
});

function scrollToProject(targetIndex) {
  projectContainer.scrollBy({
    left: (screen.width - screen.width * 0.15) * (targetIndex - index),
    behavior: "smooth",
  });
  updateNavButtons(targetIndex);
}

navButtons.forEach((button, i) => {
  button.addEventListener("click", () => scrollToProject(i + 1));
});

const navLeft = document.getElementById("navLeft");
const navRight = document.getElementById("navRight");

navLeft.addEventListener("click", () => {
    if (index > 1) {
        scrollToProject(index - 1);
    } else {
        scrollToProject(7);
    }
});

navRight.addEventListener("click", () => {
    if (index < 7) {
        scrollToProject(index + 1);
    } else {
        scrollToProject(1);
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const navBar = document.querySelector(".nav-bar");
  navBar.style.opacity = "0";
  navBar.style.animation = "navBarSlideDown 0.5s 1.5s ease-out forwards";
});

const date = new Date();
let year = date.getFullYear();
let footerText = document.getElementById("footerText");
footerText.innerHTML = year + " @ Dylan Li";