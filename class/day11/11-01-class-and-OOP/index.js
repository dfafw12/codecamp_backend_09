const a = new Date();
console.log(a.getFullYear());
console.log(a.getMonth() + 1);

class Monster {
  power = 10;

  constructor(a) {
    this.power = a;
  }

  attack = () => {
    console.log("공격!");
    console.log(`내공격력은 ${this.power} 임`);
  };

  run = () => {
    console.log(" 도망가~ ");
  };
}

const myMonster1 = new Monster(20);
myMonster1.attack();
myMonster1.run();
const myMonster2 = new Monster(50);
myMonster2.attack();
myMonster2.run();
