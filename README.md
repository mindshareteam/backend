# 시작하기
데이터베이스 서버는 메일 알려드리면 초대해드릴꼐요.
## 추천글
### prisma + graphql + yoga 듀토리얼(한글자료)(블로그)
https://velog.io/@cadenzah/tags/graphql-yoga
### 모델링 할 때 참고자료(type, filed 종류)(공식문서)
https://www.prisma.io/docs/datamodel-and-migrations/datamodel-POSTGRES-knum/

## 사용할 stack
* graphql server
* graphql
* prisma
* JS 플랫폼 : node.js

## 요약
### 필요한 패키지 
```
npm i -g nodemon prisma
```
```
npm install
```
### 개발 서버 돌리기
```
npm run serve
```

## 생성하기

장고에서 makemigartions이랑 비슷합니다.

```
prisma generate
``` 

## 데이터베이스 배포하기
데이터베이스 배포는 따로 해줘야 합니다.
```
prisma deploy
```

# zeit now 
서버 배포를 위한 라이브러리

이건 일단 제가 배포할께요

# graphql app
https://www.prisma.io/docs/get-started/03-build-graphql-servers-with-prisma-JAVASCRIPT-e001/

```
npm install --save graphql-yoga
```
