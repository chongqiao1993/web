angular 
	.module("searchControllerModule",[])
	// 商品详情页
	.controller("searchController",function($scope,myProvider,$stateParams,$window,postDataService,$rootScope,$http,HOSTURL,$httpParamSerializer,$stateParams,$ionicPopup,$location){
		// console.log($stateParams);
		// console.log($stateParams.id);

		myProvider.requestData("./shopApi/book/id.php",$stateParams,function(data){

			$scope.data = data.data;
			// console.log($stateParams);
			// console.log(data.data);
			$scope.img = $stateParams.img;

			console.log(data.data);

			document.getElementById("div").innerHTML = data.data.book_desc;


			// 评论


				$scope.com = {
					content:"",
					user_id:"",
					id:""
				};
			// console.log(JSON.parse($window.localStorage['user']).user_id);

			myProvider.requestData("./shopApi/book/getcom.php",{id:data.data.book_id},function(data){
							console.log(data.data);
							console.log(JSON.parse($window.localStorage['user']));
							$scope.com.user_id = JSON.parse($window.localStorage['user']).user_name;
							$scope.aaaaa = data.data;
							// $scope.com.content1 = data.data.comment_content;
							// $scope.com.addtime = data.data.comment_addtime;
							$scope.com.content = '';
						},function(error){
							console.log(error);
						})

			$scope.submitComment = function(){

				console.log(66666);

				if($window.localStorage['user']){
					$http.post(HOSTURL+"comment.php",$httpParamSerializer({
						content:$scope.com.content,
						user_id:JSON.parse($window.localStorage['user']).user_id,
						id:data.data.book_id
					}),{
						headers:{
							"Content-Type":"application/x-www-form-urlencoded"
						}
					}).then(function(response){
						console.log(response);

						//同步显示下面的评论
						console.log($scope.com);
						console.log($scope.com.content);
						
						myProvider.requestData("./shopApi/book/getcom.php",{id:data.data.book_id},function(data){
							console.log(data.data);
							console.log(JSON.parse($window.localStorage['user']));
							$scope.com.user_id = JSON.parse($window.localStorage['user']).user_name;
							$scope.aaaaa = data.data;
							// $scope.com.content1 = data.data.comment_content;
							// $scope.com.addtime = data.data.comment_addtime;
							$scope.com.content = '';
						},function(error){
							console.log(error);
						})



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



		},function(error){
			console.log(error);
		})

		


	})