<template>
  <div class="login">
    <el-row>
      <el-row justify="center" type="flex">
        <el-col :span="3"><span>username</span></el-col>
        <el-col :span="6"><el-input type="text" size="medium"></el-input></el-col>
      </el-row>
      <el-row justify="center" type="flex">
        <el-col :span="3">password</el-col>
        <el-col :span="6"><el-input type="password" size="medium"></el-input></el-col>
      </el-row>
      <el-row>
        <el-col :span="3" :offset="11"><el-button @click="login">Login</el-button></el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    login() {
      sessionStorage.setItem("BIGDATA_PLATFORM", "12345678907654321");
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%
}
.login{
  margin-top: 25%;
}

</style>
