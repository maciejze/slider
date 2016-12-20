app.controller("mainController", function($scope, $interval) {
    // Slider constructor and methods
    function Slider(config) {
        this.images = config.images;
        if (config.intervalTime === undefined) this.intervalTime = 5000;
        if (config.autoPlay) this.play();
        this.leftPos = 0;
    }
    Slider.prototype = {
        scrollLeft: function() {
            this.leftPos += 100;
        },
        scrollRight: function() {
            this.leftPos -= 100;
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
            return this.activeImage() === index;
        },
        activeImage: function() {
          self = this;
          return Math.floor(Math.abs(self.leftPos / 100));
        }
    }

    //Slider initialization
    var config = {
        images: ['photo1.jpeg', 'photo2.jpeg', 'photo3.jpeg', 'photo4.jpeg', 'photo5.jpeg'],
    }
    $scope.slider = new Slider(config);

}).directive("swipeLeft",function(){
  return{
    link:function(scope, element, attrs);
  }
})
