angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
  $scope.learningNgChange = function(){
    console.log("an input changed");
  };

  $scope.todos =[
    {"name": "Task1"},
    {"name": "Task2"},
    {"name": "Task3"},
    {"name": "Task4"},
    {"name": "Task5"}
  ]

});
