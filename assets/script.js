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