{
var attackCharacterChoosen;
var defendCharacterChoosen;
var attackObj;
var defendObj;
var badGuys;
var ripSrc = ['assets/images/rip1.jpg','assets/images/rip2.jpg','assets/images/rip3.jpg'];
var fightSrc = ['assets/images/kapow.jpg',
                'assets/images/boom.jpg',
                'assets/images/pow.jpg',
                'assets/images/splatt.jpg',
                'assets/images/thwack.jpg',
                'assets/images/zonk.jpg'];
var characterProfilesObj = {
      stalloneObj: {
        name: "stallone",
        image: "assets/images/stallone.jpg",
        healthPoints: 104,
        healthPointsPreserve:104,
        baseAttackPoints: 9,
        currentAttackPoints: 9,
        returnAttackPoints: 18,
        alreadyFaught: false
      },
      stathamObj: {
        name: "statham",
        image: "assets/images/statham.jpg",
        healthPoints: 95,
        healthPointsPreserve:95,
        baseAttackPoints: 10,
        currentAttackPoints: 10,
        returnAttackPoints: 22,
        alreadyFaught: false
      },
      lundgrenObj: {
        name: "lundgren",
        image: "assets/images/lundgren.jpg",
        healthPoints: 75,
        healthPointsPreserve:75,
        baseAttackPoints: 17,
        currentAttackPoints: 17,
        returnAttackPoints: 4,
        alreadyFaught: false
      },
      jetliObj: {
        name: "jetli",
        image: "assets/images/jetli.jpg",
        healthPoints: 70,
        healthPointsPreserve:70,
        baseAttackPoints: 25,
        currentAttackPoints: 25,
        returnAttackPoints: 5,
        alreadyFaught: false
      }
  }
}