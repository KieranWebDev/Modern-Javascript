const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
function loadEventListeners() {
  //add task event
  form.addEventListener('submit', addTask);
  //remove task event
  taskList.addEventListener('click', removeTask);

  clearBtn.addEventListener('click', clearTasks);
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
    //clearinput
    taskInput.value = '';
    console.log(li);
  }
  e.preventDefault();
}

function removeTask(e) {
  //targeting ancher tag element - default was selecting i(framer motion icon)
  if (e.target.parentElement.classList.contains('delete-item')) {
    //confirm delete
    if (confirm('are you sure?')) {
      //remove item
      e.target.parentElement.parentElement.remove();
      console.log(e.target);
    }
  }
}

function clearTasks() {
  if (confirm('Are you sure you want to clear the task list?')) {
    taskList.innerHTML = '';
  }
  //alternative way (faster)
  //   while (taskList.firstChild) {
  //     taskList.removeChild(taskList.firstChild);
  //   }
}

//Load all event listeners
loadEventListeners();
