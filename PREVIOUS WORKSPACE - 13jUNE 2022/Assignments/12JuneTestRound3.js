/*Create a Todo App, user can Add a task Delete a last added task Mark the task as done - Once the task is marked done Edit the task Return all task Add appropriate validations, refer below function calls and their output for validation messages that need to be added. Feel free to add extra functionalities once you are able to cover the mentioned features. 
*Check for corner test cases and conditions where array becomes empty/full* 
Template: let todoApp = { todos: [], // store task in this array, to use todos array inside below functions use this.todos count: 1, // you can use it to get unique id for each task,
 feel free to use your own unique identifier implementation. You can simply use this.count value as id for any task and increment it and use its incremented value for some other task 
 addTask(task){ // use this.todos to access above declared array inside functions // this method adds task }, 
    deleteTask(id) { //this method deletes task }, 
    updateTaskText(id, text) { // this method updates task’s text }, 
    updateTaskAsDone(id) { //this method updates task as done }, 
    getAllTasks() { //this method prints all tasks } } For your reference to understand the flow:
    todoApp.getAllTasks() -> No tasks added! todoApp.deleteTask(1) -> No tasks available. Please add task first! todoApp.
                     
        updateTaskAsDone(1) -> No tasks available. Please add task first! todoApp.updateTaskText(1, "text 1") -> No tasks available. Please add task first! todoApp.addTask("This is task 1") -> Task1 added todoApp.getAllTasks() -> Id: 1 text: This is task 1 isDone: false todoApp.updateTaskAsDone(1) -> Task1 marked as done! todoApp.getAllTasks() -> Id: 1 text: This is task 1 isDone: true todoApp.updateTaskText(1, "task 1 text updated") -> Task1 updated -> Id: 1 text: task 1 text updated isDone: true todoApp.getAllTasks() -> Id: 1 text: task 1 text updated isDone: true todoApp.deleteTask(1) -> Task1 deleted todoApp.getAllTasks() -> No tasks added!

*/

let todoApp = {
    totalTask: (function(){return todoApp.todos.length}),
    todos: []
    ,
    addTask: (function(inputData){
        let newIndexNo =  todoApp.totalTask();      
        todoApp.todos[newIndexNo] = `,${inputData}`;
        todoApp.todos[newIndexNo].status = false;
        todoApp.todos[newIndexNo].indexing = newIndexNo + 1
    }),
    deleteTask: (function(indexNo){
        let arrIndex = indexNo - 1
        todoApp.todos.splice(arrIndex);
        //for updating the index number of the updated array
        for(let i=arrIndex; i<todoApp.totalTask(); i++){
            todoApp.todos[i].indexing--
        }
    }),
    editTask: (function(indexNo,newUpdation){
        let arrIndex = indexNo - 1;
        todoApp.todos[arrIndex] = `${newUpdation}`
    }),
    updateTaskAsDone: (function(indexNo){
        let arrIndex = indexNo - 1;
        todoApp.todos[arrIndex].status = true
    }),
    getAllTask: (function(){
        let totalIndexes = todoApp.totalTask()
        if(totalIndexes == 0){
            return `No Task Added`
        }
        else{
            let opt = ``
            for(let j=0; j<totalIndexes; j++){
                opt+= `${todoApp.todos[j].indexing}, ${todoApp.todos[j]}, ${todoApp.todos[j].status}`
                opt+= `\n`
            }
            return opt;
        }
    })
}
