
$(document).ready(function(){
  initlizeFirstGame();
  $('.char_img').on("click", function(e) {
    assignCombatants(e.target.id);
  }) //end .char_img').on("click"
  $('#dmzAttack').on("click", function(e) {
    if (!gameOver && badGuys > 0 && attackObj.healthPoints > 0) {
      doBattle();
    }
    else{
      //do nothing id dmzAttack is clicked
    }
  }) //end #dmzAttack').on("click"
//game functions

}) //end (document).ready