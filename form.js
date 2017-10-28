var userInfoModule=angular.module('UserInfoModule',[]);
userInfoModule.controller('UserInfoCtrl',['$scope',function($scope){
    $scope.userInfo={
        email:"lihroff@outlook.com",
        password:"123456",
        autoLogin:true
    }
    $scope.getFormData=function(){
        console.log($scope.userInfo);
    }
    $scope.setFormData=function(){
        $scope.userInfo={
            email:"tommy.white.h.li@gmail.com",
            password:"123456",
            autoLogin:false
        }
    }
}]);
