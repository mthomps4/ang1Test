'use strict';
angular.module("todoListApp")

.service('dataService', function($http) {

  this.helloConsole = function (){
    console.log("hilow");
  };

  this.getTodos = function(callback){
    $http.get('mock/todos.json')
      .then(callback);
    };

  this.deleteTodo = function(todo){
    console.log("The " + todo.name);
    //other logic
  };

  this.saveTodos = function(todos){
    console.log(todos.length + "  items have been saved");
    //other logic
  };

});
