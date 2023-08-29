"use strict";

// contact animations
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

$(".contact-details").on("mouseover", (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
});

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

// hobby faq
$("#faq-hobby").on("mouseenter", (e) => {
  cursor.setVideo("/static/video/faq-hobby.mp4");
});

$("#faq-hobby").on("mouseleave", (e) => {
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

// ! section scrolling
// getting positions

// about section
const aboutLink = document.getElementById("about-section");
let aboutPos = aboutLink.offsetTop;

$(".about-nav-link").on("click", (e) => {
  console.log("click");
  $(document).scrollTop(aboutPos);
});

// work section
const workLink = document.getElementById("work-section");
let workPos = workLink.offsetTop;
$(".work-nav-link").on("click", (e) => {
  console.log("click");
  $(document).scrollTop(workPos);
});

// faq section
const faqLink = document.getElementById("faq-section");
let faqPos = faqLink.offsetTop;
$(".faq-nav-link").on("click", (e) => {
  console.log("click");
  $(document).scrollTop(faqPos);
});

// contact section
const contactLink = document.getElementById("contact-section");
let contactPos = contactLink.offsetTop;
$(".contact-nav-link").on("click", (e) => {
  console.log("click");
  $(document).scrollTop(contactPos);
});

// ! checking for mobile device
function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

let isNotPC = detectMob();

if (isNotPC) {
  cursor.destroy();
}
