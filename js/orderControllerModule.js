angular 
	.module("orderControllerModule",[])
	//订单
	.controller("orderController",function($scope,$state,$location,myProvider,$rootScope,myFactory,$http,$ionicPopup,$location,HOSTURL,$window,$httpParamSerializer,myFactory){
		myProvider.requestData("./shopApi/book/book.php",null,function(data){
			$scope.datalist = data.data;
		})
			var info = myFactory.getObj("good");
			if(info){
				$rootScope.data1 = info;
				var total = 0;
				angular.forEach($rootScope.data1,function(val,key){
					total += val.price*val.num;
				})

				$rootScope.total = total;



			}else{
				$rootScope.data1 = {};
			}



			$scope.submitOrderTo=function(){
			

				// $scope.total = 0;
		
				// console.log(myFactory.getObj("good").carList);

				$scope.a = [];

				angular.forEach($rootScope.data1,function(val,key){
							console.log(val);
							$scope.a.push({id:val.id,num:val.num});

							// $scope.a = [];
							// $scope.b = [];

							// $scope.a.push(val.id);
							// $scope.b.push(val.num);
					       })
				console.log($scope.a);

				if($window.localStorage['user']){
					$http.post(HOSTURL+"order.php",({
						"user_id":JSON.parse($window.localStorage['user']).user_id,
					      // "cart":[
					      //     {
					      //     "id": $scope.a,// 图书的id
					      //     "num":$scope.b // 图书的数量
					      //    }
					      // ]
					      "cart":$scope.a

					}),{
						headers:{
							"Content-Type":"application/json"
						}
					}).then(function(response){
						// console.log(response);
						myFactory.setObj('good',{})
						$rootScope.count = 0;
						$location.path("/pay");
					},function(error){
						console.log(error);
					})
				}else{
					var alertPopup = $ionicPopup.alert({				 
				       template: '请登录！'
				     });
					$location.path("/contact");
				}
			}

			

	})