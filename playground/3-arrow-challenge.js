//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        let incompleteTask = this.tasks.filter((task) =>  task.completed === false);
        
        if (incompleteTask.length > 0) {
            return incompleteTask
        } else {
            console.log('all task are completed');
        }

    }
}

console.log(tasks.getTasksToDo())