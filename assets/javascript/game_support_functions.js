{
  function initlizeNewGame(){
    attackCharacterChoosen = false;
    defendCharacterChoosen = false;
    attackObj={};
    defendObj={};
  }

  function printMe(passedIn){
    console.log(passedIn);
  }

  function outputInstructionsToHTML(instructionLevel){
    switch(instructionLevel){
      case 1:

        break;
    }//end switch(instructionLevel)
  }//function outputInstructionsToHTML

  function assignCombatants(eTargetId){
    if (attackCharacterChoosen === false){
      switch(eTargetId){
        case "stallone":
          attackObj=characterProfilesObj.stalloneObj;
          break;
        case "statham":
          attackObj=characterProfilesObj.stathamObj;
          break;
        case "lundgren":
          attackObj=characterProfilesObj.lundgrenObj;
          break;
        case "jetli":
          attackObj=characterProfilesObj.jetliObj;
          break;
        default :
          alert("problem with the code -- ! attackCharacterChoosen eTargetId =" + eTargetId );
          break;
      }//end switch(instructionLevel)
      attackCharacterChoosen=true;
    }//end of if !attackCharacterChoosen
    else if (attackCharacterChoosen === true && defendCharacterChoosen === false){
      switch(eTargetId){
        case "stallone":
          defendObj=characterProfilesObj.stalloneObj;
          break;
        case "statham":
          defendObj=characterProfilesObj.stathamObj;
          break;
        case "lundgren":
          defendObj=characterProfilesObj.lundgrenObj;
          break;
        case "jetli":
          defendObj=characterProfilesObj.jetliObj;
          break;
        default :
          alert("problem with the code -- ! defendCharacterChoosen eTargetId =" + eTargetId );
          break;
      }//end switch(instructionLevel)
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
    }// end of Defender move
    outputDmzHealthPoints()
  }//end of moveCharacterImg()
  function doBattle(eTargetId){
    defendObj.healthPoints -= attackObj.currentAttackPoints;
    if (defendObj.healthPoints <= 0) {
      defendObj.healthPoints=0;
      defenderDead = true;
    }
    attackObj.healthPoints -= defendObj.returnAttackPoints;
    if (attackObj.healthPoints <= 0) {
      attackObj.healthPoints=0;
      attackerDead = true;
    }
    attackObj.currentAttackPoints += attackObj.baseAttackPoints;
    outputDmzHealthPoints()
  }//end of attackFunction()
  function outputDmzHealthPoints(){
    $('#attackerHP').text(attackObj.healthPoints);
    $('#defenderHP').text(defendObj.healthPoints);
  }
}//end of file