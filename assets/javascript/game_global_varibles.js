{
var attackCharacterChoosen;
var defendCharacterChoosen;
var attackObj;
var defendObj;
var badGuys;
var ripSrc = ['assets/images/rip1.jpg','assets/images/rip2.jpg','assets/images/rip3.jpg'];
var characterProfilesObj = {
      stalloneObj: {
        name: "stallone",
        image: "assets/images/stallone.jpg",
        healthPoints: 15,
        baseAttackPoints: 25,
        currentAttackPoints: 25,
        returnAttackPoints: 15
      },
      stathamObj: {
        name: "statham",
        image: "assets/images/statham.jpg",
        healthPoints: 150,
        baseAttackPoints: 25,
        currentAttackPoints: 25,
        returnAttackPoints: 15
      },
      lundgrenObj: {
        name: "lundgren",
        image: "assets/images/lundgren.jpg",
        healthPoints: 151,
        baseAttackPoints: 25,
        currentAttackPoints: 25,
        returnAttackPoints: 15
      },
      jetliObj: {
        name: "jetli",
        image: "assets/images/jetli.jpg",
        healthPoints: 152,
        baseAttackPoints: 25,
        currentAttackPoints: 25,
        returnAttackPoints: 15
      }
  }
}