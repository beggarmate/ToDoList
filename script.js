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

  dataId: 0,

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
    newLi.setAttribute("data-Id", taskObject.dataId);
  },

  createNewDeleteButton: function () {
    const button = document.createElement("button");
    button.textContent = "X";
    button.className = "delete-button";
    button.setAttribute("data-Id", taskObject.dataId);
    taskObject.dataId++;
    button.addEventListener("click", (event) => {
      const { target } = event;
      const deleteElement = document.body.querySelector(
        `[data-Id="${target.dataset.id}"]`
      );
      deleteElement.remove();
    });
    return button;
  },

  correthLengthText: (text) => {
    // if (text.length > 86) {
    //   return text.slice(0, 86);
    // }
    return text;
  },

  createNewTask: (text) => {
    const newLi = taskObject.newLiAddClass(taskObject.createNewLi());
    taskObject.newLiAddInUl(newLi);
    taskObject.newLiAddDraggableAttribute(newLi);
    newLi.append(taskObject.createNewDeleteButton());
    const newP = document.createElement("p");
    newP.textContent = taskObject.correthLengthText(text);
    newLi.prepend(newP);
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
