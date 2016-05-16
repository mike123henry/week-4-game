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
      moveCharacterImg(attackCharacterChoosen, defendCharacterChoosen, attackObj);
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
      moveCharacterImg(attackCharacterChoosen, defendCharacterChoosen, defendObj);
    }//end of else if !defendCharacterChoosen
    console.log("attackObj.id = " + attackObj.id);
    console.log("attackObj.image = " + attackObj.image);
    console.log("defendObj.id = " + defendObj.id);
  }//end of assignCombatants()
  function moveCharacterImg(attackCharacterChoosen, defendCharacterChoosen){
    if (attackCharacterChoosen && !defendCharacterChoosen) {
      console.log("attackObj.id = " + attackObj.id);
      var attackerChoosenImg = document.getElementById(attackObj.id);
      var attackCharacterImg = document.getElementById('attackerImg');
      attackCharacterImg.src = attackerChoosenImg.src;
      //var src1 = attackObj.image;
      //console.log("src1 = " + src1.image);
      //$("#attackerImg").attr("src", src1);
    }// end of isAttacker move
  }//end of moveCharacterImg()
}//end of file