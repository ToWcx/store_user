<template>
    <div>

            <div>
                <p>{{goods.gid}}</p>
                <p>{{goods.name}}</p>
                <p><button>加入购物车</button><button><router-link to="/order">立即购买</router-link></button></p>
            </div>

    </div>
</template>

<script>
export default {
    props: ['id'],

    data: ()=>({
        goods: {
        },

        baseUrl: 'http://172.18.44.25/goods'
    }),

    mounted(){
        this.init()
    },

    beforeRoteUpdate (to, from, next) {
        this.init()
        next()
    },

    methods:{
        init(){
            this.axios.get('http://172.18.44.25/goods/'+this.id)
            .then(res=> {

                this.goods = res.data
                console.log(this.goods)
            })
        }
    }
}
</script>

