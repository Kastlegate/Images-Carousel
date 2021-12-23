
// const books = document.querySelectorAll(".book");
// const navDots = document.querySelectorAll(".navDot");

//function to get the current book number

function getCurrentBookNumber(){
    
    for (let index = 1; index <= 6; index++){
        // creates a vaiable "book" from the get element id and index
        let book = document.getElementById("book" + index)
        //grabs the left position of each book
        let leftCssPosition = getComputedStyle(book).getPropertyValue("left");
        if (leftCssPosition === "0px") {
            return index;
          }

        console.log("book" + index + "'s " + "Left position is " + leftCssPosition)
    }
}

function showBook(bookNumber){

    // validates theat the book number is in the correct range
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
    } else {
      showBook(6);
    }
  }
  
function moveRight() {

    const currentBookNumber = getCurrentBookNumber();
    if (currentBookNumber < 6) {
    showBook(currentBookNumber + 1);
    } else {
    showBook(1);
    }
}


export { getCurrentBookNumber, moveLeft, moveRight }