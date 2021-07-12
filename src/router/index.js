import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

export default new VueRouter({
    //history 모드의 경우 배포시에 추가 설정이 필요
    //Vue 공식문서 확인
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            //코드 스플리팅
            //SPA에서 한번에 컴포넌트를 불러오지 않도록 하는 방식
            //url 이 불릴 때 컴포넌트를 호출
            component: () => import('@/views/LoginPage.vue')
        },
        {
            path: '/signup',
            component: () => import('@/views/SignupPage.vue')
        },
        {
            paht: '/main',
            component: () => import('@/views/MainPage.vue')
        },
        {
            //callback 라우터
            //상위에 할당된 url 이외에 모든 경로를 아래 컴포넌트로 리턴
            path: '*',
            component: () => import('@/views/NotFoundPage.vue')
        },


    ]
});
