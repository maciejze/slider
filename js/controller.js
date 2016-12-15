app.controller("mainController", function($scope) {
    $scope.dupa = 'dupa';
    $scope.images = ['photo1.jpeg', 'photo2.jpeg', 'photo3.jpeg']
    $scope.active = 0;



    $scope.scrollRight = function() {
        // var first = angular.copy($scope.images[0]);
        // for (var i = 0; i < $scope.images.length - 1; i++) {
        //     $scope.images[i] = $scope.images[i + 1];
        // }
        // $scope.images[$scope.images.length - 1] = first;
        $scope.active === $scope.images.length - 1 ? $scope.active = 0 : $scope.active = $scope.active + 1;
    }
    $scope.scrollLeft = function() {
        $scope.active === 0 ? $scope.active = $scope.images.length - 1 : $scope.active = $scope.active - 1;
    }

    $scope.scrollTo = function(index) {
        if (index >= $scope.active) {
            var scroll = index - $scope.active;
            for (var i = 0; i < scroll; i++) {
                $scope.scrollRight();
            }
        } else {
          var scroll = $scope.active - index;
          for (var i = 0; i < scroll; i++) {
              $scope.scrollLeft();
          }
        }

    }
});

Array.prototype.moveRight = function(from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};
