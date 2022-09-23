class Monster {
  power = 10;

  constructor(a) {
    this.power = a;
  }

  attack = () => {
    console.log("공격!");
    console.log(`내공격력은 ${this.power} 임`);
  };
}

class 공중몬스터 extends Monster {
  constructor(aaa) {
    super(aaa);
  }
  run = () => {
    console.log("날아서 도망가~ ");
  };
}

class 지상몬스터 extends Monster {
  constructor(aaa) {
    super(aaa);
  }
  run = () => {
    console.log("뛰어서 도망가~ ");
  };
}

const myMonster1 = new 공중몬스터(20);
const myMonster2 = new 지상몬스터(50);

myMonster1.attack();
myMonster1.run();

myMonster2.attack();
myMonster2.run();
