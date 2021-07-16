import axios from 'axios';
import { setInterceptors } from './common/interceptors.js'


function createInstance() {
    //공통 설정 관리
    //instance 로 수행하는 모든 요청은 아래 속성을 가지고 호출
    const instance = axios.create({
        //.env 설정 활용
        //Vue CLI 3 버전 이상부터 VUE_APP_* 로 호출 가능
        baseURL: process.env.VUE_APP_API_URL,
    });

    return setInterceptors(instance);
}

const instance = createInstance();



function registerUser(userData) {
    return instance.post('signup', userData);
};

function loginUser(userData) {

    return instance.post('login', userData);
}

function fetchPost() {

    return instance.get('posts')
}



export { registerUser, loginUser, fetchPost }