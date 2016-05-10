
var MakeBlinkyDancer = function(top, left, timeBetweenSteps){

  // NOTE, we replaced the line below with line 5
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  MakeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //var newStep = this.step;//

};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function(timeBetweenSteps){
  console.log('blinkyDancer step is running');
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep(); // NOTE, leaving this in, caused problems so we commented it out.
  (MakeDancer.prototype.step).call(this, timeBetweenSteps);


  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  //console.log('after toggle');
};
