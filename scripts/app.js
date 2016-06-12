angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
  $scope.helloworld = function(){
    console.log("hi");
  };
});
