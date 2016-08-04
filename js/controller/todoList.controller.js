(function() {
    'use strict';
    
    var TodoListController = function TodoListController($scope) {

    	console.dir(this);
    	var self = this;

        self.tasks = []; // Entire Task Array
        self.addTask = function addTask(){
            var data ={
                name: self.newTask,
                isCompleted: false
            };
            self.tasks.push(data);
            self.newTask = '';
            console.log(self.tasks);
        };

        self.removeTask = function (task) {
            self.tasks = self.tasks.filter(function(item){
                return item != task;
            });
        };
        self.remainCount = function remainCount(){
            var count = 0;
            angular.forEach(self.tasks , function(task){
                count += task.isCompleted ? 0 : 1;
            });
            return count;
        };

    	
    };

    // getter of angular module

    angular
        .module('todoList')
        .controller('TodoListController', TodoListController);
})();


// in JS everything is an Object
//Object is function
// function is object 
// objects are not function sometimes
// arrays are objects
// but objects are not array
