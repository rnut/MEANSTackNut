var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
	$http.get('/teamlist/json').success(function(response){
		console.log("I receive the data I requested");
		$scope.teamList = response;
	});
	console.log('hello controller');

	$scope.addTeam = function(){
		console.log($scope.team);
		$http.post('/teamlist',$scope.team).success(function(response){
			console.log(response);

			$scope.teamList.pop();
			$scope.teamList.push(response);
			$scope.team = "";
		});
	};
	$scope.removeTeam = function(id){
		$http.delete('/teamlist/'+id).success(function(response){
			$scope.teamList.pop();
			$scope.teamList.push(response);
		});
	};

	$scope.editTeam = function(id){
		$http.get('/teamlist/'+id).success(function(response){
			$scope.team = response;
		});
	};
	$scope.update = function(id){
		$http.put('/teamlist/'+id).success(function(response){
			
			$scope.teamList.pop();
			$scope.teamList.push(response);
			$scope.team = "";
		});
	}


}]);


// function AppCtrl(){
// 	console.log("hello from controller");
// }