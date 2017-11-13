angular.module("todoApp", [])
.controller("todoCtrl", JonSnow)
//todoctrl is to be used in html file.
function JonSnow (){
    var todo = this;

    todo.tasks = [
        "task1",
        "valar morgulis",
        "jon snow",
        "GOT",
    ];

    todo.addTask = function(){
        todo.tasks.push(todo.task)
        todo.task = ""
    }

    // function addTask(){}
    // todo.addTask = addTask
}
