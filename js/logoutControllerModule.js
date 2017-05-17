angular 
	.module("logoutControllerModule",[])
	// 个人订单页面
	.controller("logoutController",function($scope,$window,myProvider,$window){
		console.log(111);
		
	    $scope.$emit("user",$window.localStorage['user']);
		if($window.localStorage['user']) {
   			
   			console.log($window.localStorage['user']);

			$scope.u = JSON.parse($window.localStorage['user']);
			console.log($scope.u);
		}

		// $scope.loginOut = function(){
		// 	$rootScope.u = null;
		// 	$window.localStorage.clear();
		// 	$location.path("/contact");
		// }

		$scope.m = JSON.parse($window.localStorage['user']).user_id;
		myProvider.requestData("./shopApi/book/orderQuery.php",{user_id:$scope.m},function(data){
			console.log(data.data);

			// $scope.orderDetails = data.data[0];
			// $scope.total = data.data[0].book_price * data.data[0].book_num;
			// console.log(data.data[0].book_price);
			// console.log(data.data[0].book_num);

			// $scope.total += $scope.total;

			var a = [];

			angular.forEach(data.data,function(val,key){
				console.log(val);
				angular.forEach(val,function(val1,key1){
					console.log(val1);
					a.push(val1);
				})
			})
			$scope.orderDetails = a;


			// console.log($scope.orderDetails);
			var total = 0;
			for(var i in $scope.orderDetails){
				console.log($scope.orderDetails[i]);
				// $scope.heji+i = $scope.orderDetails[i].book_num *$scope.orderDetails[i].book_price;
				total += $scope.orderDetails[i].book_num *$scope.orderDetails[i].book_price;
			}
			console.log(total);

			$scope.zongtotal = total;
			
		})
			$scope.$watch("orderDetails",function(newValue,oldValue){
				console.log(newValue);
				console.log(oldValue);

			})

	})
