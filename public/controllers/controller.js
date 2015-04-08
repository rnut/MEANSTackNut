var myApp = angular.module('myApp',['ui.bootstrap']);

myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
	// $http.get('/teamlist/json').success(function(response){
	// 	console.log("I receive the data I requested");
	// 	$scope.teamList = response;
	// });

	// $scope.addTeam = function(){
	// 	console.log($scope.team);
	// 	$http.post('/teamlist',$scope.team).success(function(response){
	// 		console.log(response);

	// 		$scope.teamList.pop();
	// 		$scope.teamList.push(response);
	// 		$scope.team = "";
	// 	});
	// };
	// $scope.removeTeam = function(id){
	// 	$http.delete('/teamlist/'+id).success(function(response){
	// 		$scope.teamList.pop();
	// 		$scope.teamList.push(response);
	// 	});
	// };

	// $scope.editTeam = function(id){
	// 	$http.get('/teamlist/'+id).success(function(response){
	// 		$scope.team = response;
	// 	});
	// };
	// $scope.update = function(id){
	// 	$http.put('/teamlist/'+id).success(function(response){
			
	// 		$scope.teamList.pop();
	// 		$scope.teamList.push(response);
	// 		$scope.team = "";
	// 	});
	// }


	//get json for show on view
	$http.get('/programe/json').success(function(response){
		$scope.programeList = response;
	});

	//add programe
	$scope.addPrograme = function(){
		console.log($scope.programe);
		// $http.post('/teamlist',$scope.team).success(function(response){
		// 	console.log(response);

		// 	$scope.teamList.pop();
		// 	$scope.teamList.push(response);
		// 	$scope.team = "";
		// });
	};




	//timepicker
	$scope.mytime = new Date();
 	$scope.hstep = 1;
 	$scope.mstep = 1;
 	$scope.ismeridian = false;
 	$scope.changed = function (time) {
    	console.log('Time changed to: ' + time);
    };


	//datepicker
	$scope.today = function() {
    	$scope.date = new Date();
  	};
  	$scope.today();
  	$scope.dateOptions = {
    	formatYear: 'yy',
   		startingDay: 1
  	};
  	$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  	$scope.date = $scope.formats[0];
	
	$scope.changedDate = function (date) {
    	console.log('date changed to: ' + date);
    };


}]);


// myApp.controller('TimepickerDemoCtrl',['$scope','$http',function($scope,$http){

// }]);




// function AppCtrl(){
// 	console.log("hello from controller");
// }