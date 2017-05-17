angular 
	.module("myApp",["ionic","configModule","mainCtrlModule","homeControllerModule","searchControllerModule","cartControllerModule","orderControllerModule","contactControllerModule","regControllerModule","logoutControllerModule"])
	.factory("myFactory",function($window){
		return {
			setStr:function(key,value){
				$window.localStorage[key] = value;
			},
			getStr:function(key){
				return $window.localStorage[key];
			},
			setObj:function(key,value){
				$window.localStorage[key] = JSON.stringify(value);
			},
			getObj:function(key){
				if($window.localStorage[key]){
					return JSON.parse($window.localStorage[key]);
				}else{
					return $window.localStorage[key]
				}
				
			}
		}
	})
	.provider("myProvider",function(){
		this.$get=function($http){
			return {
				requestData:function(url,data,successCb,errorCb){
					$http({
						url:url,
						params:data
					})
					.success(function(successData){
						successCb(successData);
					})
					.error(function(errorData){
						errorCb(errorData);
					})
				}
			}
		}
	})
	.controller("payController",function($scope){

			})

	// 登录注册请求开始
	.constant('HOSTURL', "http://localhost/webapp/shopApi/book/")
	.service('postDataService',
			 ['$http','$httpParamSerializer',"HOSTURL",
			  function($http,$httpParamSerializer,HOSTURL){
			this.postRequest = function(url,data,success,fail){
				$http.post(
					HOSTURL+url,
					$httpParamSerializer(data),
					{headers:{"Content-Type": 
					"application/x-www-form-urlencoded"}})
					.then(function(respose){
						if(respose.data.code == 0){
							success(respose.data);	

						}else {
							fail(respose.data.data);
						}
					},function(error){
						fail(error);
					})
			}
	}])