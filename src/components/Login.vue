<template>
    <div id="login">
        <h2>{{this.$store.state.count}}</h2>
        <div id="container">
            <input type="text" v-model="name">账号<br/><br/>
            <input type="text" v-model="passwd">密码<br/><br/>
            <button @click="login()">登录</button>
            
            <!-- <el-container>
                <el-header>网上商城系统</el-header>
                <el-main>
                        <el-input
                            placeholder="请输入账号名"
                            v-model.trim="username"
                        >
                        </el-input>
                        <el-input
                            placeholder="请输入密码"
                            type="password"
                            v-model.trim="pwd"
                        >
                        </el-input>
                        <el-button type="danger" @click="login" style="font-weight:bolder;font-size:20px">登录</el-button>
                        <el-footer>
                            <router-link to="/register">注册</router-link>|
                             <router-link to="">忘记密码</router-link>
                        </el-footer>
                </el-main>
            </el-container> -->
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name:"",
            passwd:"",
            state:""
        }
    },
    methods:{
        login(){
            // this.$router.replace('/home')
            this.axios.post("/user/login",{
                name: this.name,
                passwd: this.passwd
            }).then(res => {
                // this.state;
                if(res.data.code == 5) {
                    this.$store.commit('login',this.name)
                    this.$router.push({ path:'/home'  })
                    alert("登录成功")
                }else if(res.data.code == 6){
                    alert("账号或密码有误！");
                }
            })
        }
    }     
}
</script>

<style scoped>
.el-header{
    background-color: #B3C0D1;
    color: white;
    text-align: center;
    line-height: 60px;
    font-weight: bolder;
    font-size: 20px;
}
.el-footer{
    text-align: right;
}
.el-main {
    background-color:#B3C0D1;
    /* background-color: #E9EEF3; */
    color: #333;
    opacity: 0.5;
    text-align: center;
    line-height: 160px;
}
#login{
    width: 100%;
    background-color: #E9EEF3;
}
#img{
    float: left;
    margin-top: 10%;
    margin-left: 10%
}
#container{
    width: 30%;
    margin-left: 60%;
    float: left;
}
#title{
    margin-left: 10%;
    text-align: center;
    color: white;
    font-weight: bolder;
    font-size: 100px;
    text-shadow: 5px 5px 5px grey;
}
.el-main{
    line-height: 80px;
}
.el-button{
    width: 100%
}
a{
    color: blue;
    font-weight: bolder;
}
</style>