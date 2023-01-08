function changePicture1(event) {
  imgOne.setAttribute("src", "src/images/heart.png");
}
let imgOne = document.querySelector("#one");
imgOne.addEventListener("click", changePicture1);

function changePicture2(event) {
  imgTwo.setAttribute("src", "src/images/ski.png");
}
let imgTwo = document.querySelector("#two");
imgTwo.addEventListener("click", changePicture2);

function changePicture3(event) {
  imgThree.setAttribute("src", "src/images/whirligig.png");
}
let imgThree = document.querySelector("#three");
imgThree.addEventListener("click", changePicture3);

function changePicture5(event) {
  imgFife.setAttribute("src", "src/images/owl.png");
}
let imgFife = document.querySelector("#fife");
imgFife.addEventListener("click", changePicture5);

function changePicture6(event) {
  imgSix.setAttribute("src", "src/images/car-gift.png");
}
let imgSix = document.querySelector("#six");
imgSix.addEventListener("click", changePicture6);

function changePicture7(event) {
  imgSeven.setAttribute("src", "src/images/nutcracker.png");
}
let imgSeven = document.querySelector("#seven");
imgSeven.addEventListener("click", changePicture7);
