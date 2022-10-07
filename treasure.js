let box1 = document.getElementById("1");
let box2 = document.getElementById("2");
let box3 = document.getElementById("3");
let box4 = document.getElementById("4");
let box5 = document.getElementById("5");
let box6 = document.getElementById("6");
let box7 = document.getElementById("7");
let box8 = document.getElementById("8");
let box9 = document.getElementById("9");

box1.onclick = function() { selection(1) };
box2.onclick = function() { selection(2) };
box3.onclick = function() { selection(3) };
box4.onclick = function() { selection(4) };
box5.onclick = function() { selection(5) };
box6.onclick = function() { selection(6) };
box7.onclick = function() { selection(7) };
box8.onclick = function() { selection(8) };
box9.onclick = function() { selection(9) };

//this is where the treasure is hidden
let treasure = randomRange(1,9);

//Returns a random number within a chosen range
function randomRange(min, max) { 

    return Math.floor(Math.random() * (max - min + 1)) + min;
//Math.floor() rounds down to the nearest whole number  e.i. 10 = 0 - 9  
//Math.random() returns a random decimal between 0 - 0.99
}

//pick stores and compares the user's treasure selection
function selection(pick) { 
    
    let lose = document.querySelector(".lose");
    let win = document.querySelector(".win");
    let ocean = new Audio("assets/ocean.mp3");
    let open = new Audio("assets/open-chest.mp3");
    let treasureChest = new Audio("assets/treasure-chest.mp3");

    if (pick == treasure) {
        treasureChest.play();
        win.classList.remove("hide"); //shows message
        setTimeout(function() { win.classList.add("hide") }, 15000); //Gives time to celebrate, hides again
        treasure = randomRange(1,9); //after win asigns a different random number to treasure

    } else {
        open.play();
        lose.classList.remove("hide"); //shows message
        setTimeout(function() { 
            lose.classList.add("hide");
            ocean.play();
        }, 2500 ); //hides again
    }
}
