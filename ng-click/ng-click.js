var app = angular.module('myApp',[])
app.controller('myCtrl', function($scope){
    $scope.myvariable = 1;

$scope.onclick = function(){

$scope.myvariable ++;

}


})