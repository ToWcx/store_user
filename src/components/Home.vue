<template>
    <div class="body-bg">
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
			<a class="toolbar_goods" href="#">购物车</a>
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
                    <h1 id="toolbar_ls">零食</h1>
                    <template v-for="object in goods">
                        <li v-if="object.cid==1" :key="object.id">
                            <div class="img"><router-link :to="{path: `/home/${object.id}`}"><img :src="doImg(object.img)" class="img"></router-link></div>
                            <div class="good_desc"><router-link :to="{path: `/home/${object.id}`}" class="link" :title="object.name">{{object.name}}</router-link></div>
                            <p class="intro">
                                <span class="qgj">抢购价：</span><span class="price">{{object.price|price}}</span>
                                <span class="sold">{{object.sold|sold}}</span>
                            </p>
                            <div class="jr_box">
                                <div class="jrgwc"><router-link :to="{}">加入购物车</router-link></div>
                                <div class="ljgm"><router-link :to="{}">立即购买</router-link></div>
                            </div>
                        </li>
                    </template>
                </ul>
                
                <ul>
                    <h1>书籍</h1>
                    <div class="hide" id="toolbar_sj"></div>
                    <template v-for="object in goods">
                        <li v-if="object.cid==2" :key="object.id">
                            <div class="img"><router-link :to="{path: `/home/${object.id}`}"><img :src="doImg(object.img)" class="img"></router-link></div>
                            <div class="good_desc"><router-link :to="{path: `/home/${object.id}`}" class="link" :title="object.name">{{object.name}}</router-link></div>
                            <p class="intro">
                                <span class="qgj">抢购价：</span><span class="price">{{object.price|price}}</span>
                                <span class="sold">{{object.sold|sold}}</span>
                            </p>
                            <div class="jr_box">
                                <div class="jrgwc"><a href="">加入购物车</a></div>
                                <div class="ljgm"><a href="">立即购买</a></div>
                            </div>
                        </li>
                    </template>
                </ul>
                <ul>
                    <h1>游戏</h1>
                    <div class="hide" id="toolbar_yx"></div>
                    <template v-for="object in goods">
                        <li v-if="object.cid==3" :key="object.id">
                            <div class="img"><router-link :to="{path: `/home/${object.id}`}"><img :src="doImg(object.img)" class="img"></router-link></div>
                            <div class="good_desc"><router-link :to="{path: `/home/${object.id}`}" class="link" :title="object.name">{{object.name}}</router-link></div>
                            <p class="intro">
                                <span class="qgj">抢购价：</span><span class="price">{{object.price|price}}</span>
                                <span class="sold">{{object.sold|sold}}</span>
                            </p>
                            <div class="jr_box">
                                <div class="jrgwc"><a href="">加入购物车</a></div>
                                <div class="ljgm"><a href="">立即购买</a></div>
                            </div>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
    </div>
</template>



<script>
import lbt from './Lbt'
import dh from './Head'
import searchTool from './SearchTool'
export default {
    name: 'home',
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
            
            // goodsDes: 'goods'
            list: [],
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
    //     if (sessionStorage.getItem("store") ) {   //页面加载前读取sessionStorage里的状态信息
    // 　　this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    //     } 

    //     window.addEventListener("beforeunload",()=>{   //在页面刷新前将vuex里的信息保存到sessionStorage里
    // 　　sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    //     })

        this.axios.get('/goodsImg')
        .then(res => {
            this.goods = res.data.list
        })
        
        // this.axios.get('/img')
        // .then(res =>{
        //     this.img = res.data
        // })
    }
}
</script>

<style scoped>
    *{
        list-style: none;
        text-decoration: none;
        color: #424242;
    }
    .body-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow-y: auto;
        background-color: #f5f5f5;
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
        margin-top: -65px;
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
</style>
