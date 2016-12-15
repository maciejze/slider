app.controller("mainController", function($scope) {
    $scope.images = ['photo1.jpeg', 'photo2.jpeg', 'photo3.jpeg']

    $scope.leftPos = 0;

    $scope.scrollRight = function() {
        $scope.leftPos -= 100;
    }

    $scope.scrollLeft = function() {
        $scope.leftPos += 100;
    }

    $scope.isActive = function(index) {
        return Math.floor(Math.abs($scope.leftPos / 100)) === index;
    }

    $scope.scrollTo = function(index) {
        $scope.leftPos = -100 * index;

    }
});
