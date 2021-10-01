const searchBtn = document.querySelector("#search-btn"),
      inputBar = document.querySelector("#input-bar");

searchBtn.addEventListener("click",
  () => inputBar.classList.toggle("visible"));

/* Slide header */
const headerElt = document.querySelector("#slide-header"),
      bodySections = document.querySelectorAll(".slide-body .section"),
      linksElt = headerElt.querySelectorAll("a"),
      links = Array.from(linksElt);

links.forEach(link => {
  function diselect(elt) { elt.classList.remove("selected"); };
  function hide(elt) { elt.classList.remove("visible"); }
  link.addEventListener("click", (e) => {
    e.preventDefault();
    links.forEach(diselect);
    link.classList.add("selected");

    const targetId = link.getAttribute("data-target"),
    targetElt = document.querySelector(`#${targetId}`);

    if (!targetElt) return;

    Array.from(bodySections).forEach(hide);
    targetElt.classList.add("visible");
  })
});

/* Simple slide animation */
const prevControl = document.querySelector(".prev"),
      nextControl = document.querySelector(".next"),
      visibleModules = ".visible .module";

prevControl.addEventListener("click", () => {
  const modulesElt = document.querySelectorAll(visibleModules);
  Array.from(modulesElt).forEach(module => {
    let currLeftPos = Number(module.style.left.split("%")[0]);
    let newLeftPos = currLeftPos - 25;
    newLeftPos = newLeftPos < 0 ? 75 : newLeftPos;
    module.style.left = `${newLeftPos}%`;
  });
});
nextControl.addEventListener("click", () => {
  const modulesElt = document.querySelectorAll(visibleModules);
  Array.from(modulesElt).forEach(module => {
    let currLeftPos = Number(module.style.left.split("%")[0]);
    let newLeftPos = currLeftPos + 25;
    newLeftPos = newLeftPos > 75 ? 0 : newLeftPos;
    module.style.left = `${newLeftPos}%`;
  });
});