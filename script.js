// const menuButton = document.getElementById("menuButton");
// const menuContent = document.getElementById("menuContent");

// menuButton.addEventListener("click", () => {
//     menuButton.classList.toggle("change");
//     menuContent.style.display = menuButton.classList.contains("change") ? "flex" : "none";
// });

// const handleEvent = (event) => {
//   if (!menuButton.contains(event.target) && !menuContent.contains(event.target)) {
//       menuButton.classList.remove("change");
//       menuContent.style.display = "none";
//   }
// };

// document.addEventListener("click", handleEvent);
// document.addEventListener("scroll", handleEvent);

const projectContainer = document.querySelector(".projects-container");

const boxes = document.querySelectorAll(".project");

const navButton1 = document.getElementById("navButton1");
const navButton2 = document.getElementById("navButton2");
const navButton3 = document.getElementById("navButton3");

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
      primaryProjectTitle.classList.remove("fade-out")
      primaryProjectTitle.classList.add("fade-in")
    }
    if (box.id.indexOf("project2") !== -1 && isVisible(box)) {
      index = 2;
      navButton1.style.width = '10px';
      navButton2.style.width = '30px';
      navButton3.style.width = '10px';
      primaryProjectTitle.classList.remove("fade-in")
      primaryProjectTitle.classList.add("fade-out")
    }
    if (box.id.indexOf("project3") !== -1 && isVisible(box)) {
      index = 3;
      navButton1.style.width = '10px';
      navButton2.style.width = '10px';
      navButton3.style.width = '30px';
      primaryProjectTitle.classList.remove("fade-in")
      primaryProjectTitle.classList.add("fade-out")
    }
  });
});

function scrollToProject(targetIndex) {
  projectContainer.scrollBy({
    left: (screen.width - screen.width * 0.15) * (targetIndex - index),
    behavior: "smooth",
  });
}

navButton1.addEventListener("click", () => scrollToProject(1));
navButton2.addEventListener("click", () => scrollToProject(2));
navButton3.addEventListener("click", () => scrollToProject(3));

