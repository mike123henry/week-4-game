{
  function initlizeFirstGame(){
    attackCharacterChoosen = false;
    defendCharacterChoosen = false;
    attackObj={};
    defendObj={};
    badGuys=3;
    gameOver=false;
    $('.stallone').show();
    $('.statham').show();
    $('.lundgren').show();
    $('.jetli').show();
    $('#attackerHP').hide();
    $('#defenderHP').hide();
    $('#stallone-p2').text(characterProfilesObj.stalloneObj.healthPoints);
    $('#statham-p2').text(characterProfilesObj.stathamObj.healthPoints);
    $('#lundgren-p2').text(characterProfilesObj.lundgrenObj.healthPoints);
    $('#jetli-p2').text(characterProfilesObj.jetliObj.healthPoints);
  }
  function initNextBadGuy(){
    var tmp = $('#defenderImg').attr('src');
    $("#" + defendObj.name).attr('src', tmp);
     $("." + defendObj.name).show();
     $("#" + defendObj.name + "-p2").text(0);
    defendObj={};
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
    var attackerDead;
    var defenderDead;
    defendObj.healthPoints -= attackObj.currentAttackPoints;
    if (defendObj.healthPoints <= 0) {
      defendObj.healthPoints=0;
      defenderDead = true;
    }
    else{
      defenderDead = false;
    }
    attackObj.healthPoints -= defendObj.returnAttackPoints;

    if (attackObj.healthPoints <= 0) {
      attackObj.healthPoints=0;
      attackerDead = true;
    }
    else{
      attackerDead = false;
    }
    attackObj.currentAttackPoints += attackObj.baseAttackPoints;
    outputDmzHealthPoints();
    evalGameWonStatus(defenderDead , attackerDead);
  }//end of attackFunction()

  function outputDmzHealthPoints(){
    if (attackCharacterChoosen) {
      $('#attackerHP').text(attackObj.healthPoints).show();
    }
    if (defendCharacterChoosen) {
      $('#defenderHP').text(defendObj.healthPoints).show();
    }
  }
  function evalGameWonStatus(defenderDead , attackerDead){
        if (attackerDead) {
      $('#dmzAttack').text('Your Dead Game Over -- Click here to reset');
      gameOver=true;
    }
    else if (defenderDead) {
      $('#defenderImg').attr('src',ripSrc[3-badGuys])
      $('#dmzAttack').text('Click here to choose new defender');
      defendCharacterChoosen=false;
      badGuys--;
      gameOver=true;
    }


}

}//end of file