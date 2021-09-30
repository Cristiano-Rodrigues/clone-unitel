const searchBtn = document.querySelector("#search-btn");
const inputBar = document.querySelector("#input-bar");

searchBtn.addEventListener("click",
  () => inputBar.classList.toggle("visible"));