let toDoList = [];
let tr = 1
let allTask = 0;
let completeTask = 0;


function addTask(){
    let taskName = document.getElementById('taskInput').value;
    if (taskName !=''){
        let obj = {
            tartib: tr++,
            name: taskName,
            complete: false
        };
        toDoList.push(obj);
        chizish();
        allTask = toDoList.length;
        document.getElementById('allTask').innerText = allTask;
    }
}
function chizish(){
    let list = '';
    console.log(toDoList);
    toDoList.forEach(function (item){
        if (item.complete){
            completeTask++;
        }else{
            completeTask--;
        }
        list += '<li class="list-group-item">' +
            '<input'+(item.complete ? "cheched" :"") +'onchange="completed(this)" type="checkbox" class="mr-2" id="'+ item.tartib+'"><label for="'+ item.tartib+'">'+ item.name +'</label>' +
        '</li>'
    })
    document.getElementById('list').innerHTML= list;
    document.getElementById('complectTask').innerText = completeTask
}

function completed(input){
    let searchId = input.getAttribute('id');
    toDoList.forEach(function (item,i){
        if (item.tartib == searchId){
            toDoList[i].complete = item.complete ? false : true;
        }
    });
    chizish()
}