<template>
    <div class="container">
        <div class="head">
            <h1>首页</h1>
        搜索: <input type="text" placeholder="请输入搜索内容" v-model.trim="search" @keydown.space="doSearch">
        </div>
        <div class="lbt_box">
            <div class="lbt">轮播图</div>
            <div class="lbt">轮播图</div>
            <div class="lbt">轮播图</div>
        </div>
        <div class="good_wrapper">
            <div class="good_list">
                <ul>
                    <h1>零食</h1>
                    <template v-for="object in goods">
                        <li v-if="object.cid==1" :key="object.gid">
                            <div class="img"><router-link :to="{path: `/home/${object.gid}`}"><img :src="doImg(object.gid)"></router-link></div>
                            <div class="good_desc"><router-link :to="{path: `/home/${object.gid}`}" class="link" :title="object.name">{{object.name}}</router-link></div>
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
                    <h1>书籍</h1>
                    <template v-for="object in goods">
                        <li v-if="object.cid==1" :key="object.gid">
                            <div class="img"><router-link :to="{path: `/home/${object.gid}`}"><img :src="doImg(object.gid)"></router-link></div>
                            <div class="good_desc"><router-link :to="{path: `/home/${object.gid}`}" class="link" :title="object.name">{{object.name}}</router-link></div>
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
                    <template v-for="object in goods">
                        <li v-if="object.cid==1" :key="object.gid">
                            <div class="img"><router-link :to="{path: `/home/${object.gid}`}"><img :src="doImg(object.gid)"></router-link></div>
                            <div class="good_desc"><router-link :to="{path: `/home/${object.gid}`}" class="link" :title="object.name">{{object.name}}</router-link></div>
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
</template>

<script>
export default {
    data(){
        return{
            goods: [],
            img:[],
            search: '',
            baseUrl: 'http://localhost:3000',
            // baseUrl: 'http://172.18.44.25/',
            // goodsDes: 'goods'
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
            return (gid) => {
                return this.baseUrl+this.img
                .find(item => {
                    if(item.gid == gid)
                        return item
                }).main
            }
        }
    },

    created(){
        this.axios.get('/goods')
        .then(res => {
            this.goods = res.data
        })
        this.axios.get('/img')
        .then(res =>{
            this.img = res.data
        })
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
    .head {
        height: 130px;
        width: 100%;
        border: 1px solid black;
    }
    .lbt_box {
        height: 320px;
        width: 100%;
        border: 1px solid black;
    }
    .lbt {
        width: 33.3%;
        height: 100%;
        float: left;
        text-align: center;
        line-height: 320px;
    }
    /* .good_list{
        height: 325px;
    } */
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
        background-color: #dd182b;
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
        background-color: black;
        color: #DDD;
    }
    .ljgm a:hover {
        background-color: yellow;
        color: #dd182b;
    }
    .qgj {
        font-size: 14px;
        color: #dd182b;
    }
</style>
