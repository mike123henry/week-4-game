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
    console.log("eTargetId " + eTargetId + " attackCharacterChoosen " + attackCharacterChoosen +" defendCharacterChoosen " + defendCharacterChoosen)
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
     console.log("eTargetId " + eTargetId + " attackCharacterChoosen " + attackCharacterChoosen +" defendCharacterChoosen " + defendCharacterChoosen)
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
    console.log("attackObj.id = " + attackObj.id);
    console.log("attackObj.image = " + attackObj.image);
    console.log("defendObj.id = " + defendObj.id);
    console.log("defendObj.image = " + defendObj.image);
  }//end of assignCombatants()
  function moveCharacterImg(){
    if (attackCharacterChoosen && !defendCharacterChoosen) {
      console.log("attackObj.id = " + attackObj.id);
      var attackerChoosenImg = document.getElementById(attackObj.id);
      var attackCharacterImg = document.getElementById('attackerImg');
      attackCharacterImg.src = attackerChoosenImg.src;
      attackerChoosenImg.src = "";
    }// end of Attacker move
    else if (attackCharacterChoosen && defendCharacterChoosen) {
      console.log("xx defendObj.id = " + defendObj.id);
      console.log("xx defendObj.src = " + defendObj.image);
      var defenderChoosenImg = document.getElementById(defendObj.id);
      var defendCharacterImg = document.getElementById('defenderImg');
      console.log("xx defendObj.id = " + defendObj.id);
      console.log("defenderChoosenImg.src = " + defenderChoosenImg.src);
      defendCharacterImg.src = defenderChoosenImg.src;
      defenderChoosenImg.src = "";
    }// end of Defender move
  }//end of moveCharacterImg()
}//end of file