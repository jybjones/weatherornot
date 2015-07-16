angular.module('won.settings', [])
  .controller('SettingsCtrl', function (settings, $scope, $ionicLoading) {
    // $scope.scale = localStorage.scale;
    $scope.scale = settings.scale;
    // $scope.precision = localStorage.precision;
    $scope.precision = settings.precision;

    $scope.scales = [
     {symbol: 'F', name: 'Fahrenheit'},
     {symbol: 'C', name: 'Celsuis'},
     {symbol: 'K', name: 'Kelvin'},
     {symbol: 'Ra', name: 'Rankine'},
     {symbol: 'D', name: 'Delisle'},
     {symbol: 'N', name: 'Newton'},
     {symbol: 'Ré', name: 'Réaumur'},
     {symbol: 'Rø', name: 'Rømer'},
     {symbol: 'X', name: 'Random'}
    ];

//////getting local storage/////
// $scope.$watch('precision', function () {
//   localStorage.precision = $scope.precision;
// });
$scope.$watch('precision', function () {
  settings.precision = $scope.precision;
});

/////setting local storage//////
$scope.$watch('scale', function () {
    if ($scope.scale === 'X') {
      $ionicLoading.show ({
        template: '<img src="img/whatshappening.gif">',
        duration: 5000
      });
    }
      // localStorage.scale = $scope.scale;
      settings.scale = $scope.scale;
    });
  })

  .factory('settings', function () {
    return {
      get scale() {
        return localStorage.getItem('scale') || 'F';
      },
      get precision() {
        return localStorage.getItem('precision') || '2';
      },
      set scale(s) {
        localStorage.setItem('scale', s);
      },
      set precision(p) {
        localStorage.setItem('precision', p);
      }
    };
  });
