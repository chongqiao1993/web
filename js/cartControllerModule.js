angular 
	.module("cartControllerModule",[])
	// 购物车页面
	.controller("cartController",function($state,data,$scope,$rootScope,$window,$location,$ionicPopup,myFactory){
		var info = myFactory.getObj("good");
		console.log(info);
		if(info){
			$rootScope.data1 = info;
		}else{
			$rootScope.data1 = {};
		}
		  $rootScope.hide = false;

		console.log($rootScope.data1);

			$scope.$watch("data1",function(nv,ov){
	 		// console.log(nv);
	 		var count = 0;
	 		var total = 0;
	 		angular.forEach(nv,function(val,key){
	 			 total+=val.price*val.num;
	 			count++;
	 		})
	 		 $rootScope.total = total;
	 		$rootScope.count = count;
	 		if(total == 0){
						$scope.hide = true;
					}

	 		myFactory.setObj("good",nv);

	 		// console.log(myFactory.getObj("good"));
	 		$rootScope.data1 = nv;
	 

	 	},true)


			$rootScope.deleteShopcar = function(id){
		   			delete $rootScope.data1[id];
		   		}
		   		// 继续购物
		   		$rootScope.gotoShopping = function(){
		   			// $location.path("/home");
		   			history.back();
		   		}


				$rootScope.sub = function(sub){
					 

					$rootScope.data1[sub].num--;

					if($rootScope.data1[sub].num == 0){
						delete $rootScope.data1[sub];
					}
				}

			//添加商品数量
			$rootScope.sum = function(sum){
				$rootScope.data1[sum].num++;

			}



		
		// 	var goodInfo = myFactory.getObj("good");
		// 	// console.log(myFactory.getObj("good"));
		// 	// console.log(goodInfo.carList);
		// 	if(goodInfo){
		// 		$rootScope.count = goodInfo.count;
		// 		$rootScope.total = goodInfo.total;
		// 		$rootScope.carList = goodInfo.carList;
		// 	}
		
		// 	console.log(myFactory.getObj("good"));
		// 	console.log($rootScope.sub);

		// 	$rootScope.$watch("carList",function(newVlaue,oldValue){
		// 			console.log(newVlaue);

		// 			$rootScope.count = 0;

		// 			var number = 0;

		// 			var price = 0;

		// 			for(var i in newVlaue){
		// 				number++;
		// 				price += newVlaue[i].price * newVlaue[i].num;

		// 			}

		// 			$rootScope.count = number;

		// 			$rootScope.total = price;

		// 			if(price == 0){
		// 				$scope.hide = true;
		// 			}
		// 			//要进行存储的相关信息
		// 			obj = {
		// 				count:number,
		// 				total:price,
		// 				carList:newVlaue
		// 			}
		// 			// console.log(obj);

		// 			// 进行localStorage存储
		// 			myFactory.setObj("good",obj);				

				
		// 		},true)
		// 	$rootScope.sub = function(sub){
		// 		console.log(sub);

		// 		$rootScope.carList[sub].num--;

		// 		if($rootScope.carList[sub].num == 0){
		// 			delete $rootScope.carList[sub];
		// 		}
		// 	}

		// 	$rootScope.sum = function(sum){
		// 		$rootScope.carList[sum].num++;

		// 	}

		// 	$rootScope.deleteShopcar = function(id){
  //      			delete $scope.carList[id];
  //      		}

		// // if(!myFactory.getObj("good")){

		// // 	$rootScope.hide = true;

		// // }else{
		// // 	$rootScope.carList = myFactory.getObj("good").carList;
		// // 	$rootScope.total += myFactory.getObj("good").total;
		// // 	if(myFactory.getObj("good").carList){
		// // 		$rootScope.hide = false;
		// // 	}
			
		// // }
		

		// // $scope.show = $rootScope.carList;
		$scope.payment = function(){
			if($window.localStorage['user']){
   				$location.path("order");
   			}else{
   				var alertPopup = $ionicPopup.alert({				       
			       template: '请登陆'
			     });
   				$location.path("contact");
   			}
		}


		$scope.gotoShopping = function(){
			$state.go("home");
		}
	})
