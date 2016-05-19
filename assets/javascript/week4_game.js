
$(document).ready(function(){
  initlizeFirstGame();
  $('.char_img').on("click", function(e) {
    assignCombatants(e.target.id);
  }) //end .char_img').on("click"
  $('#dmzAttack').on("click", function(e) {
    if (!gameOver && badGuys > 0 && attackObj.healthPoints > 0) {
      doBattle();
    }
    else if (attackObj.healthPoints > 0) {
      //add something here to handle the click on the wrong spot
      //maybe some audio......
    }
    else{
      initlizeFirstGame();
    }
  }) //end #dmzAttack').on("click"
//game functions

}) //end (document).ready