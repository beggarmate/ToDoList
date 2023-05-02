const todoList = document.body.querySelector(".todo__list");
const todoListTitle = document.body.querySelector(".todo__list-title");
const todoListUl = document.body.querySelector(".todo__list-ul");

const listCompliteTitle = document.body.querySelector(".list-complite__title");
const listCompliteUl = document.body.querySelector(".list-complite-ul");
const listComplite = document.body.querySelector(".list-complite");
const placeholders = document.body.querySelectorAll(".placeholder");

let draggedItem = null;

const dragStart = (event) => {
  const { target } = event;
  draggedItem = target;
  target.classList.add("hold");
  setTimeout(() => {
    target.classList.add("display-none");
  }, 0);
};

const dragEnd = (event) => {
  const { target } = event;
  target.className = "todo__list-item";
};

const dragOver = (event) => {
  const { target } = event;
  event.preventDefault();
};

const dragEnter = (event) => {
  const { target } = event;
  if (target.className.includes("list-complite")) {
    target.classList.add("hovered");
  }
  if (target.className.includes("todo__list-title")) {
    target.classList.add("hovered");
  }
};

const dragLeave = (event) => {
  const { target } = event;
  if (target.className.includes("list-complite")) {
    target.classList.remove("hovered");
  }
  if (target.className.includes("todo__list-title")) {
    target.classList.remove("hovered");
  }
};

const dragDrop = (event) => {
  const { target } = event;
  todoListTitle.classList.remove("hovered");
  listCompliteTitle.classList.remove("hovered");
  if (target === todoListTitle) {
    console.log(listCompliteUl);
    todoListUl.append(draggedItem);
  }
  if (target === listCompliteTitle) {
    listCompliteUl.append(draggedItem);
  }
};

todoList.addEventListener("dragstart", dragStart);
listComplite.addEventListener("dragstart", dragStart);
todoList.addEventListener("dragend", dragEnd);
listComplite.addEventListener("dragend", dragEnd);

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragOver);
  placeholder.addEventListener("dragenter", dragEnter);
  placeholder.addEventListener("dragleave", dragLeave);
  placeholder.addEventListener("drop", dragDrop);
}
