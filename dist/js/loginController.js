angular 
	.module("loginController",[])
	.controller("loginController",["$scope","$location","myFactory",
		function($scope,$location,myFactory){
			console.log(myFactory);
		$scope.user = {};
		$scope.login=function(){
			myFactory.requestData("./php/userInfoLoginPOST.php", $scope.user);
		}

		$scope.$on("requestSuccess",function(e,data){
			console.log(data);
			alert(data.data);

			if(data.code == 0){
				$location.path("/homePage/")
				$location.search($scope.user);
			}

		});
		$scope.$on("requestError",function(e,data){
			console.log(data);
		})
		









		
	}])