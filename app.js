(function () {
'use strict';

angular.module('MyAppli', [])
.controller('LunchController', LunchController);

//LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.lunchmenu = "" ;
  $scope.message = "";
//  console.log($scope.lunchmenu.toString());

  $scope.traitementmenu = function () {
//      console.log(angular.isArray(  $scope.lunchmenu));
//      console.log( $scope.lunchmenu);
      var stringsplit = $scope.lunchmenu.split(',');
//      console.log(stringsplit.length);

};
$scope.calculate = function () {
  var stringsplit = $scope.lunchmenu.split(',');
//      console.log(stringsplit.length);
  if (stringsplit== "")
  {
    $scope.message="Please enter data first";
  }
  else if (stringsplit.length <4)
   {
      $scope.message="Enjoy!";
  }
  else
   {
      $scope.message="Too much!";
  }
       console.log($scope.message) ;
};

}

})();
