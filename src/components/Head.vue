<template>
    <div class="dh">
        <!-- <div class="container">
        <div class="fl">
            <a class="item" href="">首页</a>
        </div>
        <div class="fr">
            <a class="item" href="">我的订单</a>
            <a class="item" href="">收藏夹</a>
            <span v-if="this.$store.state.count != 0">
                {{this.$store.state.count}}
            </span>
            <span v-else>
                <router-link class="item" to="/Login">登录</router-link>                
            </span>
            <a class="item" href="">注册</a>
        </div>
        </div> -->
        <div class="container">
        <div class="fl">
            <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect"
             background-color="#eee">
                <el-menu-item index="1"><a href="#">首页</a></el-menu-item>
            </el-menu>
        </div>
        <div class="fr">
            <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect"
             background-color="#eee">
                <el-menu-item index="2"><a href="#">登录</a></el-menu-item>
                <el-menu-item index="3"><a href="#">注册</a></el-menu-item>
                <el-menu-item index="4"><a href="#">收藏夹</a></el-menu-item>
                <el-submenu index="5">
                    <template slot="title">我的</template>
                    <el-menu-item index="5-1">购物车</el-menu-item>
                    <el-menu-item index="5-2">地址</el-menu-item>
                    <el-menu-item index="5-3">个人信息</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dh',
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods:{
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped>
    *{
        list-style: none;
        text-decoration: none;
        color: #424242;
    }
    .container {
        max-width: 1080px;
        margin: 0 auto;
        /* border: 1px solid black; */
    }
    .dh {
        background-color: #eee;
        width: 100%;
        height: 60px;
    }

    .dh .item {
        display: inline-block;
        padding:5px 10px;
        /* border-radius: 10px; */
        /* background-color: #999; */
    }
    .dh .item:hover {
        color: #dd182b;
    }

    .fl {
        float: left;
    }

    .fr {
        float: right;
    }
</style>
