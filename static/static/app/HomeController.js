main_app.controller('HomeController',function(SendHTTPRequest,$scope,$http,$location,$cookies){
	$scope.login_page = 'True';
	$scope.localstorage = []
	$scope.person = {};
	$scope.patternUsername = (function() {
		var regexp = /^[a-zA-Z]*-*$/;
		return {
			test: function(value) {
				if ($scope.requireUsername === false) {
					return true;
				}
				return regexp.test(value);
			}
		};
	})();

	$scope.patternemail = (function() {
		var regexp = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
		return {
			test: function(value) {
				if ($scope.requireemail === false) {
					return true;
				}
				return regexp.test(value);
			}
		};
	})();


	$scope.patternPassword = (function() {
		var regexp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{5,}$/;
		return {
			test: function(value) {
				if ($scope.requirePassword === false) {
					return true;
				}
				return regexp.test(value);
			}
		};
	})();




	$scope.login = function()
	{ 
		$scope.login_page = 'True';
		$scope.reg_page = 'False';
	};
	$scope.register = function()
	{
		$scope.login_page = 'False';
		$scope.reg_page = 'True';
	}
	$scope.loginsubmit = function()
	{
		$scope.localstoragecookies = $cookies.getObject("localstorage");
		if($scope.localstoragecookies == undefined)
		{
			alert("Please registered User First!!")
		}
		console.log($scope.localstoragecookies);
		email = $scope.email;
		password = $scope.password;
		if(email == $scope.localstoragecookies[0].email)
		{
			$scope.loginemail_error = '';
			$scope.confirmemail = email;
		}
		else
			$scope.loginemail_error = 'Email not registered';
		if(password == $scope.localstoragecookies[0].password)
		{
			$scope.loginpassword_error = '';
			$scope.confirmpassword = password
		}
		else
			$scope.loginpassword_error = 'password mismatch !!';

		if($scope.confirmemail && $scope.confirmpassword)
		{
		$location.path('/dashboard');
	    }
	};

	$scope.registersubmit = function()
	{
		if($scope.person.username == undefined)
		{
			$scope.user_error = 'Username should be string Ex: Rakesh';
		}
		else
		{
			$scope.user_error  = ' '
			username = $scope.person.username;	
		}
		if($scope.person.email == undefined)
		{
			$scope.email_error = 'Enter valid email';
		}
		else
		{
			$scope.email_error  = ' '
			email = $scope.person.email;	
		}
		if($scope.person.password == undefined)
		{
			$scope.password_error = 'Enter valid password with length of 5 having atleast One Number, One Char, One Special Char';
		}
		else
		{
			$scope.password_error  = ' '
			password = $scope.person.password;	
		}

		if(username && email && password)
		{
			sessionStorage.setItem("email",email);
			$scope.localstorage = [{'username':username,'email':email,'password':password}] 
			$cookies.putObject('localstorage',$scope.localstorage);
			console.log($scope.localstorage);
			$location.path('/home');
		}
	};
});
