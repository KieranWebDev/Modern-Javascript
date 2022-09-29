const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
function loadEventListeners() {
  //DOM load Event
  document.addEventListener('DOMContentLoaded', getTasks);
  //add task event
  form.addEventListener('submit', addTask);
  //remove task event
  taskList.addEventListener('click', removeTask);
  //clear tasks
  clearBtn.addEventListener('click', clearTasks);
  //filter tasks
  filter.addEventListener('keyup', filterTasks);
}

//get tasks from lS
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    //create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    //create text nod and append to li
    li.appendChild(document.createTextNode(task));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //add  link to li
    li.appendChild(link);
    //add li to ul
    taskList.appendChild(li);
  });
}

//add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task, please.');
  } else {
    //create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    //create text nod and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //add  link to li
    li.appendChild(link);
    //add li to ul
    taskList.appendChild(li);

    //store in Local Storage
    storeTaskInLocalStorage(taskInput.value);
    //clearinput
    taskInput.value = '';
    console.log(li);
  }
  e.preventDefault();
}
//store task
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
  //targeting ancher tag element - default was selecting i(framer motion icon)
  if (e.target.parentElement.classList.contains('delete-item')) {
    //confirm delete
    if (confirm('are you sure?')) {
      //remove item
      e.target.parentElement.parentElement.remove();
      console.log(e.target);

      //remove from lS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}
//remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
}

function clearTasks() {
  if (confirm('Are you sure you want to clear the task list?')) {
    taskList.innerHTML = '';
  }
  //alternative way (faster)
  //   while (taskList.firstChild) {
  //     taskList.removeChild(taskList.firstChild);
  //   }
  clearTasksFromLocalStorage();
}
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

function filterTasks(e) {
  //accessing text types in input
  const text = e.target.value.toLowerCase();

  // selects classes, loops through
  document.querySelectorAll('.collection-item').forEach(function (task) {
    //compares item and text. if they dont match changes display to none.
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
  console.log(text);
}
//Load all event listeners
loadEventListeners();
