const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeClasses();
    panel.classList.add("");
  });
});

function removeClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("");
  });
}
