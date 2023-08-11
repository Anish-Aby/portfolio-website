"use strict";

// FAQ funcitonality
const questions = [...document.querySelectorAll(".question")];
questions.map((question) => {
  let q_text = question.querySelector(".question-header");
  q_text.addEventListener("click", () => {
    questions
      .filter((q) => q !== question)
      .map((q) => q.classList.remove("open"));
    question.classList.toggle("open");
  });
});

// spotlight
const overlay = document.querySelector(".overlay-text-main-container-wrapper");

window.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;

  gsap.to(".overlay-text-main-container-wrapper", {
    "--x": `${x}px`,
    "--y": `${y}px`,
    duration: 0.5,
    ease: "sine.out",
  });
  if (e.target.closest(".inflator")) {
    overlay.style.clipPath = "circle(400px at var(--x) var(--y))";
  } else {
    console.log("not in inflator");
    overlay.style.clipPath = "circle(10px at var(--x) var(--y))";
  }
});
