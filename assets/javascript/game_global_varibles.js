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
        healthPoints: 100,
        healthPointsPreserve:100,
        baseAttackPoints: 20,
        currentAttackPoints: 20,
        returnAttackPoints: 15
      },
      stathamObj: {
        name: "statham",
        image: "assets/images/statham.jpg",
        healthPoints: 125,
        healthPointsPreserve:125,
        baseAttackPoints: 25,
        currentAttackPoints: 25,
        returnAttackPoints: 15
      },
      lundgrenObj: {
        name: "lundgren",
        image: "assets/images/lundgren.jpg",
        healthPoints: 85,
        healthPointsPreserve:85,
        baseAttackPoints: 30,
        currentAttackPoints: 30,
        returnAttackPoints: 10
      },
      jetliObj: {
        name: "jetli",
        image: "assets/images/jetli.jpg",
        healthPoints: 75,
        healthPointsPreserve:75,
        baseAttackPoints: 35,
        currentAttackPoints: 35,
        returnAttackPoints: 5
      }
  }
}