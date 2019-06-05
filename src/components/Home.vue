<template>
 <el-scrollbar>
    <!-- <div class="body-bg"> -->
    <!-- <div class="container"> -->
        <div class="head">
            <dh></dh>
            <search-tool></search-tool>
        </div>
        <div class="lbt-box">
            <lbt></lbt>
        </div>
        <!-- 定位导航 -->
        <div class="toolbar-tabs">
		<div class="toolbar_cart ">
			<a class="toolbar_goods" href="#toolbar_ls" rel="nofollow">零食</a>
		</div>
		<div class="toolbar_cart">
			<a class="toolbar_goods" href="#toolbar_sj" rel="nofollow">书籍</a>
		</div>
		<div class="toolbar_cart">
			<a class="toolbar_goods" href="#toolbar_yx" rel="nofollow">游戏</a>
		</div>
		<div class="toolbar_cart">
            <span class="toolbar_goods" @click="checkLogin">购物车</span>
            <!-- <router-link class="toolbar_goods" to="/GoodsDes">购物车</router-link> -->
		</div>
		<div id="top" class="">
			<a href="#" class="fhdb">返回顶部</a>
		</div>
	    </div>
        <!-- <div class="lbt_box">
            <div class="lbt">轮播图</div>
            <div class="lbt">轮播图</div>
            <div class="lbt">轮播图</div>
        </div> -->
        <div class="container">
        <div class="good_wrapper">
            <div class="good_list">
                <ul>
                    <h1 class="goods_title" id="toolbar_ls">零食</h1>
                    <!-- <template v-for="object in goods"> -->
                        <li v-for="object in goods" v-if="object.cid==1" :key="object.id">
                            <div class="img"><router-link :to="{path: `/home/${object.id}`}"><img :src="doImg(object.img)" class="img"></router-link></div>
                            <div class="good_desc"><router-link :to="{path: `/home/${object.id}`}" class="link" :title="object.name">{{object.name}}</router-link></div>
                            <p class="intro">
                                <span class="qgj">抢购价：</span><span class="price">{{object.price|price}}</span>
                                <span class="sold">{{object.sold|sold}}</span>
                            </p>
                          
                            <div class="jr_box">
                                     <el-popover
                                        class="jrgwc"
                                        placement="bottom"
                                        title="购物车"
                                        trigger="click"
                                        ref="popover"
                                      >
                                      <div>
                                          <div class="div_float" ><img :src="doImg(object.img)" class="img2">
                                          <!-- <span></span> -->
                                          </div>
                                          <div>{{object.name}}
                                               <el-input style="width:150px;margin-top:10px" v-model="num">
                                                    <el-button style="width:20px;padding-left:10px;" slot="prepend" icon="el-icon-minus" @click="sub"></el-button>
                                                    <el-button style="width:20px;padding-left:10px;" slot="append" icon="el-icon-plus" @click="add"></el-button>
                                                </el-input>
                                          </div>
                                          <div>
                                              <el-button style="margin-top:10px;height:30px;margin-left:20px" type="primary" @click="addCart(object.id)">确定</el-button>
                                          </div>
                                      </div>
                                        <el-button v-if="count===null" style="width: 115px;height: 43px;background-color: #DDD;" slot="reference" @click="login">加入购物车</el-button>
                                        <el-button v-else style="width: 115px;height: 43px;background-color: #DDD;" slot="reference" @click="initNum">加入购物车</el-button>
                                    </el-popover> 
                                <!-- <div class="jrgwc"><a @click.prevent="addCart(object.id)">加入购物车</a></div> -->
                                <div class="ljgm"><router-link :to="{path: `/home/${object.id}`}" class="link" :title="object.name">立即购买</router-link></div>
                            </div>
                        </li>
                    <!-- </template> -->
                </ul>
                
                
                <ul>
                    <h1 class="goods_title">书籍</h1>
                    <div class="hide" id="toolbar_sj"></div>
                    <!-- <template v-for="object in goods"> -->
                        <li v-for="object in goods" v-if="object.cid==2" :key="object.id">
                            <div class="img"><router-link :to="{path: `/home/${object.id}`}"><img :src="doImg(object.img)" class="img"></router-link></div>
                            <div class="good_desc"><router-link :to="{path: `/home/${object.id}`}" class="link" :title="object.name">{{object.name}}</router-link></div>
                            <p class="intro">
                                <span class="qgj">抢购价：</span><span class="price">{{object.price|price}}</span>
                                <span class="sold">{{object.sold|sold}}</span>
                            </p>
                            <div class="jr_box">
                                  <el-popover
                                        class="jrgwc"
                                        placement="bottom"
                                        title="购物车"
                                        trigger="click"
                                        ref="popover"
                                      >
                                      <div>
                                          <div class="div_float" ><img :src="doImg(object.img)" class="img2">
                                          <!-- <span></span> -->
                                          </div>
                                          <div>{{object.name}}
                                               <el-input style="width:150px;margin-top:10px" v-model="num">
                                                    <el-button style="width:20px;padding-left:10px;" slot="prepend" icon="el-icon-minus" @click="sub"></el-button>
                                                    <el-button style="width:20px;padding-left:10px;" slot="append" icon="el-icon-plus" @click="add"></el-button>
                                                </el-input>
                                          </div>
                                          <div>
                                              <el-button style="margin-top:10px;height:30px;margin-left:20px" type="primary" @click="addCart(object.id)">确定</el-button>
                                          </div>
                                      </div>
                                       
                                        <el-button  style="width: 115px;height: 43px;background-color: #DDD;" slot="reference" @click="initNum">加入购物车</el-button>
                                    </el-popover> 
                                <div class="ljgm"><router-link :to="{path: `/home/${object.id}`}" class="link" :title="object.name">立即购买</router-link></div>
                            </div>
                        </li>
                    <!-- </template> -->
                </ul>
                <ul>
                    <h1 class="goods_title">游戏</h1>
                    <div class="hide" id="toolbar_yx"></div>
                    <!-- <template v-for="object in goods"> -->
                        <li v-for="object in goods" v-if="object.cid==3" :key="object.id">
                            <div class="img"><router-link :to="{path: `/home/${object.id}`}"><img :src="doImg(object.img)" class="img"></router-link></div>
                            <div class="good_desc"><router-link :to="{path: `/home/${object.id}`}" class="link" :title="object.name">{{object.name}}</router-link></div>
                            <p class="intro">
                                <span class="qgj">抢购价：</span><span class="price">{{object.price|price}}</span>
                                <span class="sold">{{object.sold|sold}}</span>
                            </p>
                            <div class="jr_box">
                                  <el-popover
                                        class="jrgwc"
                                        placement="bottom"
                                        title="购物车"
                                        trigger="click"
                                        ref="popover"
                                      >
                                      <div>
                                          <div class="div_float" ><img :src="doImg(object.img)" class="img2">
                                          <!-- <span></span> -->
                                          </div>
                                          <div>{{object.name}}
                                               <el-input style="width:150px;margin-top:10px" v-model="num">
                                                    <el-button style="width:20px;padding-left:10px;" slot="prepend" icon="el-icon-minus" @click="sub"></el-button>
                                                    <el-button style="width:20px;padding-left:10px;" slot="append" icon="el-icon-plus" @click="add"></el-button>
                                                </el-input>
                                          </div>
                                          <div>
                                              <el-button style="margin-top:10px;height:30px;margin-left:20px" type="primary" @click="addCart(object.id)">确定</el-button>
                                          </div>
                                      </div>
                                       
                                        <el-button  style="width: 115px;height: 43px;background-color: #DDD;" slot="reference" @click="initNum">加入购物车</el-button>
                                    </el-popover> 
                                <!-- <div class="ljgm"><a href="/order">立即购买</a></div> -->
                                <div class="ljgm"><router-link :to="{path: `/home/${object.id}`}" class="link" :title="object.name">立即购买</router-link></div>
                            </div>
                        </li>
                    <!-- </template> -->
                </ul>
            </div>
        </div>
        </div>
        <!-- </div> -->
    </el-scrollbar>
