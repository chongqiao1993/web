angular 
	.module("homeControllerModule",[])
	// 首页
	.constant("data",{})
	.controller("homeController",function(data,$scope,$state,$location,myProvider,$rootScope,myFactory,$ionicSlideBoxDelegate,$timeout,$stateParams){
		// console.log(data);
		var info = myFactory.getObj("good");
		console.log(info);
		if(info){
			$rootScope.data1 = info;
		}else{
			$rootScope.data1 = {};
		}
	 	$scope.addCart  = function(book){

	 		 if(!$rootScope.data1[book.id]){
	 		 	var goodList = book;
	 			goodList.num = 1;
	 		 	$rootScope.data1[book.id] = goodList;
	 		 	// data.carlist[book.id].num = 1;
	 		 }else{
	 			$rootScope.data1[book.id].num++;
	 		}
	 		$timeout(function() {

	 			$state.go("cart");
	 		}, 0);
	 	}
	 
	 	$scope.$watch("data1",function(nv,ov){
	 		console.log(nv);
	 		myFactory.setObj("good",nv);
	 		var count = 0;
	 		angular.forEach(nv,function(val,key){
	 			count++;
	 		})
	 		$rootScope.count = count;
	 		console.log(myFactory.getObj("good"));
	 	},true)





		$scope.$on("data",function(e,data){
			console.log(data);
			$scope.datalist = data;
			$scope.scroll = false;
		})

		$scope.$on("data1",function(e,data){
			console.log(data);
			$scope.datalist = data;
			$scope.scroll = false;
		})

		$scope.$on("data2",function(e,data){
			console.log(data);
			$scope.datalist = data;
			$scope.scroll = false;
		})

		$scope.$on("data3",function(e,data){
			console.log(data);
			$scope.datalist = data;
			$scope.scroll = true;
		})




		myProvider.requestData("./shopApi/book/book.php",null,function(data){
			console.log(data);
			$scope.datalist = data.data;
			console.log($scope.datalist);


			// 购物车



		},function(error){
			console.log(error);
		})




// var goodInfo = myFactory.getObj("good");
// 		// console.log(myFactory.getObj("good"));
// 		// console.log(goodInfo.carList);
// 		if(goodInfo){
// 			$rootScope.count = goodInfo.count;
// 			$rootScope.total = goodInfo.total;
// 			$rootScope.carList = goodInfo.carList;
// 		}else{
// 			//第一次打开页面的时候初始化所有的内容为空
// 			$rootScope.count = 0;
// 			$rootScope.total = 0;
// 			$rootScope.carList = {};
// 		}

// 		// $scope.goodList = $scope.datalist;

// 		//初始化总价格
// 		// $rootScope.total = 0;
// 		// $scope.count = 0;

// 		//添加购物车
// 		$scope.addCart=function(singleGood){
// 			// console.log(singleGood);
// 				console.log($rootScope.carList);
// 			//判断$scope.carList对象有没有gid属性

// 			//如果$scope.carList没有相对应的属性
// 			if(!$rootScope.carList[singleGood.id]){

// 				var good = singleGood;
// 				good.num = 1;
// 				$scope.title = singleGood.title;
// 				$scope.price = singleGood.price;

// 				//给$scope.carList添加一个属性 属性值为good
// 				$rootScope.carList[singleGood.id] = good;
// 					// console.log($scope.carList);
// 					// console.log(good);
// 			}else{
// 				$rootScope.carList[singleGood.id].num++;
// 			}
				
// 				$rootScope.$watch("carList",function(newVlaue,oldValue){
// 					console.log(newVlaue);

// 					$rootScope.count = 0;

// 					var number = 0;

// 					var price = 0;

// 					for(var i in newVlaue){
// 						number++;
// 						price += newVlaue[i].price * newVlaue[i].num;

// 					}

// 					$rootScope.count = number;

// 					$rootScope.total = price;

// 					//要进行存储的相关信息
// 					obj = {
// 						count:number,
// 						total:price,
// 						carList:newVlaue
// 					}
// 					// console.log(obj);
// 					$rootScope.carList = newVlaue;
// 					// 进行localStorage存储
// 					myFactory.setObj("good",obj);

// 					$scope.$emit("count",number);
// 					console.log(111)

// 					$state.go("cart");
// 				},true)
			
			
			
// 		}

// 		// 删除
// 		$rootScope.deleteShopcar = function(id){
//    			delete $scope.carList[id];
//    		}
//    		// 继续购物
//    		$rootScope.gotoShopping = function(){
//    			// $location.path("/home");
//    			history.back();
//    		}


// 		$rootScope.sub = function(sub){
// 			console.log(sub);

// 			$rootScope.carList[sub].num--;

// 			if($rootScope.carList[sub].num == 0){
// 				delete $rootScope.carList[sub];
// 			}
// 		}

// 			//添加商品数量
// 			$rootScope.sum = function(sum){
// 				$rootScope.carList[sum].num++;

// 			}




   		$scope.slideChange = function(index){
			console.log(index);

			$ionicSlideBoxDelegate.$getByHandle('myHandle').slide(index,200);

		}


		// 分页
		var start = 0;
		$timeout(function(){
			$scope.scroll = true;
		})

		console.log($scope.scroll);
		$scope.loadMore=function(){
			start += 10;
			myProvider.requestData("./shopApi/book/book.php",{start:start,length:10},function(data){
					console.log(data);
					if(data.code == 1){
						$scope.scroll = false;
						console.log($scope.scroll);
					}else{
						angular.forEach(data.data,function(val,key){
							$scope.datalist.push(val);
						})
					}
						
					},function(error){
						console.log(error);
					})

			
			$scope.$broadcast('scroll.infiniteScrollComplete');
		}


		//搜索

		$scope.search = {};

		$scope.$watch("search",function(oldValue,newValue){

				if(!$scope.search.content){

					myProvider.requestData("./shopApi/book/book.php",null,function(data){
						$scope.datalist = data.data;

					})

					$scope.scroll = true;


				}

			},true)


		$scope.searchThing = function(){

			console.log($scope.search.content);
			myProvider.requestData("./shopApi/book/bookSearch.php",{search:$scope.search.content},function(data){
					console.log(data.data);
					$scope.datalist = data.data;
					$scope.scroll = false;
			})

		}


	})

