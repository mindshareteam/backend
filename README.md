# 시작하기
## 추천글
### prisma + graphql + yoga 듀토리얼(한글자료)(블로그)
https://velog.io/@cadenzah/tags/graphql-yoga
### 모델링 할 때 참고자료(type, filed 종류)(공식문서)
https://www.prisma.io/docs/datamodel-and-migrations/datamodel-POSTGRES-knum/

## 사용할 stack

* graphql
* prisma
* JS 플랫폼 : node.js


## 빌드하기
```
npm run build
```
## 개발 서버 돌리기 ()
```
npm run serve
```

# prisma
설치하기

```
npm install -g prisma
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


# graphql app
https://www.prisma.io/docs/get-started/03-build-graphql-servers-with-prisma-JAVASCRIPT-e001/

```
npm install --save graphql-yoga
```

# 모델링
### Center(복지관)
* id
* name! (이름)
* address! 주소
* images[]
* 위도
* 경도

### Review
* id!
* user!
* star! # (1,2,3,4,5)
* decs
* 