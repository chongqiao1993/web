angular 
	.module("mainCtrlModule",[])
	// 入口文档中控制器
	.controller("mainCtrl",function($scope,$rootScope,myProvider,myFactory,$location,$window,myProvider){

			// 分类
		$scope.tech = function(){
			console.log(4444444);
			myProvider.requestData("./shopApi/book/book.php",{cateid:1},function(data){
				console.log(data.data);
				$rootScope.datalist = data.data;
				$scope.$broadcast("data",$rootScope.datalist);
			})
		}

		$scope.animate = function(){
			myProvider.requestData("./shopApi/book/book.php",{cateid:2},function(data){
				console.log(data.data);
				$rootScope.datalist = data.data;
				$scope.$broadcast("data1",$rootScope.datalist);
			})
		}

		$scope.literal = function(){
			myProvider.requestData("./shopApi/book/book.php",{cateid:3},function(data){
				console.log(data.data);
				$rootScope.datalist = data.data;
				$scope.$broadcast("data2",$rootScope.datalist);
			})
		}

		$scope.all = function(){
			myProvider.requestData("./shopApi/book/book.php",null,function(data){
				console.log(data.data);
				$rootScope.datalist = data.data;
				// $scope.datalist = data.data;
				$scope.$broadcast("data3",$rootScope.datalist);
			})
		}


		console.log($window.localStorage['user']);

		$scope.$on("count",function(e,data){
			console.log(data);
		});

		$scope.$on("user",function(e,data){
			console.log(JSON.parse(data));
			$scope.u = JSON.parse(data);
		});

		$scope.login = function(){
   			$location.path("/contact");
   		}

   		$scope.register = function(){
   			$location.path("/reg");
   		}

   		if($window.localStorage['user']) {
   			
   			console.log($window.localStorage['user']);

			$scope.u = JSON.parse($window.localStorage['user']);
			console.log($scope.u);
		}

		$scope.logout = function(){
			console.log(888);
			$scope.u = null;
			$window.localStorage.clear();
			$location.path("/contact");
		}

		// console.log($rootScope.count);
		// var user = {},
		// $scope.user.username = $window.localStorage['user'];

	})