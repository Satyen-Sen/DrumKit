var kitSize = document.querySelectorAll(".drum").length;

for (var i = 0; i < kitSize; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", mouseClick);

  function mouseClick() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  }
}

// Detecting Keyboard Click
document.addEventListener("keydown", keyPress);

function keyPress (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
}

function makeSound(key) {

  switch (key) {
    case "z":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "x":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "c":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "v":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "b":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "n":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "m":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default: console.log(key);
  }
}


function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function name() {activeButton.classList.remove("pressed");}, 100);
}

