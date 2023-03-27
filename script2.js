const play = document.querySelector(".play");
play.style.display = "none";
const mute = document.querySelector(".mute");
const two = document.querySelector(".twoImg");
// const audio = document.querySelector(".audio");

let audio = new Audio(
  "https://d1wy21vtjs6qq7.cloudfront.net/storyworks/specials/age-of-change/assets/audio/rainforest.mp3"
);
two.addEventListener("click", () => {
  if (play.style.display === "none") {
    play.style.display = "block";
    mute.style.display = "none";
    audio = new Audio(
      "https://d1wy21vtjs6qq7.cloudfront.net/storyworks/specials/age-of-change/assets/audio/rainforest.mp3"
    );
    audio.play();
    audio.loop = "true";
  } else {
    play.style.display = "none";
    mute.style.display = "block";
    audio.pause();
  }
});
