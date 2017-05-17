angular 
	.module("regControllerModule",[])
	//注册
	.controller("regController",function($scope,postDataService,$window,$location,$ionicPopup){
			$scope.user = {
				name:"",
				password:"",
				tel:"",
				sex:""
			}

			$scope.a = true;
			$scope.b = true;
			$scope.c = true;
			$scope.d = true;


			$('#name').blur(function(){
		        var reg = /^[A-z]\w{4,11}$/;
		        var val =  $('#name').val();
				if(val.match(reg) == null){
		            // alert('请输入正确的用户名和密码');
		            var alertPopup = $ionicPopup.alert({
						       template: '用户名为5到11位数字，字母，下划线'
						     });
		            $scope.a = false;
		          
		        }
		        if(val == ''){
		        	$scope.a = false;
		        }
		         
			})

			$('#password').blur(function(){
		        var reg = /^[A-z]\w{4,11}$/;
		        var vall =  $('#password').val();
				if(vall.match(reg) == null){
		            // alert('请输入正确的用户名和密码');
		            var alertPopup = $ionicPopup.alert({
						       template: '密码为5到11位数字，字母，下划线'
						     });

		            $scope.b = false;
		        }
		         if(vall == ''){
		        	$scope.b = false;
		        }
			})

			$('#tel').blur(function(){
		        var tele = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/
		        var telephone = $('#tel').val();

				 if(telephone.match(tele) == null){
		        	var alertPopup = $ionicPopup.alert({
						       template: '请输入正确的手机号!'
						     });
		        	 $scope.c = false;
		        }
		         if(telephone == ''){
		        	$scope.c = false;
		        }
		        
			})


			$('#sex').blur(function(){
				var sex = $('#sex').val();
				var sexreg = /(m)|(w)/;
			    if(sex.match(sexreg) == null){
		        	var alertPopup = $ionicPopup.alert({
						       template: '性别填w(男)或m(女)'
						     });
		        	 $scope.d = false;
		        }
		        if(sex == ''){
		        	 $scope.d = false;

		        }
		       

			})
		
				$scope.regBtn = function(){
					console.log($scope.a);
					if($scope.a && $scope.b && $scope.c && $scope.d){
							console.log($scope.user.name);
							postDataService.postRequest(
								"userRegist.php",
								{
									name:$scope.user.name,
									password:$scope.user.password,
									tel:$scope.user.tel,
									sex:$scope.user.sex
								},
								function(data){
									console.log(data);
									if (data.code === 0) {
										var alertPopup = $ionicPopup.alert({
									       template: '注册成功！请登录'
									     });
										$location.path("/contact");
									} else {
										var alertPopup = $ionicPopup.alert({
									       template: '注册失败！'
									     });
									}
								},function(error){
									console.log(error);
									var alertPopup = $ionicPopup.alert({
									       template: '注册失败!'
									     });
								}

							)

						}else{
							var alertPopup = $ionicPopup.alert({
									       template: '信息未填写正确!'
									     });
						}	
					}
					
			
			

		})