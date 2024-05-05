#! /usr/bin/env node
//Todos List Project by Irfan Memon
import inquirer from "inquirer"
let todos = [];
let condition = true;

while(condition)
    {


        let addTask = await inquirer.prompt
([{
name: "todo",
type: "input",
message: " What you want to add in your Todos List?"
},{


    name: "addMore",
type: "confirm",
message: "Do you want to add add more in your Todos List?",
default: "false"
}]);


todos.push(addTask.todo);
condition = addTask.addMore
console.log(todos)
}