const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.querySelector(".remaining-counter");

textareaEl.addEventListener("keyup", () => {
    updateCounter();
});

function updateCounter() {
    const totalCharacters = textareaEl.value.length;
    const maxCharacters = textareaEl.getAttribute("maxlength");

    totalCounterEl.innerText = totalCharacters;
    remainingCounterEl.innerText = maxCharacters - totalCharacters;
}
