const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDo";
let toDo = []; // toDo 리스트 배열

// 로컬 저장소에 ToDo 리스트를 저장하는 함수
function saveToDo() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDo)); //로컬 저장소는 string 형식의 객체로만 저장할 수 있음
}

// ToDo 리스트를 지우는 함수
function deleteToDo(event) {
    const btn = event.target; // target: event의 대상을 리턴(클릭된 버튼)
    const li = btn.parentNode; // 버튼의 부모니까 해당 버튼이 포함된 리스트임
    toDoList.removeChild(li);

    const cleanToDo = toDo.filter(function (todo) {
        return todo.id != parseInt(li.id); // toDo 리스트 중에서 방금 지운 놈 빼고 리턴하기
    });

    toDo = cleanToDo; // toDo 리스트를 갱신
    saveToDo();
}

// ToDo 리스트를 추가하는 함수
function addToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDo.length + 1; // 투두 리스트의 번호 지정

    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);

    span.innerText = text;
    li.appendChild(span); // 텍스트 붙이기
    li.appendChild(delBtn); // 버튼 붙이기
    li.id = newId; // 투두 리스트의 번호 붙이기
    toDoList.appendChild(li); //li를 리스트에 붙이기

    const toDoObj = { text: text, id: newId };
    toDo.push(toDoObj);
    saveToDo();
}

function handleSubmit(event) {
    event.preventDefault(); // 새로고침 현상 막음
    const currentValue = toDoInput.value;
    addToDo(currentValue); // 입력받은 값을 투두 리스트에 추가
    toDoInput.value = "";
}

// 로컬 저장소에 있는 ToDo 리스트를 불러오는 함수
function loadToDo() {
    const loadedToDo = localStorage.getItem(TODO_LS);
    if (loadedToDo != null) {
        const parsedToDo = JSON.parse(loadedToDo); // string 객체를 json 객체로 변환
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
