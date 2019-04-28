<template>
    <div id="home">
        <h1>首页</h1>
        搜索: <input type="text" placeholder="请输入搜索内容" v-model.trim="search" @keydown.space="doSearch">
        <div id="wrapper">
            <ul>
                <h1>零食</h1>
                <template v-for="object in goods">
                    <li v-if="object.gtid==1" :key="object.gid">
                        <router-link :to="{path: `/home/${object.gid}`}"><img :src="baseUrl+object.img.main" class="img"></router-link>
                        <router-link :to="{path: `/home/${object.gid}`}" class="link" :title="object.name">{{object.name}}</router-link>
                        <p class="intro">
                            <span class="price">{{object.price|price}}</span>
                            <span class="sold">{{object.sold|sold}}</span>
                        </p>
                    </li>
                </template>
            </ul>
            <ul>
                <h1>书籍</h1>
                <template v-for="object in goods">
                    <li v-if="object.gtid==2" :key="object.gid">
                        <router-link :to="{path: `/home/${object.gid}`}"><img :src="baseUrl+object.img.main" class="img"></router-link>
                        <router-link :to="{path: `/home/${object.gid}`}" class="link" :title="object.name">{{object.name}}</router-link>
                        <p class="intro">
                            <span class="price">{{object.price|price}}</span>
                            <span class="sold">{{object.sold|sold}}</span>
                        </p>
                    </li>
                </template>
            </ul>
            <ul>
                <h1>游戏</h1>
                <template v-for="object in goods">
                    <li v-if="object.gtid==3" :key="object.gid">
                        <router-link :to="{path: `/home/${object.gid}`}"><img :src="baseUrl+object.img.main" alt="" class="img"></router-link>
                        <router-link :to="{path: `/home/${object.gid}`}" class="link" :title="object.name">{{object.name}}</router-link>
                        <p class="intro">
                            <span class="price">{{object.price|price}}</span>
                            <span class="sold">{{object.sold|sold}}</span>
                        </p>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
    data(){
        return{
            goods: [],
            search: '',
            // baseUrl: 'http://localhost:3000/'
            baseUrl: 'http://172.18.44.25/',
            goodsDes: 'goods'
        }
    },

    // methods:{
    //     doSearch(){
    //         this.axios.get('http://172.18.44.25/goods/search?search='+this.search)
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //     }
    // },

    filters:{
        price(data){
            return '￥'+data
        },
        sold(data){
            return '月销'+data+'笔'
        }
    },

    created(){
        this.axios.get(this.baseUrl+'/goods')
        .then(res => {
            this.goods = res.data
        })
    }

}
</script>


<style scoped>
    #home{
        font-size: 18px;
        line-height: 1.7;
        margin: 0 20%;
    }
    .top-nav{
        background: #eee;
        margin-top: 50px;
    }
    .top-nav a{
        text-decoration: none;
        color:#666;
        padding:6px 20px;
    }
    #wrapper{
        background: #f5f5f5;
        overflow: hidden;
    }
    #wrapper ul, li{
        list-style:none;
        float:left;
    }
    #wrapper li{
        display: block;
        margin: 0 20px;
        width: 230px;
        height: 320px;
    }
    span.price{
        font-size: 24px;
        color: red;
    }
    span.sold{
        float: right;
        font-size: 10px;
    }
    .link{
        text-decoration: none;
        color: black;
        display: block;
    }
    img.img{
        height: 156px;
        width: 168px;
    }
    /* .wrapper ul li {
        
    } */
</style>
