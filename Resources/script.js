var button = document.getElementById("add-task");
var taskTitle = document.getElementById("task");
var taskdescription = document.getElementById("description");
var ul = document.getElementById("list");
var done = document.getElementsByClassName("DoneBtn");
var del = document.getElementsByClassName("deleteBtn");
// var delBtn = document.getElementById("deleteBtn");


var taskArray = [
  // {
  // //   id: 0,
  // //   taskName: "Get up early",
  // //   description: "Getting up early is good for health",
  // // },
  // // {
  // //     id: 1,
  // //   taskName: "Drink water",
  // //   description: "Drinking water is good for health",
  // // },
];



button.addEventListener("click", function addTask() {
  if (taskTitle.value.length > 0) {
    addItems();
    resetInput();
  }
});

function addItems() {

    var user = {};
    // user.id = taskArray.length;
    user.taskName = taskTitle.value;
    user.description = taskdescription.value;
    user.taskStatus = true;

    taskArray.push(user);
    printTasks();

}

function printTasks(){
  ul.innerHTML = "";
  var count = 0;
    taskArray.map((data) => {
      if(data.taskStatus === true){
        var classStrike = ""; 
        var status = "Done";
      }
      else{
        var classStrike = "strikeout";
        var status = "undo";
      
      }
     
      data.id = count;
      count++;

        html = `<li id="${data.id}" class="card col span-1-of-5"><div class="task-name"><h3 id="${data.id}" class="card-head ${classStrike}" >${data.taskName}</h3></div><br/>
  <div><p>${data.description}<p/></div>       
  <div><button id="${data.id}" class="DoneBtn btn ${data.taskStatus}">${status}</button> <button id="${data.id}" class="deleteBtn btn">Delete</button></div>        
  </li>`;

ul.innerHTML += html;

  del[data.id].setAttribute("onclick", "deleteitem(this.id)");
  done[data.id].setAttribute("onclick", "strikeOut(this.id)");


    }
  );
    
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

function strikeOut(id){

if(taskArray[id].taskStatus === true){
  taskArray[id].taskStatus = false;
}else{
  taskArray[id].taskStatus = true;
}

  
printTasks();

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
  
  setInterval(a, 1000);
  setInterval(b,2000);
  function a() {
    del.remove();
    
  }

  function b(){
    printTasks();
  }
  
}

