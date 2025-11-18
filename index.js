let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //play sound
    let buttonInnerHTML = this.innerHTML;
    let sureButton=buttonInnerHTML.toLowerCase();
    makeSound(sureButton);
    
    //play Animation
    buttonAnimation(sureButton);
  });
}

document.addEventListener("keypress", function (event) {
  //play sound
  makeSound(event.key);
  //play Animation
    buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w": // crash audio play
      let crash = new Audio("./sounds/Assets_sounds_crash.mp3");
      crash.play();
      break;

    case "a":
      let tom1 = new Audio("./sounds/Assets_sounds_tom-1.mp3");
      tom1.play();
      break;

    case "s":
      let snare = new Audio("./sounds/Assets_sounds_snare.mp3");
      snare.play();
      break;

    case "d":
      let tom3 = new Audio("./sounds/Assets_sounds_tom-3.mp3");
      tom3.play();
      break;

    case "j":
      let kick = new Audio("./sounds/Assets_sounds_kick-bass.mp3");
      kick.play();
      break;

    case "k":
      let tom2 = new Audio("./sounds/Assets_sounds_tom-2.mp3");
      tom2.play();
      break;

    case "l":
      let tom4 = new Audio("./sounds/Assets_sounds_tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("#" + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
