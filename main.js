import inquirer from "inquirer";
let todoList = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want add in your TODO list?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: true,
        },
    ]);
    todoList.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todoList);
}
