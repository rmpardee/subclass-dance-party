var MakeBlinkyDancer = function(top, left, timeBetweenSteps){

  this.oldStep = function(){
    MakeDancer.step(timeBetweenSteps);
  };
  // NOTE, we replaced the line below with line 5
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  MakeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var newStep = this.step;//

};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
//MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
MakeBlinkyDancer.prototype.constructor = MakeDancer;

MakeBlinkyDancer.prototype.step = function(){
  console.log('blinkyDancer step is running');
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep(); // NOTE, leaving this in, caused problems so we commented it out.

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};



// var test = new makeDancer(10,20,100);
// test.step();
// console.log(test);
//var makeBlinkyDancer = makeBlinkyDancer(top, left, timeBetweenSteps);



// var invokeBlinkyDancer = function(top, left, timeBetweenSteps){
//   return new makeBlinkyDancer(top, left, timeBetweenSteps);    
// };
// invokeBlinkyDancer()