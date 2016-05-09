// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps){
  // NOTE: maybe save timeBetweenSteps func, for later use
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.step(timeBetweenSteps); // update this step function

};

MakeDancer.prototype.step = function(timeBetweenSteps){
  console.log('MakeDancer step is running');
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // NOTE, may need to use a complete function inside of setTimeout as below:
  setTimeout(function(){return this.step }, timeBetweenSteps);
  //setTimeout(this.step(), timeBetweenSteps);

};

MakeDancer.prototype.setPosition = function(top, left){
  console.log('setPosition');
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};