import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        username: '',
        token: '',
    },

    //computed 와 유사
    getters: {
        isLogin(state) {
            return state.username !== '';
        }
    },

    mutations: {
        setUserName(state, username) {
            state.username = username;
        },
        clearUsername(state) {
            state.username = '';
        },
        setToken(state, token) {
            state.token = token;
        }
    }
});