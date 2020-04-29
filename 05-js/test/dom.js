const list = document.querySelector(".list-cute");
const header = document.querySelector("#header");
const li = document.createElement("li");
const btn = document.createElement("button");

function btnHandler() {
    header.style.background = "pink";
}

function init() {
    btn.innerText = "버튼";
    btn.classList.add("btn");
    btn.addEventListener("click", btnHandler);
    li.appendChild(btn);
    list.appendChild(li);
}

init();
