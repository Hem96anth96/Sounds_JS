for (let index = 0; index < document.querySelectorAll(".drum").length; index++)
  document.querySelectorAll(".drum")[index].addEventListener("click", clickFun);

function clickFun() {
  makeSound(this.innerHTML);
  doAnimation(this.innerHTML);
  
}

document.addEventListener("keydown",eventFunction);

function eventFunction(event) {
    makeSound(event.key);
    doAnimation(event.key);
}

function makeSound(value) {
  switch (value) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();

      break;

    case "a":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();

      break;

    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();

      break;

    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();

      break;

    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();

      break;

    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();

      break;

    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();

      break;

    default:
  }
}

// Define clickrecordArray outside the function to retain its values
var clickrecordArray = [];

// ArraysEqual function to compare arrays
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1.sort();
  arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function doAnimation(anothervalue) {
  document.querySelector("."+anothervalue).classList.add("pressed");

  setTimeout(function(){
      document.querySelector("."+anothervalue).classList.remove("pressed");
  }, 100);

  // Push the value to clickrecordArray
  clickrecordArray.push(anothervalue);

  // Create a unique array
  let uniqueArray = Array.from(new Set(clickrecordArray));

  // Check if uniqueArray is equal to ["w", "a", "s", "d", "j", "k", "l"]
  let targetArray = ["w", "a", "s", "d", "j", "k", "l"];
  if (arraysEqual(uniqueArray, targetArray)) {
    document.querySelector("h1").innerHTML = "Game Over 👂";
  }
}
