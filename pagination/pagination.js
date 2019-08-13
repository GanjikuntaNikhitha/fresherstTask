var app = angular.module('myApp',[])
app.controller('myCtrl', function($scope) {
    $scope.myvariable = 1;
    $scope.users = [
        {name:'Physics',marks:70},
        {name:'Chemistry',marks:80},
        {name:'Math',marks:65},
        {name:'English',marks:75},
        {name:'Hindi',marks:67},
        {name:'Physics1',marks:90},
        {name:'Chemistry1',marks:95},
        {name:'Math1',marks:60},
        {name:'English1',marks:85},
        {name:'Hindi1',marks:97}];
 

})