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
  if (e.target.closest(".trailer-hide")) {
    if (e.target.closest(".inflator")) {
      overlay.style.clipPath = "circle(400px at var(--x) var(--y))";
    } else {
      overlay.style.clipPath = "circle(10px at var(--x) var(--y))";
    }
  } else {
    overlay.style.clipPath = "circle(0px at var(--x) var(--y))";
  }
});

// // trailer
// const trailer = document.querySelector("#trailer");

// const animateTrailer = (e, interacting) => {
//   const x = e.clientX - trailer.offsetWidth / 2,
//     y = e.clientY - trailer.offsetWidth / 2;

//   // const keyframes = {
//   //   transform: `translate(${x}px, ${y}px) scale(${interacting ? 20 : 1})`,
//   // };

//   const keyframes = {
//     transform: `translate(${x}px, ${y}px) scale(${interacting ? 0 : 1})`,
//   };

//   trailer.animate(keyframes, {
//     duration: 1000,
//     fill: "forwards",
//   });
// };

// window.onmousemove = (e) => {
//   const interactable = e.target.closest(".trailer-hide"),
//     interacting = interactable !== null;
//   if (!interacting) {
//     trailer.style.opacity = "100%";
//   }

//   animateTrailer(e, interacting);
// };

// mouse - follower
const cursor = new MouseFollower({
  visible: false,
  skewingMedia: 0.5,
});

$(".trailer-hide").on("mousemove", (e) => {
  cursor.hide();
});

$(".trailer-show").on("mousemove", (e) => {
  cursor.show();
});

// japanese faq
$("#faq-japanese").on("mouseenter", (e) => {
  cursor.setVideo("/static/video/faq-japanese.mp4");
});

$("#faq-japanese").on("mouseleave", (e) => {
  cursor.removeVideo();
});

// coding faq
$("#faq-coding").on("mouseenter", (e) => {
  cursor.setVideo("/static/video/faq-coding.mp4");
});

$("#faq-coding").on("mouseleave", (e) => {
  cursor.removeVideo();
});

// project faq
$("#faq-project").on("mouseenter", (e) => {
  cursor.setVideo("/static/video/faq-project.mp4");
});

$("#faq-project").on("mouseleave", (e) => {
  cursor.removeVideo();
});

// works
$(".emojibase").on("mouseenter", (e) => {
  cursor.setVideo("/static/video/emojibase.mp4");
});

$(".emojibase").on("mouseleave", (e) => {
  cursor.removeVideo();
});

$(".rock").on("mouseenter", (e) => {
  cursor.setVideo("/static/video/rockpaperscissors.mp4");
});

$(".rock").on("mouseleave", (e) => {
  cursor.removeVideo();
});
