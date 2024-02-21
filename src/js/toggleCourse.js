import { refs } from "./refs";

const courseBtns = refs.courseBtn;
const toggleBtn = refs.toggleBtn;
const toggleBtnBefore = refs.toggleBtnBefore;
const courseJunior = refs.courseJunior;
const courseProfi = refs.courseProfi;

export const getContent = (content) => {
  toggleBtnBefore.setAttribute("data-value", content);
};

export const toggleCourse = (e, text) => {
  const id = e.target.id;
  if (e.target.id === "profi") {
    toggleBtn.style.setProperty("--left", "50%");
    toggleBtnBefore.setAttribute("data-value", "Digital Design (13-16р.)");
    courseJunior.style.display = "none";
    courseProfi.style.display = "block";
  }

  if (e.target.id === "junior") {
    toggleBtn.style.setProperty("--left", "0");
    toggleBtnBefore.setAttribute("data-value", "Design Junior (10-12р.)");

    courseProfi.style.display = "none";
    courseJunior.style.display = "block";
  }
};

for (let button of courseBtns) {
  button.addEventListener("click", toggleCourse);
}
