<template>
  <el-container>
    <el-header>
      <!-- header
      <a href="#" @click="out">点我退出(要清除sessionId)</a> 
      -->
    </el-header>
    <el-container>
      <!-- 导航开始 -->
      <el-aside width="200px">
            <!-- <Menus/> -->
                <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :router="true"
        @open="handleOpen"
        @close="handleClose"
        @select="handleselect"
        >
        <el-menu-item index="/home">
            <template>
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </template>
        </el-menu-item>
        <template>
            <!-- <el-submenu index="2">
                <template slot="title"><i class="el-icon-bell"></i>列表</template>
                <el-menu-item index="/articleList">列表1</el-menu-item>
            </el-submenu> -->
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-check"></i>文章中心</template>
                <el-menu-item index="/articleList">列表</el-menu-item>
                <el-menu-item index="/releaseArticle">发布</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-edit"></i>分类管理</template>
                <el-menu-item index="/labelList">标签</el-menu-item>
            </el-submenu>
        </template>
    </el-menu>
      </el-aside>
      <!-- 导航结束 -->
      <el-container>
        <!-- 内容开始 -->
          <el-main><router-view></router-view></el-main>
        <!-- 内容结束 -->
        <!-- 页脚开始 -->
        <!-- <el-footer height="20px">
          <div style="text-align:center;"><small>xxx管理系统</small></div>
        </el-footer> -->
        <!-- 页脚结束 -->
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import "element-ui/lib/theme-chalk/base.css";
import CollapseTransition from "element-ui/lib/transitions/collapse-transition";

export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleselect: function(a, b) {}
  }
};
</script>

<style>
html,body,div,.el-main{
    margin: 0;
    padding: 0;
}
.el-container {
  padding: 0;
  width: 100%;
  height: 100%;
  margin: 0;
}
.el-menu {
  height: 100%;
}
.el-header {
  background-color: #409eff;
}
.el-aside {
  background-color: rgb(255, 255, 255);
}
.el-main {
  background-color: rgb(255, 255, 255);
  height: 100%;
}
</style>
