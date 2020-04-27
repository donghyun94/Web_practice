const body = document.querySelector("body");

const IMG_NUM = 3;

function paintImg(imgNum) {
    const image = new Image();
    image.src = `img/${imgNum}.jpg`; // 이미지 랜덤 선택!
    image.classList.add("bgImg");
    body.appendChild(image);
}

function generateNum() {
    const number = Math.floor(Math.random() * 3); // 0~3 랜덤 숫자 생성
    return number;
}

function init() {
    const randomNum = generateNum();
    paintImg(randomNum);
}

init();
