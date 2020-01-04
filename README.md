# 시작하기
## 사용할 stack

* http library : express (안 사용할 수도 있다.)
* 번들러 : parcel
* JS 플랫폼 : node.js

# parcel  
https://ko.parceljs.org/getting_started.html

```
npm install -g parcel-bundler
```

```
yarn global add parcel-bundler
```

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
