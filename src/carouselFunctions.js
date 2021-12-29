
// const books = document.querySelectorAll(".book");
// const navDots = document.querySelectorAll(".navDot");

// function to get and return the index number of the currently displayed book, which has
// a css left property of 0px (for example, book3 would return the number 3 if it were
// the current book being displayed.)
function getCurrentBookNumber(){
    
    for (let index = 1; index <= 6; index++){
        // creates a vaiable "book" from the get element id and index
        let book = document.getElementById("book" + index)
        //grabs the left position of each book
        let leftCssValue = getComputedStyle(book).getPropertyValue("left");
        if (leftCssValue === "0px") {
            return index;
          }

        
    }
}

//takes a number from the moveLeft and moveRight functions, and shows whatever book is entered.
function showBook(bookNumber){

    // validates the the book number is in the correct range
    if (bookNumber < 1 || bookNumber > 6) return;

    //calculate distance
    const distance = bookNumber - getCurrentBookNumber();

    for (let index = 1; index <= 6; index++){
        // creates a vaiable "book" from the get element id and index
        let book = document.getElementById("book" + index)
        //grabs the left position of each book
        let leftCssPosition = getComputedStyle(book).getPropertyValue("left");
        let leftCssNumber = Number(leftCssPosition.slice(0, leftCssPosition.length - 2));
        book.style.left = leftCssNumber - distance * 200 + "px";
    }
}

function moveLeft() {
    const currentBookNumber = getCurrentBookNumber();
    if (currentBookNumber > 1) {
      showBook(currentBookNumber - 1);
      incrementNav(currentBookNumber - 1)
    } else {
      showBook(6);
      incrementNav(6)
    }
  }
  
function moveRight() {
   
    const currentBookNumber = getCurrentBookNumber();
    if (currentBookNumber < 6) {
    showBook(currentBookNumber + 1);
    incrementNav(currentBookNumber + 1)
    } else {
    showBook(1);
    incrementNav(1)
    }
    
    
}

function selectedNav(){

    for (let index = 1; index <= 6; index++){
        let navDot = document.getElementById("navDot" + index);
        navDot.className = "";
        navDot.classList.add("navDot")
    }
    let index = this.getAttribute("data-nav-dot");
    let navDot = document.getElementById("navDot" + index);
    navDot.classList.add("navDotSelected");    
    
    showBook(index)
}

function incrementNav(num){

    for (let index = 1; index <= 6; index++){
        let navDot = document.getElementById("navDot" + index);
        navDot.className = "";
        navDot.classList.add("navDot")
    }
    
    let index = num;
    let navDot = document.getElementById("navDot" + index);
    navDot.classList.add("navDotSelected");  
    console.log(index)  
    
    // showBook(index)
}

function startCarousel() {
    var slideShow = setInterval(() => {
      moveRight();
    }, 4000);
  }

function stopShow() {
    clearInterval(slideShow);
  }

  
  startCarousel()

export { moveLeft, moveRight, selectedNav,  }