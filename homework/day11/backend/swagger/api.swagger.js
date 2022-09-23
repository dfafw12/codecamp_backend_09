/**
 * @swagger
 * /users:
 *      get:
 *          summary: 회원목록 조회
 *          tags: [User]
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  properties:
 *                                      name:
 *                                          type: string
 *                                          example: 철수
 *                                      email:
 *                                          type: string
 *                                          example: dfafw12@naver.com
 *                                      pwd:
 *                                          type: string
 *                                          example: qwer1234
 *                                      personal:
 *                                          type: string
 *                                          example: 199707111234567
 *                                      phone:
 *                                          type: string
 *                                          example: 01012341234
 *                                      prefer:
 *                                          type: string
 *                                          example: https://www.naver.com
 *                                      og:
 *                                          type: object
 *                                          example: {title:네이버,description:네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요, image:https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png}
 */

/**
 * @swagger
 *  /users:
 *      post:
 *          summary: 회원가입
 *          tags: [User]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                                  required: true
 *                                  example: 철수
 *                              email:
 *                                  type: string
 *                                  required: true
 *                                  example: dfafw12@naver.com
 *                              pwd:
 *                                  type: string
 *                                  required: true
 *                                  example: qwer1234
 *                              personal:
 *                                  type: string
 *                                  required: true
 *                                  example: 9707111234567
 *                              phone:
 *                                  type: string
 *                                  required: true
 *                                  example: 01068807704
 *                              prefer:
 *                                  type: string
 *                                  required: true
 *                                  example: https://www.naver.com
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  properties:
 *                                      message:
 *                                          type: string
 *                                          example: 회원가입이 완료 되었습니다.
 */

/**
 * @swagger
 * /tokens/phone:
 *      post:
 *          summary: 토큰 인증요청
 *          tags: [Token]
 *          requestBody:
 *               required: true
 *               content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              phone:
 *                                  type: string
 *                                  required: true
 *                                  example: 01068807704
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  properties:
 *                                      message:
 *                                          type: string
 *                                          example: 토큰 전송 완료
 */

/**
 * @swagger
 * /tokens/phone:
 *      patch:
 *          summary: 토큰 인증 완료
 *          tags: [Token]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              phone:
 *                                  type: string
 *                                  required: true
 *                                  example: 01068807704
 *                              token:
 *                                  type: string
 *                                  required: true
 *                                  example: 111111
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  properties:
 *                                      message:
 *                                          type: string
 *                                          example: 인증 완료
 */

/**
 * @swagger
 * /starbucks:
 *      get:
 *          summary: 커피 목록 조회
 *          tags: [Starbucks]
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  properties:
 *                                      name:
 *                                          type: string
 *                                          example: 블랙 글레이즈드 라떼
 *                                      img:
 *                                          type: string
 *                                          example: https://image.istarbucks.co.kr/upload/store/skuimg/2022/08/[9200000002259]_20220819134201192.jpg
 *
 */
