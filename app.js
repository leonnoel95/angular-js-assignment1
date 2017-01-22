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
    $scope.myObjText = {
     "border" : "solid 1px red"
    }
    $scope.myObj = {
   "color" : "red",
    };

  }
  else if (stringsplit.length <4)
   {
      $scope.message="Enjoy!";
      $scope.myObjText = {
       "border" : "solid 1px green"
      }
      $scope.myObj = {
     "color" : "green",
      };
  }
  else
   {
      $scope.message="Too much!";
      $scope.myObjText = {
       "border" : "solid 1px green"
      }

      $scope.myObj = {
      "color" : "green",
      }

  }
       console.log($scope.message) ;
       console.log($scope.myObj) ;

};

}

})();
