angular.module('won.weather', [])

  .controller('WeatherCtrl', function (weather, settings, $scope, $stateParams, $ionicLoading) {
    // var API_KEY = 'a5dd1792bd6e450c6a3a73c0c29da6f4';
    $scope.city = $stateParams.city;
    $scope.scale = settings.scale;
    $scope.precision = settings.precision;
    // $scope.settings();

    $ionicLoading.show({
      template: '<img src="/img/loading.gif"><h1>Loading...</h1>'
    });

    weather
      .getWeather($stateParams.lat, $stateParams.long)
      .success(function (data) {
        setTimeout(function () {
          $scope.current = data.currently;
          $ionicLoading.hide();
        }, 2000);
      });
  })

  //   $http
  //     .get('/api/forecast/' + $stateParams.lat + ',' + $stateParams.long)
  //     .success(function(data) {
  //       console.log(data);
  //     $scope.current = data.currently;
  //     // $scope.settings = localStorage.getItem;
  //     setTimeout($ionicLoading.hide, 1000);
  //     });
  // })
//////no HTTP in a CONTROLLER////////////
  .factory('weather', function (settings, $http) {
    var API_URL = 'api/forecast/';
    // var SI_PARAM = '?units=si';

    return {
      getWeather: function (lat, long) {
        var url = API_URL + lat + ',' + long + '?units=';
        if (settings.scale === 'C') {
          url += 'si';
        } else {
          url += 'us';
        }
        return $http.get(url);
      }
    };
  });
