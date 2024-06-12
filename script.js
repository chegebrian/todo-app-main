const todoListEl = document.querySelector(".todo-list");
const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const showErrEl = document.querySelector(".show-error");

todoListEl.addEventListener("click", (e) => {
  e.preventDefault();
  let target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.remove();
  }
  if (target.tagName.toLowerCase() === "li"|| "span") {
    console.log(target);
    console.log("clicked");
  }
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
        <i class="fa-regular fa-circle fa-lg"style="color: #b197fc"></i>
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
  clearInput();
});
