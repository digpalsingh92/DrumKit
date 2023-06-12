var numOfDrums = document.querySelectorAll(".drum").length;
console.log(numOfDrums);

//Detecting for button press

for (let i = 0; i < numOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var ButtoninnerHTML = this.innerHTML
       makeSound(ButtoninnerHTML);
       Animation(ButtoninnerHTML);
        
    });
}

// Detcting for keyboard Press

document.addEventListener("keydown", function(event){ //event listener added to whole document
   makeSound(event.key);
   Animation(event.key);
})

function makeSound (key){
    switch (key) {
            case "w":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();

                break;

                case "a":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

                case "s":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();

                case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

                case "j":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

                case "k":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

                case "l":
                var kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
                break;
        
            default: 
                console.log("press the Right Key")
                break;
        }
}

function Animation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}