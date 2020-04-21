const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDo";
const toDo = []; // toDo 리스트 배열

// 로컬 저장소에 ToDo 리스트를 저장하는 함수
function saveToDo() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDo));
}
// ToDo 리스트를 추가하는 함수
function addToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDo.length + 1;

    delBtn.innerText = "X";
    span.innerText = text;
    li.appendChild(span); // 텍스트 붙이기
    li.appendChild(delBtn); // 버튼 붙이기
    li.id = newId;
    toDoList.appendChild(li); //li를 리스트에 붙이기

    const toDoObj = { text: text, id: newId };
    toDo.push(toDoObj);
    saveToDo();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    addToDo(currentValue);
    toDoInput.value = "";
}

// 로컬 저장소에 있는 ToDo 리스트를 불러오는 함수
function loadToDo() {
    const loadedToDo = localStorage.getItem(TODO_LS);
    if (loadedToDo != null) {
        const parsedToDo = JSON.parse(loadedToDo);
        parsedToDo.forEach(function (todo) {
            addToDo(todo.text);
        });
    }
}

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