</template>



<script>
import lbt from './Lbt'
import dh from './Head'
import searchTool from './SearchTool'
export default {
    name: 'home',

    inject:['reload'],

    components: {
        lbt,
        dh,
        searchTool
    },
    data(){
        return{
            goods: [],
            img:[],
            search: '',
            // baseUrl: 'http://localhost:3000',
            count:"",
            // goodsDes: 'goods'
            list: [],
            num:1,
            /*
            */
            like: '',
            selected: 0,
            option:[
                {text: '全部', value: 0},
                {text: '零食' , value: 1},
                {text: '书籍' , value: 2},
                {text: '游戏', value: 3},
            ]
        }
    },
    filters:{
        price(data){
            return '￥'+data
        },
        sold(data){
            return '月销'+data+'笔'
        }
    },

    computed:{
        doImg(){
            return param =>{
                return 'http://172.18.44.25:8888'+param;
            }
        }
    },
    methods:{
        login(){
                this.$router.replace({name:'login'})
        },
         sub(){
            if(this.num>1){
                this.num--;
            }
        },
        add(){
            this.num++
        },
        // //加入购物车
        addCart(id){
              console.log(id);
              console.log(this.num)
              this.axios.post("/authCart",{
                  count:this.num,
                  gid:id,
              })
              .then(res=>{
                  this.$message({
                    message: '加入购物车成功!',
                    type: 'success'
                });
              })
              .catch(erro=>{
                  this.$message.erro("加入购物车失败！")
              }) 
        },
        //左侧导航栏购物车的判断
         checkLogin(){
             
            if(localStorage.getItem("count")===null){
                this.$router.push({name:'login'})
            }else{
                this.$router.push({name:'goodsDes'})
            }
        },
        //点击每个商品加购前初始化num
        initNum(){
            this.num=1
        },
    doLike(){
        if(this.like==''){
            if(this.selected === 0){
            this.axios.get('/goodsImg')
            .then(res => {
            this.list = res.data.list
            })
        }else{
            this.axios.get('/goodsImg?type='+this.selected)
            .then(res => {
            this.list = res.data.list
            })
        }
        }else{
            if(this.selected === 0){
            this.axios.get('/goodsImg?like='+this.like)
            .then(res => {
                this.list = res.data.list
            })
            }else{
                this.axios.get('/goodsImg?type='+this.selected+'&like='+this.like)
                .then(res => {
                this.list = res.data.list
                })
            }
        }
    }
    },
    created(){
        this.reload
        this.count=localStorage.getItem("count");
        this.axios.get('/goods')
        .then(res => {
            this.goods = res.data.list
            if(localStorage.getItem("goods")===null){
                this.cart_list=[]
            }else{
               this.cart_list=JSON.parse(localStorage.getItem("goods")) 
            }
            
        })
        
        // this.axios.get('/img')
        // .then(res =>{
        //     this.img = res.data
        // })
    },
    beforeCreate(){
       
    },
    // beforeRouteEnter (to, from, next) {
    //     next(()=>{
    //         console.log("reload")
    //         console.log(localStorage.getItem("reload"))
    //          if((localStorage.getItem("reload"))===null||localStorage.getItem("reload")==="false"){
    //            window.location.reload()
    //            localStorage.setItem("reload","true")
    //       }
    //     })
    //     // this.reload
    //     // next()
       
    // }
}
</script>

