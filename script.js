const todoListEl = document.querySelector(".todo-list");
const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const showErrEl = document.querySelector(".show-error");

function retrieveTasks() {
  todoListEl.innerHTML = localStorage.getItem("task");
}
retrieveTasks();

todoListEl.addEventListener("click", (e) => {
  e.preventDefault();
  let target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.remove();
  } else if (target.tagName === "SPAN") {
    target.classList.toggle("line-through");
    target.previousElementSibling.classList.toggle("fa-solid");
  } else if (target.tagName === "LI") {
    target.querySelector("span").classList.toggle("line-through");
    target.querySelector(".radio").classList.toggle("fa-solid");
  } else if (target.classList.contains("radio")) {
    target.nextElementSibling.classList.toggle("line-through");
    target.classList.toggle("fa-solid");
  }
  saveListEl();
});

function clearInput() {
  inputEl.value = "";
}

function checkInputValue() {
  if (inputEl.validity.valueMissing) {
    showErrEl.textContent = "input required";
  }
}

function createListEl() {
  let li = document.createElement("li");
  li.className = "p-4 border-slate-500 border-b flex items-center";
  const markup = `   
        <i class="fa-regular fa-circle-check fa-lg radio"style="color: #b197fc"></i>
            <span class="mx-2">${inputEl.value}</span>
        <i class="fa-solid fa-xmark fa-lg ml-auto delete"style="color: #b197fc"></i>
`;
  li.insertAdjacentHTML("beforeend", markup);
  todoListEl.appendChild(li);
}

inputEl.addEventListener("input", (e) => {
  if (inputEl.validity.valid) {
    showErrEl.textContent = "";
  } else checkInputValue();
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputEl.validity.valid) {
    checkInputValue();
    return;
  }
  createListEl();
  saveListEl();
  clearInput();
});

function saveListEl() {
  localStorage.setItem("task", todoListEl.innerHTML);
}

const completedTasks = document.querySelector(".completed");
const allTasks = document.querySelector(".all");
const clearCompletedTasks = document.querySelector(".clear-completed");

completedTasks.addEventListener("click", () => {
  todoListEl.querySelectorAll("span").forEach((span) => {
    console.log("hello");
    if (!span.classList.contains("line-through")) {
      span.parentElement.classList.add("hidden");
    }
  });
  saveListEl();
});

allTasks.addEventListener("click", () => {
  todoListEl.querySelectorAll("li").forEach((li) => {
    li.classList.remove("hidden");
  });
  saveListEl();
});

clearCompletedTasks.addEventListener("click", () => {
  todoListEl.querySelectorAll("span").forEach((span) => {
    if (span.classList.contains("line-through")) {
      span.parentElement.remove();
    }
  });
  saveListEl();
});

console.log(todoListEl.querySelectorAll("li").length);

const remainingTasksEl = document.querySelector(".remaining-tasks");
function displayNumberofTasks() {
  setInterval(() => {
    remainingTasksEl.textContent = todoListEl.querySelectorAll("li").length;
  }, 1000);
  saveListEl();
}
displayNumberofTasks();
