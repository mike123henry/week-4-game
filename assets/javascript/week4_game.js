
$(document).ready(function(){
  initlizeNewGame();
  $('.char_img').on("click", function(e) {
    assignCombatants(e.target.id);
  }) //end .char_img').on("click"
  $('#dmzAttack').on("click", function(e) {
    doBattle();
  }) //end #dmzAttack').on("click"
//game functions

}) //end (document).ready