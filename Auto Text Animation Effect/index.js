const containerEl = document.querySelector(".container");

const careers = ["Web Developer","Fullstack Developer","Frontend Developer"];

let careerIndex = 0;

let characterIndex = 0;

upadateText()
function upadateText(){
    characterIndex++;
    containerEl.innerHTML =`<h1>I am a ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
    if(characterIndex === careers[careerIndex].length){
        careerIndex++;
        characterIndex =0;
    }
    if (careerIndex === careers.length){
        careerIndex = 0;
    }
    setTimeout(upadateText,400);

}

