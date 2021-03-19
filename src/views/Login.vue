<template>
  <div class="login-form">
    <el-form :model="loginForm" label-width="80px">
      <el-form-item label="用户名" prop="account">
        <el-input v-model="loginForm.username" type="text" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
  <p>token: {{ token }}</p>
</template>

<script>
export default {
  name: "Login",
  setup() {},
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      token: "null",
    };
  },
  methods: {
    login() {
      this.$api.login.login(this.loginForm).then((res) => {
        this.token = res.token;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-form {
  width: 500px;
}
</style>
