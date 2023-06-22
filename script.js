const intro = document.querySelector(".intro")
music = new Audio("game_music.mp3")
// This event listener waits for the DOM to be fully loaded before executing the callback function
document.addEventListener("DOMContentLoaded", () => {
  // This setTimeout function waits for 2 seconds before executing the callback function

  setTimeout(() => {
    // This line adds the "display-none" class to the "intro" element, effectively hiding it from view
    intro.classList.add("display-none")
    music.play()
  }, 2000)

  setInterval(() => {
    music.play()
  }, 10)
})
