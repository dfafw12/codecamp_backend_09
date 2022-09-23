import { Injectable } from '@nestjs/common';

@Injectable()
export class StarbucksService {
  data() {
    const result = [
      {
        name: '커피1',
        price: 1000,
        kcal: 10,
        saturatedFat: 10,
        protein: 10,
        sodium: 10,
        sugarContent: 10,
        caffeine: 10,
      },
      {
        name: '커피2',
        price: 2000,
        kcal: 20,
        saturatedFat: 20,
        protein: 20,
        sodium: 20,
        sugarContent: 20,
        caffeine: 20,
      },
      {
        name: '커피3',
        price: 3000,
        kcal: 30,
        saturatedFat: 30,
        protein: 30,
        sodium: 30,
        sugarContent: 30,
        caffeine: 30,
      },
      {
        name: '커피4',
        price: 4000,
        kcal: 40,
        saturatedFat: 40,
        protein: 40,
        sodium: 40,
        sugarContent: 40,
        caffeine: 40,
      },
      {
        name: '커피5',
        price: 5000,
        kcal: 50,
        saturatedFat: 50,
        protein: 50,
        sodium: 50,
        sugarContent: 50,
        caffeine: 50,
      },
    ];
    return result;
  }

  create({ createStarbucksInput }) {
    console.log({ createStarbucksInput });

    return '등록에 성공하였습니다.';
  }
}
