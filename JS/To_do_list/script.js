var pending_tasks = [];
var done_taksk = [];
var counter = 0;

function create_task() {
    var input_element = document.querySelector("input");
    var container_elmnt = document.querySelector(".pending-tasks");
    var task = input_element.value;
    if (task.trim() !== '') {
    var idx = counter;
    pending_tasks.push(task);
    input_element.value = "";

    var elmt = `<div id="row-${idx}" class="row">
    <span class="taskt-text">${task}</span>
    <div>
        <button onclick="delete_pending_task(${idx})">
            <img class="icon" src="img/20407009431543238936-32.png" alt="">Delete
        </button>
        <button onclick="done_pending_task(${idx})">
            <img class="icon" src="img/9772771411530273514-32.png" alt="">Done
        </button>
    </div>
</div>`;

    container_elmnt.innerHTML += elmt;
    counter += 1;
}
}

function delete_pending_task(idx) {
    /* pending_tasks.splice(idx, 1); */
    var elemnt = document.querySelector(`#row-${idx}`);
    elemnt.remove();
}

function done_pending_task(idx) {
    var task = pending_tasks[idx];
    done_taksk.push(task);
    var container_elmnt = document.querySelector("table");
    delete_pending_task(idx);

    var elemt = ` <tr id="row-${idx}">                            
    <td>
        <span class="task-text striked">${task}</span></td>
    <td><button onclick="delete_pending_task(${idx})">
        <img class="icon" src="img/20407009431543238936-32.png" alt="">Delete
    </button></td>
</tr>`

container_elmnt.innerHTML += elemt;

}


function delete_pending_task(idx) {
    /* pending_tasks.splice(idx, 1); */
    var elemnt = document.querySelector(`#row-${idx}`);
    elemnt.remove();
}

