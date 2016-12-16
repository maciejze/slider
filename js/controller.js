app.controller("mainController", function($scope, $interval) {
    // Slider constructor and methods
    function Slider(config) {
        this.images = config.images;
        if (config.interval === undefined) config.interval = 5000;
        if (config.autoPlay) this.play(config.interval);
        this.leftPos = 0;
    }
    Slider.prototype = {
        scrollLeft: function() {
            this.leftPos += 100;
        },
        scrollRight: function() {
            this.leftPos -= 100;
        },
        play: function(interval) {
            self = this;
            if(interval === undefined) interval = 5000;
            self.interval = $interval(function() {
                self.scrollRight()
            }, interval)
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
            return Math.floor(Math.abs(self.leftPos / 100)) === index;
        }
    }


    //Slider initialization
    var config = {
        images: ['photo1.jpeg', 'photo2.jpeg', 'photo3.jpeg', 'photo4.jpeg', 'photo5.jpeg'],
        //autoPlay: true,
        //interval: 2000
    }
    $scope.slider = new Slider(config);



})
