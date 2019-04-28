<template>
    <div id="search">
        <div class="wrapper">
            <strong>购物车</strong>
            <div class="item_wrapper">
                <ul>
                    <li>商品信息</li>
                    <li>商品金额</li>
                    <li>商品数量</li>
                    <li>总金额</li>
                    <li>编辑</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    data(){
        return{
            
        }
    },
    mounted: function () {
        this.cartView();
    },
    methods:{
        cartView: function(){
            
        }
    },

    filters:{

    },

    // created(){
    //     this.axios.get(this.baseUrl+'/search')
    //     .then(res => {
    //         this.goods = res.data
    //     })
    // }

}
</script>

<style>
    #search{
        font-size: 18px;
        line-height: 1.7;
        margin: 0 20%;
    }
    
    .item_wrapper{
        height: 100px;;
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
</style>