<style scoped>
    /* .body-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow-y: auto;
        background-color: #f5f5f5;
    } */
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
    .head {
        height: 157.5px;
        width: 100%;
        /* border: 1px solid black; */
    }
    .lbt-box {
        background-color: #eee;
    }
    .img {
        height: 156px;
        width: 168px;
        margin: 0 auto;
        
    }
    ul li {
        display: block;
        width: 230px;
        float: left;
        margin: 20px;
        
    }
    ul {
        padding: 0px;
    }
    .good_desc {
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .price {
        font-size: 16px;
        font-weight: bold;
        color: #dd182b;
    }
    .sold {
        font-size: 14px;
        color: #dd182b;
    }
    .jr_box {
        height: 43px;
        width: 230px;
        /* border:1px solid black; */
    }
    .jrgwc {
        width: 115px;
        height: 43px;
        background-color: #DDD;
        float: left;
    }
    .ljgm {
        width: 115px;
        height: 43px;
        /* background-color: #dd182b; */
        background-color: #409EFF;
        float: left;
    }
    .jr_box a {
        display: inline-block;
        width: 115px;
        height: 43px;
        text-align: center;
        line-height: 43px;
    }
    .jrgwc a:hover {
        background-color: #aaa;
        color: #DDD;
    }
    .ljgm a:hover {
        background-color: #188aff;
        color: #DDD;
    }
    .qgj {
        font-size: 14px;
        color: #dd182b;
    }
    .hide {
        /*display: none;*/
        position: absolute;
        margin-top: -42px;
    }
    .goods_title{
        color: #424242;
    }
    /* .search-center{
        text-align: center;
        margin: 0 auto;
        height: 45px;
        width: 420px;
        position: absolute;
        margin-left: 350px;
        margin-top: 28.75px;
    }
    .search{
        width: 300px;
        position: relative;
        float: left;
        margin: 0px;
    } */
    /* .el-button{
        height: 40px;
    }
    .el-input__inner{
        height: 45px;
        line-height: 45px;
    } */
    /* .ss {
        width: 100px;
        margin:0px;
        position: relative;
        float: left;
    }
    .logo{
        height: 45px;
        float: left;
        margin-top: 25.25px;
    } */
    /* 左侧导航栏 */
    .toolbar-tabs {
    position: fixed;
    margin-left: 95px;
    }

    .toolbar_cart {
        width: 50px;
        height: 35px;
        background-color: #409EFF;
        /* background-color: #dd182b; */
        color: #f5f5f5;
        text-align: center;
        line-height: 35px;
    }

    .toolbar_goods{
        height: 35px;
        color: white;
        cursor: pointer;
    }

    .toolbar_cart a {
        display: block;
        width: 100%;
        color: #f5f5f5;
    }

    .toolbar_cart .toolbar_goods:hover {
        color: #409EFF;
        background-color: #f5f5f5;
        /* border: 1px solid #dd182b; */
    }

    .fhdb:hover{
        color: #409EFF;
    }

    /* .carts:hover {
        background-image: url(../img/gwc.jpg);
        background-size: 100% 100%;
        color: #424242;
        font-size: 0;
        border: 1px solid #dd182b;
    } */

    .kefus:hover {
        /* background-image: url(../img/kf.jpg); */
        background-size: 100% 100%;
        color: #424242;
        font-size: 0;
        border: 1px solid #dd182b;
    }
    .img2{
        width: 80px;
        height:80px;
    }
    .div_float{
        float:left
    }

</style>
