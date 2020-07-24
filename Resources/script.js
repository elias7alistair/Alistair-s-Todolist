var button = document.getElementById("add-task");
var taskTitle = document.getElementById("task");
var taskdescription = document.getElementById("description");
var ul = document.getElementById("list");
var card = document.getElementById("card");
// var delBtn = document.getElementById("deleteBtn");



button.addEventListener("click", function addTask(){



if(taskTitle.value.length > 0  ){

    addItems();
    resetInput();
}
})



function addItems(){
    html = `<li id="card" class="card col span-1-of-5"><div class="task-name"><h3>${taskTitle.value}</h3></div><br/>
    <div><p>${taskdescription.value}<p/></div>       
    <div><button id="deleteBtn" class="deleteBtn">Delete</button></div>        
    </li>`;
    
    ul.innerHTML += html;
    

    
    var del = document.getElementsByClassName("deleteBtn");
    for(i =0; i< del.length; i++){
        del[i].setAttribute("onclick", "deleteitem()");
    }
    
    }

function focusOnDes(){
    if (taskTitle.value.length > 0 && event.which === 13){ 
    taskdescription.select();
    }
}

function additemsafterkeypress() {
    
	if (taskTitle.value.length > 0 && event.which === 13){ 
        
         addItems();
         resetInput();
         taskdescription.blur();
        }	
 

}

function resetInput(){
    taskTitle.value = "";
    taskdescription.value = "";
}

taskTitle.addEventListener("keypress", focusOnDes);
taskdescription.addEventListener("keypress", additemsafterkeypress)

function deleteitem(){

    var del =  event.target.parentNode.parentNode;

    del.setAttribute('id','animate');
    

    setInterval(a, 2000);

    function a(){
        del.remove();
    }
}




