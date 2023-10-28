const lowerContainer = document.querySelector(".lowercontainer");
const btn = document.querySelector(".btn");
const video = document.querySelector("video");
const closeIcon = document.querySelector(".close-icon");

btn.addEventListener("click", () => {
  lowerContainer.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
  lowerContainer.classList.add("active");
  video.pause();
  video.currentTime = 0;
});
