const body = document.querySelector("body");

const IMG_NUM = 5;
const IMAGE_CLASS_NAME = "bgImage"

function printImage(imageNum) {
    const img = new Image();

    img.src = `./img/back${number}.jpg`;
    img.alt = 'background images';
    img.classList.add(IMAGE_CLASS_NAME);
    body.prepend(img);
}

function getRandom() {
    const num = Math.floor(Math.random() * IMG_NUM) + 1;
    return num;
}

function init() {
    const randomNumber = getRandom();
    setTimeout(printImage(randomNumber), 3000);
}



var imgArray = new Array();
imgArray[0] = "./img/back1.jpg";
imgArray[1] = "./img/back2.jpg";
imgArray[2] = "./img/back3.jpg";
imgArray[3] = "./img/back4.jpg";
imgArray[4] = "./img/back5.jpg";

function changeImage() {
    var imgNum = Math.round(Math.random()*3);
    var objImg = document.getElementById("backimg");
    objImg.src = imgArray[imgNum];
    setTimeout(changeImage, 3000);
}
