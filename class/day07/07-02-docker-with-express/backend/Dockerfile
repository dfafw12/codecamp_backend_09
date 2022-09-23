FROM node:14

# RUN mkdir myfolder => myfolder 가 없으면 COPY 할때 어차피 자동으로 만들어짐
# RUN mkdir myfolder
COPY . /myfolder/
WORKDIR /myfolder/

RUN yarn install
CMD yarn start:dev