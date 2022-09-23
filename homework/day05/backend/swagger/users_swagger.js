/**
 * @swagger
 * /users:
 *  get:
 *      summary: 정보 가져오기
 *      tags: [Users]
 *      parameters:
 *           - in: query
 *             name: email
 *             type: string
 *           - in: query
 *             name: name
 *             type: string
 *           - in: query
 *             name: phone
 *             type: string
 *           - in: query
 *             name: personal
 *             type: string
 *           - in: query
 *             name: prefer
 *             type: string
 *      responses:
 *          200:
 *              description: 성공
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              properties:
 *                                  email:
 *                                     type: string
 *                                     example: 철수
 *                                  name:
 *                                      type: string
 *                                      example: 맹구
 *                                  phone:
 *                                      type: string
 *                                      example: 010-1234-1234
 *                                  personal:
 *                                      type: string
 *                                      example: 264110-2222522
 *                                  prefer:
 *                                      type: string
 *                                      example: https://naver.com
 */
