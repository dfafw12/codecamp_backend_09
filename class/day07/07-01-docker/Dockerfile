# 컴퓨터 만드는 설명서

# 1. 운영체제 설치(노드 14 버전과 npm, yarn이 모두 설치되어 있는)
# FROM ubuntu:22.04
FROM node:14

# 2. nodejs와 yarn 설치하기
# RUN apt install node.js
# RUN npm install -g yarn


# 3. 내컴에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기.
COPY ./index.js /
# Run yarn start:loc


# 4. 또커 안예써 express 실행시키기
# RUN yarn start:loc
CMD node index.js 
# CMD 는 한번밖에 못쓴다 나머지는 게속 쓸수 있다.

