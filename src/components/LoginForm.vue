<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username"></label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password"></label>
      <input id="password" type="text" v-model="password" />
    </div>
    <!-- v-bind:disabled >> :disabled  -->
    <button :disabled="!isUsernameValid || !password">로그인</button>
  </form>
</template>

<script>
import { loginUser } from "@/api/index.js";
import { validateEmail } from "@/utils/validation.js";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  computed: {
    //component의 data 변화에 따라서 자동으로 연산되는 함수들

    isUsernameValid() {
      return validateEmail(this.username);
    },
  },

  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };

        const { data } = await loginUser(userData);
        console.log(data.user.username + "님 환영합니다.");

        //자바스크립트 레벨에서 router 이동
        this.$router.push("/main");
      } catch (error) {
        console.log(error);
      } finally {
        this.initForm();
      }
    },

    initForm() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style>
</style>