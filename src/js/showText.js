import { refs } from "./refs";

const buttons = refs.infoBtn;
const textItems = refs.descriptionText;
const triangleBtns = refs.triangleBtn;

export const showDescription = (e) => {
  const idBtn = e.currentTarget.id;

  for (let textItem of textItems) {
    if (idBtn === textItem.id) {
      textItem.classList.toggle("open");

      if (textItem.classList.contains("open")) {
        for (const triangleBtn of triangleBtns) {
          if (idBtn === triangleBtn.id) {
            triangleBtn.style.transform = "rotate(180deg)";
          }
        }
        textItem.style.height = "auto";
      } else {
        for (const triangleBtn of triangleBtns) {
          if (idBtn === triangleBtn.id) {
            triangleBtn.style.transform = null;
          }
        }

        if (window.screen.width >= 768 && window.screen.width < 1279) {
          textItem.style.height = "130px";
        } else if (window.screen.width >= 1280) {
          textItem.style.height = "198px";
        } else if (window.screen.width >= 320 && window.screen.width < 768) {
          textItem.style.height = "84px";
          textItem.style.backgroundImage = null;
        }
      }
    }
  }
};

for (let button of buttons) {
  button.addEventListener("click", showDescription);
}
