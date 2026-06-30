// import
const deleteImg = 'https://www.shutterstock.com/image-vector/trash-bin-linear-icon-delete-600nw-2654535767.jpg'

//selectors
const input = document.querySelector('input');
const submitBtn = document.getElementById('submitTask');
const tasks = document.getElementById("tasks");
const taskDone = document.getElementById('taskDone');

//adding functions
submitBtn.addEventListener('click', ()=>{
    const data = input.value;
    if(!data) {
        alert("Enter the task please!");
    } else {
        const date = new Date();
        buildCard(data, date);
        input.value = "";
        //alert("Data Added Successfully!");
    }
});

// building the cards up for adding the data
function buildCard(data, date) {
    const newTask = document.createElement('div');
    
    newTask.setAttribute('id', 'newTask');
    
    addTime(date, newTask);
    addData(data, newTask);
    
    tasks.appendChild(newTask);
}

const addTime = (date, newTask) => {
    const timeHead = document.createElement('div');

    const time = document.createElement('p');
    let doneMarker = document.createElement('button');
    const deleteBtn = document.createElement('img');

    doneMarker.innerHTML = "Mark As Done";
    time.innerHTML = date.toLocaleString();
    deleteBtn.setAttribute('src', deleteImg);
    doneMarker.setAttribute('id', 'doneBtn');

    timeHead.appendChild(time);
    timeHead.appendChild(doneMarker);
    timeHead.appendChild(deleteBtn);

    timeHead.setAttribute('id', 'timeHolder')

    deleteBtn.addEventListener('click',()=>{
        tasks.removeChild(newTask);
    })

    doneMarker.addEventListener('click', ()=> {
       newTask.style.backgroundColor = newTask.style.backgroundColor === "teal" ? "grey" : "teal";  
       doneMarker.innerHTML = (doneMarker.innerHTML === "Mark As Undone") ? "Mark As Done" : "Mark As Undone";
    })

    newTask.appendChild(timeHead);
}

const addData = (data, newTask) => {
    const dataHolder = document.createElement('div');

    dataHolder.innerHTML = data;
    dataHolder.setAttribute('id', 'dataHolder');

    newTask.appendChild(dataHolder);
}