<template>
    <div id="search">
        
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
    
    
</style>
