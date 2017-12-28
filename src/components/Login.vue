<template>
  <div>
    <el-row>
      <el-col :span="6">username</el-col>
      <el-col :span="6"><el-input></el-input></el-col>
    </el-row>
    <el-row>
      <el-col :span="6">password</el-col>
      <el-col :span="6"><el-input type="password"></el-input></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><el-button @click="login">Login</el-button></el-col>
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

</style>
