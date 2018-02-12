main_app.controller('deashboardController',function(SendHTTPRequest,$scope,$http,$location,$cookies,$window,$mdDialog){
	$scope.user_name = sessionStorage.getItem("email");
    $scope.cart = []
	$scope.companies = [
	{ 'image':'static/img/health.jpg',
	'name': 'Health Insurance',
	'price': 8000},
	{ 'image':'static/img/home.jpg',
	'name': 'Home Insurance',
	'price': 4000},
	{ 'image':'static/img/term.jpg',
	'name': 'Term Insurance',
	'price': 1000},
	{ 'image':'static/img/health.jpg',
	'name': 'Health Insurance',
	'price': 8000},
	{ 'image':'static/img/home.jpg',
	'name': 'Home Insurance',
	'price': 4000},
	];
	$scope.showcart = function(){	
		$scope.cart_show = $scope.cart;
	};
	$scope.addtocart = function(image,name,price){				
		$scope.cart.push({'image':image,'name':name,'price':price});		
	};
	$scope.checkout = function() {
		$scope.cart_show = [] 
	}
});
