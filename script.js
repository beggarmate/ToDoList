const toDoUl = document.body.querySelector(".todo__list-ul");
const toDoForm = document.body.querySelector(".form");
const addTaskButtonOpen = document.body.querySelector(".add-tasks-open-button");
const addTaskButtonClose = document.body.querySelector(
  ".add-tasks-close-button"
);
const addTaskButton = document.body.querySelector(
  ".add-tasks-button-container"
);
const toDoBox = document.body.querySelector(".todo-box");
const toDoListBorder = document.body.querySelector(".bord");

const swapAddTaskButton = () => {
  addTaskButtonOpen.classList.toggle("display-none");
  addTaskButtonClose.classList.toggle("display-none");
};

const showToDoList = () => {
  toDoBox.classList.toggle("display-none");
};

addTaskButton.addEventListener("click", (event) => {
  swapAddTaskButton();
  showToDoList();
});

const taskObject = {
  listItemClass: "todo__list-item",

  createNewLi: () => {
    const newLi = document.createElement("li");
    return newLi;
  },

  newLiAddClass: (newLi) => {
    newLi.classList.add(taskObject.listItemClass);
    return newLi;
  },

  newLiAddInUl: (newLi) => {
    toDoUl.append(newLi);
  },

  newLiAddDraggableAttribute: (newLi) => {
    newLi.setAttribute("draggable", "true");
  },

  createNewTask: (text) => {
    const newLi = taskObject.newLiAddClass(taskObject.createNewLi());
    taskObject.newLiAddInUl(newLi);
    taskObject.newLiAddDraggableAttribute(newLi);
    newLi.textContent = text;
  },
};

toDoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { target } = event;
  if (target.taskInput.value) {
    taskObject.createNewTask(target.taskInput.value);
  }
  target.taskInput.value = "";
});
