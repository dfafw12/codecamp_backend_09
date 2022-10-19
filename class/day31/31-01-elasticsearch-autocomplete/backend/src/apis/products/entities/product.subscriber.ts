import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';
import { BigQuery } from '@google-cloud/bigquery';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Product;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log(event); // event.entity.price, event.entity.isSoldOut.. 등등 엔티티에 있는게 event에  들어옴

    // 사용 방법 ex)
    // 1. 여기서 발생한 로그를 서버 컴퓨터에 저장. => 시간별,일자별, 로그 로테이션. 단점 : 느림,관리하기 힘듦

    // 2. DB에 로그 테이블 만들어 저장. 단점 : 관리하기 힘듦 확장성이 좋지않음.

    // 3. 외부 빅데이터(BigQuery등) 관련 DB에 로그테이블 만들고 저장.
    const bigQuery = new BigQuery({
      projectId: 'bionic-region-364005',
      keyFilename: 'gcp-bigquery.json',
    });

    bigQuery
      .dataset('mybigquery09')
      .table('productlog')
      .insert([
        {
          id: event.entity.id,
          name: event.entity.name,
          description: event.entity.description,
          price: event.entity.price,
          isSoldout: event.entity.isSoldOut,
        },
      ]);
    // =================================================================
    // 1. 트리거는 언제 사용하면 안될까?
    // 트랜잭션 연결된 중요한 내용들...

    // 2. 어떤 것들을 사용하면 좋을까?
    // 메인 로직에 큰 피해를 안끼치는 로직들... (통계 계산, 로그 쌓기)
  }
}
