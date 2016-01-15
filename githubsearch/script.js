var app = angular.module("app", [ 'ngMaterial' ]);
app.controller('MainController', MainController);

function MainController($http){
	var vm = this;
	vm.search = function(){
		$('#result').fadeOut('slow');
		$http.get('https://api.github.com/users/' + vm.searchString)
		.then(function(res){
			console.log(res);
			vm.result = res.data;
			$('#result').fadeIn('slow');
		})
		console.log('working');
	}
}