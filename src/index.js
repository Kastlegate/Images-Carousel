import './style.css';
import './all.css';
console.log("Hello World")

// background image
document.body.style.backgroundImage = "url('../src/wheel.jpg')";


//container for the carousel
let container = document.createElement("div");
container.id = "carouselContainer";


// Arrows for manual navigation
let leftArrow = document.createElement("div");
    leftArrow.id = "LeftArrow";
    leftArrow.className = "fas fa-arrow-left"
    leftArrow.classList.add('arrow');
    container.appendChild(leftArrow);
let rightArrow = document.createElement("div");
    rightArrow.id = "rightArrow";
    rightArrow.className = "fas fa-arrow-right"
    rightArrow.classList.add('arrow');

let frame = document.createElement("img");
    frame.id = "frame";
    frame.src = '../src/eye.jpg';
    container.appendChild(frame)


    container.appendChild(rightArrow);


document.body.appendChild(container)