import axios from 'axios';



//공통 설정 관리
const instance = axios.create({
    //.env 설정 활용
    //Vue CLI 3 버전 이상부터 VUE_APP_* 로 호출 가능
    baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
    return instance.post('signup', userData);
};

function loginUser(userData) {

    return instance.post('login', userData);
}


export { registerUser, loginUser }