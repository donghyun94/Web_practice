const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";

// 로컬 저장소에 입력받은 이름을 저장
function saveName(name) {
    localStorage.setItem(USER_LS, name);
}

// submit 때 실행하는 함수
function handleSubmit(event) {
    event.preventDefault(); // submit을 했을 때 새로고침되는 현상을 막는다.
    showGreeting(input.value);
    saveName(input.value);
}

// 로컬 저장소에 이름 데이터가 없으면 입력 받음
function askForName() {
    form.classList.add("showing");
    form.addEventListener("submit", handleSubmit);
}

// 로컬 저장소에 이름 데이터가 있으면 인사함
function showGreeting(text) {
    form.classList.remove("showing");
    greeting.classList.add("showing");
    greeting.innerText = `Hello ${text}!`;
}

// 로컬 저장소의 이름 데이터 유무에 따른 함수 실행
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser == null) {
        askForName();
    } else {
        showGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();
