const searchBtn = document.querySelector("#search-btn");
const inputBar = document.querySelector("#input-bar");

searchBtn.addEventListener("click",
  () => inputBar.classList.toggle("visible"));

/* Slide header */
const headerElt = document.querySelector("#slide-header");
const bodySections = document.querySelectorAll(".slide-body .section");
const linksElt = headerElt.querySelectorAll("a");
const links = Array.from(linksElt);

links.forEach(link => {
  function diselect(elt) { elt.classList.remove("selected"); };
  function hide(elt) { elt.classList.remove("visible"); }
  link.addEventListener("click", (e) => {
    e.preventDefault();
    links.forEach(diselect);
    link.classList.add("selected");

    const targetId = link.getAttribute("data-target");
    const targetElt = document.querySelector(`#${targetId}`);

    if (!targetElt) return;

    Array.from(bodySections).forEach(hide);
    targetElt.classList.add("visible");
  })
});

/* Simple slide animation */
const prevControl = document.querySelector(".prev");
const nextControl = document.querySelector(".next");
const cardContainer = document.querySelector("#modules");

prevControl.addEventListener("click", () => {
  const first = cardContainer.querySelector(".module");
  cardContainer.appendChild(first);
});
nextControl.addEventListener("click", () => {
  const modules = cardContainer.querySelectorAll(".module");
  const first = modules[0],
        last = modules[modules.length - 1];
  cardContainer.insertBefore(last, first);
});