angular
    .module('to-do',[])
    .controller('ToDoController', ToDoController);

 function ToDoController(){
    this.tasks = ['Walk the Cat','Eat second Breakfast','Watch Rocky cutscenes on YouTube; too tired to workout']
 
    this.createTask = () => {
        this.tasks.push( this.taskName );
        this.taskName = '';
    };

    this.deleteTask = (index) => {
        this.tasks.splice( index, 1);
    };

}