let taskInput = document.getElementById('taskInput');
let addBtn = document.getElementById('addBtn');
let noTasks = document.getElementById('noTasks');
let newtaskes = document.getElementById('newtaskes')

// add task
let addtask = () => {
    let datatask = taskInput.value;
    if (datatask.trim() == "" || taskInput.value.length < 3 || taskInput.value.length > 20) {
        alert("you must enter data")
    } else {
        noTasks.remove();
        newtaskes.innerHTML += `<div class="alert alert-info">
        ${datatask} <i class="float-right delete fas fa-times-circle"></i>
        </div>`;
    }

    taskInput.value= "";
}

addBtn.addEventListener('click', addtask);
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    } 
})