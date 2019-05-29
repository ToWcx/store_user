<template>
    <div class="container">
       
        <el-card class="box-card">
             <div slot="header" class="clearfix">
                <span>收货地址</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="selectAddress">选择地址</el-button>
             </div>
            <div  class="text item">
                <span>{{address.receiveName}}</span>
                <span>{{address.receivePone}}</span>
                <div>
                    {{address.address}}
                </div>
            </div>
        </el-card>
          <el-card v-for="(item,index) in databs" :key="index" class="box-card" style="margin-top:20px">
             <div  slot="header" class="clearfix">
                <span>{{item.name}}</span>
                <!-- <el-button style="float: right; padding: 3px 0" type="text" @click="selectAddress">选择地址</el-button> -->
             </div>
            <div  class="text item">
                <span>{{item.desc}}</span>
                <span>￥{{item.price}}×1</span>
                <div>
                    配送方式：普通配送
                </div>
                <div>
                    运费险：卖家送，确认收获前退货可赔
                </div>
                <div>
                    店铺优惠：
                </div>
                <div>
                    订单备注：的付款就会发光的共和党了广泛化工
                </div>
            </div>
        </el-card>
        <div style="margin-top:50px;margin-bottom:50px;">
            <span>共{{databs.length}}件，</span>
            <span>合计：￥{{total_price}}</span>
            <span>
                <el-button type="danger" style="margin-left:30px">提交订单</el-button>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            address:{},
            databs:[],
            total_price:0
        }
    },
    created(){
        this.databs=JSON.parse(localStorage.getItem("selection"))
        this.total_price=JSON.parse(localStorage.getItem("total_price")) 
        if(JSON.parse(localStorage.getItem("address")===null)){
            this.address={
                receiveName:"",
                receivePone:"",
                address:""
            }
        }else{
            this.address=JSON.parse(localStorage.getItem("address")) 
        }
    },
    methods: {
        //转到地址页面获取地址
        selectAddress(){
            this.$router.push({name:'address',query:{select:true},repalce:true})
        }
    },
}
</script>
<style scoped>
 .container {
        max-width: 1080px;
        margin: 0 auto;
        /* border: 1px solid black; */
}
</style>

