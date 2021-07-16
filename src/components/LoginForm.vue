<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button
          :disabled="!isUsernameValid || !password"
          type="submit"
          class="btn"
        >
          로그인
        </button>
      </form>
    </div>
  </div>
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

        //mutation 호출
        //store 에 토큰 저장
        this.$store.commit("setToken", data.token);
        this.$store.commit("setUsername", data.user.username);

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
.btn {
  color: white;
}
</style>