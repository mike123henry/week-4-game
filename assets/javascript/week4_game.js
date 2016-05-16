
$(document).ready(function(){
  initlizeNewGame();

    $('.char_img').on("click", function(e) {
      assignCombatants(e.target.id);
        // Checks if it's a number
        //if ($(this).hasClass("char_img") ){
            console.log("e.target.id = " + e.target);
            printMe("passedIn text e.target.id = " + e.target.id);
            console.log(characterProfilesObj.stalloneObj);

        //} //end if .hasClass("char_img")

    }) //end .on("click",

//game functions

}) //end (document).ready