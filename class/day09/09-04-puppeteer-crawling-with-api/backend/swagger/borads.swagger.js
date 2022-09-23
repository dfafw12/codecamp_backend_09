/**
 * @swagger
 * /boards:
 *   get:
 *     summary: 게시글 가져오기
 *     tags: [Board]
 *     parameters:
 *        - in: query
 *          name: number
 *          type: int
 *        - in: query
 *          name: writer
 *          type: string
 *        - in: query
 *          name: title
 *          type: string
 *        - in: query
 *          name: contents
 *          type: string
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *            application/json:
 *                     schema:
 *                        type: array
 *                        items:
 *                           properties:
 *                              number:
 *                                  type: int
 *                                  example: 1
 *                              writer:
 *                                  type: string
 *                                  example: 철수
 *                              title:
 *                                  type: string
 *                                  example: 좋은아침입니다.
 *                              contents:
 *                                  type: string
 *                                  example: 오늘 하루도 화이팅 하세요!
 */

/**
 *  @swagger
 * /boards:
 *     post:
 *        summary: 게시글 등록하기
 *        tags: [Board]
 *        parameters:
 *          - in: query
 *            name: password
 *            type: string
 *        responses:
 *             200:
 *                description: 성공
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items:
 *                                properties:
 *                                    message:
 *                                        type: string
 *                                        example : 게시물이 정상적으로 등록되었습니다.
 */
