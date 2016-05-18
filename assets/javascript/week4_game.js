
$(document).ready(function(){
  initlizeFirstGame();
  $('.char_img').on("click", function(e) {
    assignCombatants(e.target.id);
  }) //end .char_img').on("click"
  $('#dmzAttack').on("click", function(e) {
    if (gameOver && badGuys > 0 && attackObj.healthPoints > 0) {
      initNextBadGuy();
    }
    else if (gameOver && (!badGuys > 0 || !attackObj.healthPoints > 0)) {
      initlizeFirstGame();
    }
    else{
      doBattle();
    }
  }) //end #dmzAttack').on("click"
//game functions

}) //end (document).ready