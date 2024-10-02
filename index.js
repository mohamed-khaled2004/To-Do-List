


let head = document.querySelector("head");
head.innerHTML += `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`;

let ul = document.querySelector("ul");
let input = document.querySelector("input");
let tasks = [];

function renderTasks() {
  ul.innerHTML = "";
  tasks.forEach((el, index) => {
    ul.innerHTML += `
    <li class="d-flex gap-3 py-2 align-items-center justify-content-between ${el.isEdit ? 'edit-mode' : ''}">
        <p class="mb-0" 
            onclick="toggleTaskDone(${index})"
            style="text-decoration: ${el.isDone ? 'line-through' : 'none'}">
            ${el.name}
        </p>
        <div class="d-flex gap-3">
            <input onclick="toggleTaskDone(${index})" type="checkbox" ${el.isDone ? 'checked' : ''}>
    
            <button class="  bin-button  btn btn-danger" onclick="deleteTask(${index})" ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 39 7"
                class="bin-top"
              >
                <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
                <line
                  stroke-width="3"
                  stroke="white"
                  y2="1.5"
                  x2="26.0357"
                  y1="1.5"
                  x1="12"
                ></line>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 33 39"
                class="bin-bottom"
              >
                <mask fill="white" id="path-1-inside-1_8_19">
                  <path
                    d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                  ></path>
                </mask>
                <path
                  mask="url(#path-1-inside-1_8_19)"
                  fill="white"
                  d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                ></path>
                <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
                <path stroke-width="4" stroke="white" d="M21 6V29"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 89 80"
                class="garbage"
              >
                <path
                  fill="white"
                  d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
                ></path>
              </svg>
            </button>
       

  <!-- زر مدمج بالأيقونة والنص -->
<button class="btn btn-warning" onclick="updateTask(${index})" style="display: flex; align-items: center; background-color: #ffc107; border: none; padding: 10px 20px; cursor: pointer; color: white;">
  <!-- حاوية الأيقونة -->
  <div class="svg-wrapper-1" style="margin-right: 8px;">
    <div class="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        style="fill: currentColor;"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
  </div>
  <!-- نص الزر -->
  <span>Update</span>
</button>

        </div>
    </li>`;
  });
}

function addNewTask() {
  let newTaskName = input.value;
  let taskObj = {
    name: newTaskName,
    isDone: false,
    isEdit: false,
  };
  tasks.push(taskObj);
  input.value = ''; 
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleTaskDone(index) {
  tasks[index].isDone = !tasks[index].isDone;
  renderTasks();
}

function updateTask(index) {
  let newTaskName = prompt("Enter new task name:", tasks[index].name);
  if (newTaskName !== null && newTaskName.trim() !== "") {
    tasks[index].name = newTaskName.trim();
    renderTasks();
  }
}