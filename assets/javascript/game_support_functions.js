{
  function initlizeFirstGame(){
    attackCharacterChoosen = false;
    defendCharacterChoosen = false;
    attackObj={};
    defendObj={};
    badGuys=3;
    gameOver=false;
  }

  function assignCombatants(eTargetId){
    if (attackCharacterChoosen === false){
      var tmp = eTargetId +"Obj"
      attackObj=characterProfilesObj[tmp];
      attackCharacterChoosen=true;
    }//end of if !attackCharacterChoosen
    else if (attackCharacterChoosen === true && defendCharacterChoosen === false){
      var tmp = eTargetId +"Obj"
      defendObj=characterProfilesObj[tmp];
      defendCharacterChoosen=true;
    }//end of else if !defendCharacterChoosen
    moveCharacterImg();
  }//end of assignCombatants()
  function moveCharacterImg(){
    if (attackCharacterChoosen && !defendCharacterChoosen) {
      var attackerChoosenImg = $("#" + attackObj.name).attr('src');
      $('#attackerImg').attr('src',attackerChoosenImg)
      $('.' + attackObj.name).hide();
    }// end of Attacker move
    else if (attackCharacterChoosen && defendCharacterChoosen) {
      var defenderChoosenImg = $("#" + defendObj.name).attr('src');
      $('#defenderImg').attr('src',defenderChoosenImg)
      $('.' + defendObj.name).hide();
      $('#dmzAttack').text('Click here to Attack');
    }// end of Defender move
    outputDmzHealthPoints()
  }//end of moveCharacterImg()
  function doBattle(){
    defendObj.healthPoints -= attackObj.currentAttackPoints;
    if (defendObj.healthPoints <= 0) {
      defendObj.healthPoints=0;
      var defenderDead = true;
    }
    else{
      defenderDead = false;
    }
    attackObj.healthPoints -= defendObj.returnAttackPoints;
    if (attackObj.healthPoints <= 0) {
      attackObj.healthPoints=0;
      var attackerDead = true;
    }
    else{
      attackerDead = false;
    }
    attackObj.currentAttackPoints += attackObj.baseAttackPoints;
    outputDmzHealthPoints();
    evalGameWonStatus(defenderDead , attackerDead);
  }//end of attackFunction()
  function outputDmzHealthPoints(){
    $('#attackerHP').text(attackObj.healthPoints);
    $('#defenderHP').text(defendObj.healthPoints);
  }
  function evalGameWonStatus(defenderDead , attackerDead){
        if (attackerDead) {
      $('#dmzAttack').text('Your Dead Game Over -- Click here to reset');
      gameOver=true;
    }
    else if (defenderDead) {
      $('#dmzAttack').text('Choose new defender');
      defendCharacterChoosen=false;
      badGuys--;
      if (badGuys>0){

      }
    }


}

}//end of file