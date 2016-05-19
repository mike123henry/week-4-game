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
        healthPoints: 15,
        healthPointsPreserve:15,
        baseAttackPoints: 25,
        currentAttackPoints: 25,
        returnAttackPoints: 15
      },
      stathamObj: {
        name: "statham",
        image: "assets/images/statham.jpg",
        healthPoints: 150,
        healthPointsPreserve:150,
        baseAttackPoints: 25,
        currentAttackPoints: 25,
        returnAttackPoints: 15
      },
      lundgrenObj: {
        name: "lundgren",
        image: "assets/images/lundgren.jpg",
        healthPoints: 151,
        healthPointsPreserve:151,
        baseAttackPoints: 25,
        currentAttackPoints: 25,
        returnAttackPoints: 15
      },
      jetliObj: {
        name: "jetli",
        image: "assets/images/jetli.jpg",
        healthPoints: 152,
        healthPointsPreserve:152,
        baseAttackPoints: 25,
        currentAttackPoints: 25,
        returnAttackPoints: 15
      }
  }
}