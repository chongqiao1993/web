angular 
	.module("contactControllerModule",[])
	// 登录页面
	.controller('contactController', 
				['$scope',
				"postDataService",
				"$window",
				"$location",
				"$ionicPopup","$window",
				function($scope,postDataService,$window,$location,$ionicPopup,$window,$rootScope){

					$scope.u = {
						username:"",
						password:"",
						
					}
				$scope.loginBtn = function(){
					postDataService.postRequest(
						"userInfoLogin.php",
						{
							username:$scope.u.username,
							password:$scope.u.password
						},
						function(response){
							console.log(response.data);
							$window.localStorage['user'] = response.data;
							// console.log($window.localStorage['user']);

							$window.localStorage['user'] = JSON.stringify(response.data);

							console.log($window.localStorage['user']);


							// $ionicPopup.show({
							// 			title:"登录成功",
							// 			cssClass:"text-center",
							// 			template:"<p>亲，登录成功</p>"
							// 		})
							var alertPopup = $ionicPopup.alert({
						       template: '登录成功，么么哒！'
						     });

							$location.path("/logout");


							

						},
						function(error){
							console.log(error);
							var alertPopup = $ionicPopup.alert({
						       template: '登录失败'
						     });
						}
					)
				}
			}])

