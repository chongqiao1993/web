angular 
	.module("configModule",[])
	.config(function($ionicConfigProvider){
				$ionicConfigProvider.platform.android.tabs.style("standard");
				$ionicConfigProvider.platform.android.tabs.position("bottom");
			})
			.config(function($stateProvider,$urlRouterProvider){
				$stateProvider
					.state("home",{
						url:"/home?datalist",
						templateUrl:"./views/home.html",
						controller:'homeController'
					})
					.state("search",{
						url:"/search?id&img",
						templateUrl:"./views/search.html",
						controller:"searchController"
					})
					.state("cart",{
						url:"/cart",
						templateUrl:"./views/cart.html",
						controller:"cartController"
					})
					.state("contact",{
						url:"/contact",
						templateUrl:"./views/contact.html",
						controller:"contactController"
					})
					.state("reg",{
						url:"/reg",
						templateUrl:"./views/reg.html",
						controller:"regController"
					})
					.state("logout",{
						url:"/logout",
						templateUrl:"./views/logout.html",
						controller:"logoutController"
					})
					.state("order",{
						url:"/order",
						templateUrl:"./views/order.html",
						controller:"orderController"
					})
					.state("pay",{
						url:"/pay",
						templateUrl:"./views/pay.html",
						controller:"payController"
					})
					

				$urlRouterProvider.otherwise("/home")
			})