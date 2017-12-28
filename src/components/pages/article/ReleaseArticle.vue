<template>
<div id="main">
        <mavon-editor v-model="value"/>
</div>
</template>

<script>
import Vue from "vue";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
// use
Vue.use(mavonEditor);
export default {
    name: 'main',
    data(){
        return { value: "" };
    }
};
</script>
    
<style>

</style>
