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
    $('#dmzAttack').text('Click character image to choose your character');
  }
  function initNextBadGuy(){
    var tmp = $('#defenderImg').attr('src');
    $("#" + defendObj.name).attr('src', tmp);
     $("." + defendObj.name).show();
     $("#" + defendObj.name + "-p2").text(0);
     $('.defender').hide();
     $('#dmzImg').hide();
    defendObj={};
    gameOver=false;
  }
  function assignCombatants(eTargetId){
    if (attackCharacterChoosen === false){
      var tmp = eTargetId +"Obj"
      attackObj=characterProfilesObj[tmp];
      attackCharacterChoosen=true;
    }//end of if !attackCharacterChoosen
    else if (attackCharacterChoosen === true && defendCharacterChoosen === false && badGuys >0 && badGuys < 3) {
      initNextBadGuy();
      var tmp = eTargetId +"Obj"
      defendObj=characterProfilesObj[tmp];
      defendCharacterChoosen=true;
    }
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
      $('#dmzAttack').text('Click character image to choose the evil character');
    }// end of Attacker move
    else if (attackCharacterChoosen && defendCharacterChoosen) {
      var defenderChoosenImg = $("#" + defendObj.name).attr('src');
      $('#defenderImg').attr('src',defenderChoosenImg)
      $('.' + defendObj.name).hide();
      $('#dmzAttack').text('Click here to Attack');
      $('.defender').show();
    }// end of Defender move
    outputDmzHealthPoints()
  }//end of moveCharacterImg()

  function doBattle(){
    var attackerDead;
    var defenderDead;
    var computerGuess = fightSrc[Math.floor(Math.random()*fightSrc.length)];
    $('#dmzImg').attr('src',computerGuess).show();
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
  }//end of doBattle()

  function outputDmzHealthPoints(){
    if (attackCharacterChoosen) {
      $('#attackerHP').text(attackObj.healthPoints).show();
    }
    if (defendCharacterChoosen) {
      $('#defenderHP').text(defendObj.healthPoints).show();
    }
  }//end of outputDmzHealthPoints()

  function evalGameWonStatus(defenderDead , attackerDead){
        if (attackerDead) {
      $('#dmzAttack').text('Your Dead Game Over -- Click here to reset');
      gameOver=true;
    }
    else if (defenderDead) {
      $('#defenderImg').attr('src',ripSrc[3-badGuys]);
      badGuys--;
      if (badGuys > 0) {
        $('#dmzAttack').text('Click character image to choose new defender');
      }
      else{
        winnerFlash();
        var tmp = $('#defenderImg').attr('src');
        $("#" + defendObj.name).attr('src', tmp);
        $("." + defendObj.name).show();
        $("#" + defendObj.name + "-p2").text(0);
        $('.defender').hide();
        $('#dmzImg').hide();
      }
      defendCharacterChoosen=false;
      gameOver=true;
    }
  }//end of evalGameWonStatus()

  function winnerFlash(){
    var tmp = $('#dmzAttack').css("background-color");
    $('#dmzAttack').text('WINNER!!');
    $('#dmzAttack').css("background-color", "green");

    //var cssRed = $('#dmzAttack').css("background-color", "red");
    //var cssGrn = $('#dmzAttack').css("background-color", "green");

    //setTimeout(function(){$('#dmzAttack').css("background-color", "red")}, 3000);
    //setTimeout(function(){$('#dmzAttack').css("background-color", "green")}, 3000);
    //setTimeout(function(){$('#dmzAttack').text('Click here to reset the game')}, 3000);
    //setTimeout(function(){$('#dmzAttack').css("background-color", rgb(0,0,0))}, 3);
    setTimeout(function(){ setRed();}, 3000);
  }

  function setRed(){
    $('#dmzAttack').text('WINNER!! WINNER!!');
    $('#dmzAttack').css("background-color", "red");
    setTimeout(function(){ setGrn();}, 3000);
  }
  function setGrn(){
    $('#dmzAttack').text('WINNER!! WINNER!! WINNER!!');
    $('#dmzAttack').css("background-color", "green");
    setTimeout(function(){ setReset();}, 3000);
  }
  function setReset(){
    $('#dmzAttack').text('Click here to reset the game');
    $('#dmzAttack').css("background-color", "rgba(0, 0, 0, 0)");
  }
}//end of file