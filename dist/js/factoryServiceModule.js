angular 
	.module("factoryServiceModule",[])
	.factory("myFactory",function($http,$rootScope,$httpParamSerializer){
		return {
			requestData:function(url,data){
				$http({
					method:"post",
					url:url,
					headers:{"Content-Type":"Application/x-www-form-urlencoded"},
					data:$httpParamSerializer(data)
				})
				.success(function(success){
					$rootScope.$broadcast("requestSuccess",success);
				})
				.error(function(error){
					$rootScope.$broadcast("requestError","请求错误");
				})

			}
		}
	})