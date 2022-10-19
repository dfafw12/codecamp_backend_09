FROM node:14

WORKDIR /api-gateway/
COPY ./package.json /api-gateway/
COPY ./yarn.lock /api-gateway/
RUN yarn install
# packge.json 과 yarn.lock 파일아래에 yarn install 하는 이유는 
# 둘중하나가 변하지 않으면 빠르게 로드가능
# 변한 파일 아래는 전부 새롭게 설치하기 때문에 느려진다.
COPY . /api-gateway/
CMD yarn start:dev
# RUN mkdir api-gateway => api-gateway 가 없으면 COPY 할때 어차피 자동으로 만들어짐
# RUN mkdir api-gateway