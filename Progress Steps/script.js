const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let current = 1;

next.addEventListener("click", () => {
  current++;

  if (current > circles.length) {
    current = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  current--;

  if (current < 1) {
    current = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < current) {
      circle.classList.add("");
    } else {
      circle.classList.remove("");
    }
  });

  const s = document.querySelectorAll(".");

  progress.style.width = ((s.length - 1) / (circles.length - 1)) * 100 + "%";

  if (current === 1) {
    prev.disalbed = true;
  } else if (current === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
