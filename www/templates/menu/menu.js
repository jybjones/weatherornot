angular.module('won.menu', [])
  .controller('MenuCtrl', function (location, $scope, $rootScope) {
    $scope.favorites = location.favorites;

    $rootScope.$on('menuItemChanged', function (event, message) {
      $scope.favorites = location.favorites;
    });

    $scope.makeFavorite = function (obj) {
      location.addFavorite(obj);
      $rootScope.$emit('menuItemChanged');
    };
  });
