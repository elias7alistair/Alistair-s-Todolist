var button = document.getElementById("add-task");
var taskTitle = document.getElementById("task");
var taskdescription = document.getElementById("description");
var ul = document.getElementById("list");

// var delBtn = document.getElementById("deleteBtn");


var taskArray = [
//   {
//     id: 0,
//     taskName: "Get up early",
//     description: "Getting up early is good for health",
//   },
//   {
//       id: 1,
//     taskName: "Get up early",
//     description: "Getting up early is good for health",
//   },
];



button.addEventListener("click", function addTask() {
  if (taskTitle.value.length > 0) {
    addItems();
    resetInput();
  }
});

function addItems() {

    var user = {};
    user.id = taskArray.length;
    user.taskName = taskTitle.value;
    user.description = taskdescription.value;

    taskArray.push(user);

    ul.innerHTML = "";

    printTasks();

//   html = `<li id="1" class="card col span-1-of-5"><div class="task-name"><h3>${taskTitle.value}</h3></div><br/>
//     <div><p>${taskdescription.value}<p/></div>       
//     <div><button id="deleteBtn" class="deleteBtn">Delete</button></div>        
//     </li>`;

//   ul.innerHTML += html;

//   var del = document.getElementsByClassName("deleteBtn");
//   for (i = 0; i < del.length; i++) {
//     del[i].setAttribute("onclick", "deleteitem()");
//   }
}

function printTasks(){
    taskArray.map((data) => {
        html = `<li id="${data.id}" class="card col span-1-of-5"><div class="task-name"><h3>${data.taskName}</h3></div><br/>
  <div><p>${data.description}<p/></div>       
  <div><button id="${data.id}" class="deleteBtn">Delete</button></div>        
  </li>`;

ul.innerHTML += html;

var del = document.getElementsByClassName("deleteBtn");
for (i = 0; i < del.length; i++) {
  del[i].setAttribute("onclick", "deleteitem(this.id)");
}
  }
  )
}

function focusOnDes() {
  if (taskTitle.value.length > 0 && event.which === 13) {
    taskdescription.select();
  }
}

function additemsafterkeypress() {
  if (taskTitle.value.length > 0 && event.which === 13) {
    addItems();
    resetInput();
    taskdescription.blur();
  }
}

function resetInput() {
  taskTitle.value = "";
  taskdescription.value = "";
}

taskTitle.addEventListener("keypress", focusOnDes);
taskdescription.addEventListener("keypress", additemsafterkeypress);

function deleteitem(id) {

    console.log(id);
  var del = event.target.parentNode.parentNode;

  var filterArray = taskArray.filter((data)=>{
      return data.id != id;
  })
  taskArray = filterArray;
  del.setAttribute("id", "animate");
  
  setInterval(a, 2000);

  function a() {
    del.remove();
  }
}

printTasks();