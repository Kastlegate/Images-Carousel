import './style.css';
import './all.css';
import {  moveLeft, moveRight, selectedNav } from "./carouselFunctions";


// background image
document.body.style.backgroundImage = "url('../src/wheel.jpg')";






// array to hold the images
let imagesArray = new Array();
// images that go into the imagesArray
imagesArray[0] = new Image();
imagesArray[0].src = './eye.jpg';
imagesArray[1] = new Image();
imagesArray[1].src = '../src/hunt.jpg';
imagesArray[2] = new Image();
imagesArray[2].src = '../src/dragon.jpg';
imagesArray[3] = new Image();
imagesArray[3].src = '../src/shadow.jpg';
imagesArray[4] = new Image();
imagesArray[4].src = '../src/heaven.jpg';
imagesArray[5] = new Image();
imagesArray[5].src = '../src/chaos.jpg';



// let frame = document.createElement("img");
//     frame.id = "frame";
//     frame.src = imagesArray[0].src
//     container.appendChild(frame);

//container for the carousel
let container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

let book1 = document.createElement("img")
book1.id = "book1";
book1.dataset.bookId = 1;
book1.src = imagesArray[0].src;
book1.classList.add("book");
book1.style.left = "0px";
container.appendChild(book1);
let book2 = document.createElement("img")
book2.id = "book2";
book2.dataset.bookId = 2;
book2.src = imagesArray[1].src;
book2.classList.add("book");
container.appendChild(book2);
let book3 = document.createElement("img")
book3.id = "book3";
book3.dataset.bookId = 3;
book3.src = imagesArray[2].src;
book3.classList.add("book");
container.appendChild(book3);
let book4 = document.createElement("img")
book4.id = "book4";
book4.dataset.bookId = 4;
book4.src = imagesArray[3].src;
book4.classList.add("book");
container.appendChild(book4);
let book5 = document.createElement("img")
book5.id = "book5";
book5.dataset.bookId = 5;
book5.src = imagesArray[4].src;
book5.classList.add("book");
container.appendChild(book5);
let book6 = document.createElement("img")
book6.id = "book6";
book6.dataset.bookId = 6;
book6.src = imagesArray[5].src;
book6.classList.add("book");
container.appendChild(book6);



let dotContainer = document.createElement("div")
dotContainer.id = "dotContainer";
document.body.appendChild(dotContainer);

//navigation dots
let navDot1 = document.createElement("div");
navDot1.id = "navDot1";
navDot1.classList.add("navDotSelected");
navDot1.dataset.navDot = 1; 
navDot1.addEventListener("click", selectedNav);
dotContainer.appendChild(navDot1);
let navDot2 = document.createElement("div");
navDot2.id = "navDot2";
navDot2.classList.add("navDot");
navDot2.dataset.navDot = 2;
navDot2.addEventListener("click", selectedNav);
dotContainer.appendChild(navDot2);
let navDot3 = document.createElement("div");
navDot3.id = "navDot3";
navDot3.classList.add("navDot");
navDot3.dataset.navDot = 3;
navDot3.addEventListener("click", selectedNav);
dotContainer.appendChild(navDot3);
let navDot4 = document.createElement("div");
navDot4.id = "navDot4";
navDot4.classList.add("navDot");
navDot4.dataset.navDot = 4;
navDot4.addEventListener("click", selectedNav);
dotContainer.appendChild(navDot4);
let navDot5 = document.createElement("div");
navDot5.id = "navDot5";
navDot5.classList.add("navDot");
navDot5.dataset.navDot = 5;
navDot5.addEventListener("click", selectedNav);
dotContainer.appendChild(navDot5);
let navDot6 = document.createElement("div");
navDot6.id = "navDot6";
navDot6.classList.add("navDot");
navDot6.dataset.navDot = 6;
navDot6.addEventListener("click", selectedNav);
dotContainer.appendChild(navDot6);

// Arrows for manual navigation
let arrowContainer = document.createElement("div")
arrowContainer.id = "arrowContainer";
document.body.appendChild(arrowContainer);
let leftArrow = document.createElement("div");
    leftArrow.id = "LeftArrow";
    leftArrow.className = "fas fa-arrow-left"
    leftArrow.classList.add('arrow');
    leftArrow.addEventListener("click", moveLeft)
    arrowContainer.appendChild(leftArrow);
let rightArrow = document.createElement("div");
    rightArrow.id = "rightArrow";
    rightArrow.className = "fas fa-arrow-right"
    rightArrow.classList.add('arrow');
    rightArrow.addEventListener("click", moveRight)
    arrowContainer.appendChild(rightArrow);

  
    
