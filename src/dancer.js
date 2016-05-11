
  // now that we have defined the dancer object, we can // Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, type){
  // NOTE: maybe save timeBetweenSteps func, for later use
  //start setting up important parts of it by calling the methods we wrote
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer ' + type + '"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this._left = left;

  // call some methods initially:
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.step(timeBetweenSteps); // update this step function
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  // DEBATABLE IF NEEDED: 'this' inside here is the instance of BlinkyDancer (or Dancer). We want to save 'this' to a variable now so we can use it later when we may have a different 'this'
  var instanceThis = this;

  // setTimeout takes a FUNCTION as the first parameter and a time as the second.
  // NOTE: we can't use .bind DIRECTLY on step if we want to pass the tests. The tests are 'spying' on step, whereas .bind creates a copy, so we're no longer spying on it.
  setTimeout(function(){
    // we've passed in an anonymous function, which means 'this' inside it would be the window.
    // Since we want to be able to have 'this' be that of the instance, we'll use our saved variable instanceThis.
    instanceThis.step.call(instanceThis);
  }, instanceThis._timeBetweenSteps);

  // PASSING: version where we pass the parameter directly to step within the anonymous function
  // setTimeout(function(){
  //   this.step(timeBetweenSteps)
  // }.bind(this), timeBetweenSteps);

  // PASSING: version where bind takes a parameter and passes it to the anonymous function
  // setTimeout(function(param){
  //   this.step(param);
  // }.bind(this, timeBetweenSteps), timeBetweenSteps);

  // FAILING: version where bind acts directly on the step method
   // setTimeout(
    // this.step(timeBetweenSteps).bind(this), timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  // get the span node from the dancer
  var dancerSpan = this['$node'][0];
  // set the left position to 0px
  $(dancerSpan).css({left: '0px'});
};

Dancer.prototype.getBack = function() {
  // get the span node from the dancer
  var dancerSpan = this['$node'][0];
  // set the left position back to its original
  console.log("this._left: ", this._left);
  
  $(dancerSpan).css({left: this._left});
};

