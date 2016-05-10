
var GrowingDancer = function(top, left, timeBetweenSteps, type){

  Dancer.call(this, top, left, timeBetweenSteps, type);
};

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep(); // NOTE, leaving this in, caused problems so we commented it out.
  (Dancer.prototype.step).call(this, timeBetweenSteps);


  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  //console.log('after toggle');
};
