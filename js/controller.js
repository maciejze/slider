app.controller("mainController", function($scope) {
        $scope.slider = {
            images: ['photo1.jpeg', 'photo2.jpeg', 'photo3.jpeg', 'photo4.jpeg', 'photo5.jpeg'],
            leftPos: 0
        }

        $scope.scrollRight = function() {
            $scope.slider.leftPos -= 100;
        }

        $scope.scrollLeft = function() {
            $scope.slider.leftPos += 100;
        }

        $scope.isActive = function(index) {
            return Math.floor(Math.abs($scope.slider.leftPos / 100)) === index;
        }

        $scope.scrollTo = function(index) {
            $scope.slider.leftPos = -100 * index;

        }
    })
    // .directive("swipeable", function() {
    //     return {
    //         scope: {
    //             slider: "=slider",
    //         },
    //         link: function(scope, element, attrs) {
    //             var touchStartPos = 0;
    //             var touchCurrentPos = 0;
    //             var sliderElement = $(element);
    //             sliderElement.on('touchstart', function(event) {
    //                 touchStartPos = event.originalEvent.touches[0].pageX;
    //
    //             })
    //             sliderElement.on('touchmove', function(event) {
    //                 touchCurrentPos = event.originalEvent.touches[0].pageX;
    //                 scope.slider.leftPos += ((touchCurrentPos - touchStartPos)/sliderElement[0].clientWidth*15);
    //                 scope.$apply();
    //             })
    //             sliderElement.on('touchend', function(event) {
    //
    //                 if(scope.slider.leftPos.toFixed()%100 < -20){
    //                   scope.slider.leftPos -= (scope.slider.leftPos % 100);
    //                   console.log(scope.slider.leftPos);
    //                   scope.$apply();
    //                 }
    //             })
    //         }
    //     }
    // });
