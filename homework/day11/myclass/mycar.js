class MyCar {
  model = "";
  mp = "";
  color = "";

  constructor(color, model, mp) {
    this.model = model;
    this.mp = mp;
    this.color = color;
  }

  start = () => {
    console.log(`${this.color} 색 ${this.model} 출발 마력은 ${this.mp}`);
  };

  stop = () => {
    console.log(`${this.color} ${this.model} 출발 마력은 ${this.mp}`);
  };
}

const myCar1 = new MyCar("황금색", "마티즈", "100");
myCar1.start();
myCar1.stop();
