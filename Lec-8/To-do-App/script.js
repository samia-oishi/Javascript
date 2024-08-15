document.addEventListener("DOMContentLoaded",()=>{
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if(storedTasks){
        storedTasks.forEach((task)=>tasks.push(task));
        updateTasklist();
        updateStats();
    }
});

let tasks=[]; 

const addTask =()=>{
    const taskInput= document.getElementById("taskInput");
    const text = taskInput.value.trim();//gets the value of the input without adding a new task

    if(text){
        tasks.push({text:text, completed:false});
        taskInput.value="";
        updateTasklist();//calling function to add task in DOM
        updateStats();
        saveTasks();
    }
};
//adding task

//toggle complete task
const toggleTaskComplete = (index)=>{
     tasks[index].completed =!tasks[index].completed;
     updateTasklist();
     updateStats();
     saveTasks();
};

//delete task 
const deleteTask =(index)=>{
    tasks.splice(index,1);
    updateTasklist();
    updateStats();
    saveTasks();
};

//edit task

const editTask=(index)=>{
    const taskInput = document.getElementById('taskInput');
    taskInput.value=tasks[index].text;
    tasks.splice(index,1);
    updateTasklist();
    updateStats();
    saveTasks();
}

//updating task list to update list items
const updateTasklist = () => {
    const taskList= document.getElementById('task-list');
    taskList.innerHTML = ''; //clears the task list of any existing string if there was any stored previously.

    //adding items as list
    tasks.forEach((task,index) => {
        const listItem = document.createElement('li');
        //rendering html stuff into the innerhtml to create the task list
        listItem.innerHTML =`
        <div class="taskItem">
            <div class="task ${task.completed?'completed':''}">
            <!-- ternary operator to toggle between complete and incomplete tasks -->  
                <input type="checkbox" class="checkbox" ${task.completed?"checked":""}/>
                <p>${task.text}</p>
            </div>
            <div class="icons">
                <img src="./img/edit.png" onClick="editTask(${index})"/>
                <img src="./img/bin.png" onClick="deleteTask(${index})"/>
            </div>
        </div>
        `;
        listItem.addEventListener('change',()=>toggleTaskComplete(index))
        taskList.append(listItem);
    });
}

document.getElementById("submit").addEventListener("click",
    function(e){
        e.preventDefault();
        addTask();}
    );

//updating stats
const updateStats= ()=>{
    const completeTasks = tasks.filter(task=> task.completed).length;
    const totalTasks = tasks.length;
    const progress =(completeTasks/totalTasks)*100;
    const progressBar = document.getElementById('progress');

    progressBar.style.width = `${progress}%`;
    //progress bar done now moving on to the numbers

    document.getElementById('done').innerText=`${completeTasks}/${totalTasks}`;

    if(tasks.length && completeTasks === totalTasks){
        confettiBlast();
    }
};

//function to store tasks locally even if you reload the browser
const saveTasks =()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
};

//confetti animation

const confettiBlast =()=>{
    const end = Date.now() + 15 * 1000;
    const colors = ["#bb0000", "#ffffff"];

    (function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
    });

    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
    })();
}