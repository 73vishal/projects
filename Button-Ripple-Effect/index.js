const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (e) => {
    const xPos = e.pageX - btn.offsetLeft;
    const yPos = e.pageY - btn.offsetTop;

    btn.style.setProperty("--xPos", `${xPos}px`);
    btn.style.setProperty("--yPos", `${yPos}px`);
});
