$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var type = $(this).attr("id");
    // get the maker function for the kind of dancer we're supposed to make
    //console.log(window[dancerMakerFunctionName]);
    var dancerMakerFunction = window[dancerMakerFunctionName];
    //console.log(window[dancerMakerFunctionName]);

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      type
    );

    // Stores this dancer in our window.dancers array
    window.dancers.push(dancer);

    $('body').append(dancer.$node);
    
    console.dir(window.dancers[0]);
  });

  $('#linesUpDancers').on("click", function(event){
    // loop through the dancers
    for(var i = 0; i < window.dancers.length; i++) {
      // run the lineUp method on each
      window.dancers[i].lineUp();
    }
  });

  $('#getsDancersBack').on("click", function(event){
    
    for(var i = 0; i < window.dancers.length; i++) {

      window.dancers[i].getBack();
    }
  });


});

