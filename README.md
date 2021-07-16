# vue-til

## Vue 강의 기록

### Day1
```
개발환경 구성
 - jsconfig > 파일 불러올때 baseurl 변경
 - vue.config > vue 공통설정
```

### Day2
```
라우팅,로그인 폼 작성, API 설정 공통화

라우터 코드 스플리팅 > SPA 에서 불러오는 컴포넌트 제한하기
callbak 라우터 > 라우팅 규칙에 걸리지 않는 나머지 주소에 대한 반환
history 모드 관련 > history 모드는 실제 배포시 설정 변경이 필요함

API 설정 공통화
env 파일 생성
https://cli.vuejs.org/guide/mode-and-env.html#modes-and-environment-variables

Axios create > api 호출 간소화
https://github.com/axios/axios#axioscreateconfig

```

### Day3
```
Validation > 정규식을 통한 사용자 validation

Router push > JS 레벨에서 Vue Router 이동을 위함

Computed > 컴포넌트 단 data 변경이 있을 경우 실시간으로 받아옴

```



### Day4
```
axios interceptos
 - request, response 를 요청/받기 전에 특정 로직을 실행시키기 위함
 - 로그인,가입 등에는 필요 없겠지만 나중에 로그인 하고 실행하는 모든 요청에는 토큰이 필요하기 때문에 instance 를 통해 묶어서 관리 하는 것


http 요청을 새로 정의 할 때 headers 의 옵션값을 추가하여 CORS 등의 문제를 해결 가능
 - axios instance 에 옵션 추가하기
    https://github.com/axios/axios#request-config
 - http request 관련 Doc
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS
    https://developer.mozilla.org/ko/docs/Web/HTTP/CORS

Spinner 추가

```
