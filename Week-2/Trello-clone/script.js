const addButton = document.getElementById("add-task");
const dropzones = document.getElementsByClassName("dropzone");

let taskInput = document.getElementById("task-value");

// const confirmBtn = document.getElementById("confirm-status");
// const taskStatusSelect = document.getElementById("task-status-select");
// taskStatusSelect.addEventListener("change", () => {
//   alert(taskStatusSelect.value);
// });

/**
 * Event handler Functions
 */

const clearTaskInput = () => {
  taskInput.value = "";
};

function removeTask(event) {
  // event represents the remove button
  // Access the <ul> list by moving 2 levels up
  let tasks = event.target.parentNode.parentNode;
  // Access the <li> element which is the direct parent
  let task = event.target.parentNode;
  tasks.removeChild(task);
}

function finishEdit(event) {
  // event.preventDefault();
  let taskContentInput = event.target.previousSibling.previousSibling;
  let taskCard = event.target.parentNode;
  let editButton = event.target;

  let taskContentDiv = document.createElement("p");
  taskContentDiv.classList.add("task-content");
  taskContentDiv.innerHTML = taskContentInput.value;

  taskCard.replaceChild(taskContentDiv, taskContentInput);
  editButton.innerHTML = "Edit";
}

function editTask(event) {
  let taskContentValue = event.target.previousSibling.previousSibling.innerHTML;
  let taskContentDiv = event.target.previousSibling.previousSibling;
  let taskCard = event.target.parentNode;
  let editButton = event.target;

  let editInput = document.createElement("input");
  editInput.setAttribute("type", "text");
  editInput.setAttribute("value", `${taskContentValue}`);
  editInput.classList.add("task-content");

  taskCard.replaceChild(editInput, taskContentDiv);
  editButton.innerHTML = "Done";
}

function moveTask(params) {}

// A global variable to store the selected task
let task;

// DRAG & DROP
function dragStart(event) {
  event.target.classList.add("hold");
  task = event.target;
  setTimeout(function () {
    event.target.classList.add("invisible");
  }, 0);
}

function dragEnter(event) {
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("hovered");
  }
}

function dragOver(event) {
  event.preventDefault(); // https://stackoverflow.com/a/35428657
}

function dragEnd(event) {
  event.target.classList.remove("invisible");
}

function dragLeave(event) {
  event.target.classList.remove("hovered");
}

function dragDrop(event) {
  event.target.classList.remove("hovered");
  // event represents the column
  // Add the task to the right child. Inspect the element to find the ul is index 3 in childnodes.
  event.target.childNodes[3].append(task);
}

for (let dropzone of dropzones) {
  dropzone.addEventListener("dragenter", dragEnter);
  dropzone.addEventListener("dragover", dragOver);
  dropzone.addEventListener("dragleave", dragLeave);
  dropzone.addEventListener("drop", dragDrop);
}

function createTaskCard() {
  let taskCard = document.createElement("li");
  taskCard.classList.add("task");
  taskCard.classList.add("fill");
  taskCard.setAttribute("draggable", "true");
  taskCard.addEventListener("dragstart", dragStart);
  taskCard.addEventListener("dragend", dragEnd);

  return taskCard;
}

function createTaskContent(taskValue) {
  let taskContent = document.createElement("p");
  taskContent.classList.add("task-content");
  taskContent.innerText = taskValue;

  return taskContent;
}

function createDeleteButton() {
  let trash = document.createElement("div");
  trash.classList.add("trash");
  trash.innerHTML = "&times;";
  trash.addEventListener("click", removeTask);

  return trash;
}

function createEditButton() {
  let editButton = document.createElement("div");
  editButton.classList.add("edit-btn");
  editButton.innerHTML = "Edit";
  editButton.addEventListener("click", (event) => {
    if (editButton.innerHTML == "Edit") {
      editTask(event);
    } else if (editButton.innerHTML == "Done") {
      finishEdit(event);
    }
  });

  return editButton;
}

function createStatusSelectBox() {
  const statusSelectBox = document.createElement("select");
  statusSelectBox.setAttribute("name", "status");
  statusSelectBox.classList.add("task-status-select");

  const backLogOption = document.createElement("option");
  backLogOption.innerHTML = "Backlog";
  backLogOption.setAttribute("value", "backlog");

  const inProgressOption = document.createElement("option");
  inProgressOption.innerHTML = "In Progress";
  inProgressOption.setAttribute("value", "in-progress");

  const reviewOption = document.createElement("option");
  reviewOption.innerHTML = "Review";
  reviewOption.setAttribute("value", "review");

  const doneOption = document.createElement("option");
  doneOption.innerHTML = "Done";
  doneOption.setAttribute("value", "done");

  statusSelectBox.appendChild(backLogOption);
  statusSelectBox.appendChild(inProgressOption);
  statusSelectBox.appendChild(reviewOption);
  statusSelectBox.appendChild(doneOption);

  // statusSelectBox.addEventListener("change", )

  return statusSelectBox;
}

const addTask = (taskValue) => {
  // create task card
  let taskCard = createTaskCard();

  // create p tag that contains task content
  let taskContent = createTaskContent(taskValue);

  // create delete butotn
  let trash = createDeleteButton();

  // create edit button
  let editButton = createEditButton();

  // create status select box
  let statusSelectBox = createStatusSelectBox();

  taskCard.appendChild(taskContent);
  taskCard.appendChild(trash);
  taskCard.appendChild(editButton);
  taskCard.appendChild(statusSelectBox);

  let tasksList = document.getElementById("tasks-added");
  tasksList.insertBefore(taskCard, tasksList.childNodes[0]);
};

const clickEnterToSubmit = (event) => {
  // tasktInput must have non-empty string value to submit
  if (event.key == "Enter" && taskInput.value.length > 0) {
    addTask(taskInput.value);
    clearTaskInput();
  }
};

/**
 * event listener
 */
addButton.addEventListener("click", () => {
  addTask(taskInput.value);
  clearTaskInput();
});

taskInput.addEventListener("keydown", (event) => {
  clickEnterToSubmit(event);
});
