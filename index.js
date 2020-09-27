var audio = document.querySelectorAll("audio");
var btn = document.querySelectorAll("button");
var btnkeys = [65, 83, 68, 70, 71, 72, 74, 75, 76];

document.body.addEventListener("keydown", function (event) {
  for (let i = 0; i < btnkeys.length; i++) {
    if (event.keyCode === btnkeys[i]) {
      btn[i].style.boxShadow = "0px 4px 20px rgba(0, 0, 0, 1)";
      btn[i].style.transform = "scale(1.3)";
      btn[i].style.opacity = "1";
      audio[i].play();
      audio[i].currentTime = 0;
    }
  }
});

document.body.addEventListener("keyup", function (event) {
  for (let i = 0; i < btnkeys.length; i++) {
    if (event.keyCode === btnkeys[i]) {
      btn[i].style.boxShadow = "0px 0px 0px";
      btn[i].style.opacity = "0.9";
      btn[i].style.transform = "scale(1.0)";
    }
  }
});
