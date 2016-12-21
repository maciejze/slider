app.controller("mainController", function($scope, $interval) {
    // Slider constructor and methods
    function Slider(config) {
        this.images = config.images;
        this.intervalTime = config.intervalTime;
        if (config.intervalTime === undefined) this.intervalTime = 5000;
        if (config.autoPlay) this.play();
        this.leftPos = 0;
    }
    Slider.prototype = {
        scrollLeft: function() {
            this.activeImageIndex() === 0 ? this.leftPos = (this.images.length - 1) * (-100) : this.leftPos += 100;

        },
        scrollRight: function() {

            this.activeImageIndex() === this.images.length - 1 ? this.leftPos = 0 : this.leftPos -= 100;

        },
        play: function() {
            self = this;
            self.interval = $interval(function() {
                self.scrollRight()
            }, self.intervalTime)
        },
        stop: function() {
            self = this;
            $interval.cancel(self.interval);
            self.interval = undefined;
        },
        scrollTo: function(index) {
            this.leftPos = -100 * index;
        },
        activeBullet: function(index) {
            self = this;
            return this.activeImageIndex() === index;
        },
        activeImageIndex: function() {
            self = this;
            return Math.floor(Math.abs(self.leftPos / 100));
        }
    }

    //Slider initialization
    var config = {
        images: ['photo1.jpeg', 'photo2.jpeg', 'photo3.jpeg', 'photo4.jpeg', 'photo5.jpeg'],
        autoPlay: true,
        intervalTime:6000
    }
    $scope.slider = new Slider(config);


}).directive("swipeable", function() {
    return {
        scope: {
            slider: "=slider",
        },
        link: function(scope, element, attrs) {
            var touchstartPos = 0;
            var touchendPos = 0;
            var sliderElement = $(element);
            sliderElement.on('touchstart', function(event) {
                touchstartPos = event.originalEvent.touches[0].pageX;

            });
            sliderElement.on('touchmove', function(event) {
                touchendPos = event.originalEvent.touches[0].pageX;
            })
            sliderElement.on('touchend', function(event) {
                if (touchstartPos - touchendPos > 100) scope.slider.scrollRight();
                if (touchstartPos - touchendPos < -100) scope.slider.scrollLeft();
                scope.$apply();

            });
        }
    }
})
