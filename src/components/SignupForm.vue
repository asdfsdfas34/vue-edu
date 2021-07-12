<template>
  <!-- prevent 옵션이 submit 할 때 새로고침 막아줌  -->
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id : </label>
      <input id="username" type="text" v-model="username1" />
    </div>
    <div>
      <label for="password">pw : </label>
      <input id="password" type="text" v-model="password1" />
    </div>
    <div>
      <label for="nickname">nickname : </label>
      <input id="nickname" type="text" v-model="nickname1" />
    </div>
    <button :disabled="!isEmailvalid || !password || !nickname" type="submit">
      회원가입
    </button>

    <h1>{{ logMessage }}</h1>
  </form>
</template>

<script>
import { registerUser } from "@/api/index.js";
import { validateEmail } from "@/utils/validation.js";

export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
      logMessage: "",
    };
  },

  computed: {
    isEmailvalid() {
      return validateEmail(this.username);
    },
  },

  methods: {
    async submitForm() {
      console.log("폼제출");
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };

      const response = await registerUser(userData);
      this.logMessage = response.data.username + " 님이 가입하셨습니다.";

      this.initForm();

      //return response;
      //return response.status;
    },
    initForm() {
      this.username = "";
      this.password = "";
      this.nickname = "";
    },
  },
};
</script>

<style>
</style>