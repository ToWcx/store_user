<template>
    <el-scrollbar>
    <dh></dh>
    <div class="container">
        <el-card class="box-card">
             <div slot="header" class="clearfix">
                <span>收货地址</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="selectAddress">选择地址</el-button>
             </div>
            <div  class="text item">
                <span>{{address.receiveName}}</span>
                <span>{{address.receivePhone}}</span>
                <div>
                    {{address.name}}
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
                <span>￥{{item.price}}×{{item.count}}</span>
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
                    订单备注：
                </div>
            </div>
        </el-card>
        <div style="margin-top:50px;margin-bottom:50px;">
            <span v-if="databs.length<=0">共0件，</span>
            <span v-if="databs.length>0&&databs.length!=null">共{{databs.length}}件，</span>
            <span>合计：￥{{total_price}}</span>
            <span>
                <el-button type="danger" style="margin-left:30px" @click="SubmitOrder">提交订单</el-button>
            </span>
        </div>
    </div>
    </el-scrollbar>
</template>
<script>
import dh from './Head'
export default {
    data() {
        return {
            address:{},
            databs:[],
            total_price:0
        }
    },
    components: {
        dh
	},
    created(){
        if(localStorage.getItem("selection")===null){
            this.databs=[]
        }else{
            this.databs=JSON.parse(localStorage.getItem("selection"))
        }
        
        this.total_price=JSON.parse(localStorage.getItem("total_price")) 
        console.log("Data")
        console.log(this.databs)
        if(JSON.parse(localStorage.getItem("address")===null)){
            this.address={
                receiveName:"",
                receivePhone:"",
                name:""
            }
        }else{
            this.address=JSON.parse(localStorage.getItem("address")) 
        }
    },
    methods: {
        //转到地址页面获取地址
        selectAddress(){
            localStorage.setItem("select","true")
            this.$router.push({name:'address',repalce:true})
        },
        //提交至订单
        SubmitOrder(){
            // let cartList=[],
            // this.databs.forEach(element=>{

            // })
            let list=[]
              
           //判断是从购物车中结算还是立即购买的结算
         
                if(this.databs.length>0){
                     if(localStorage.getItem("address")===null){
                            this.$message.error('请选择地址！');
                    }else{
                        console.log("djshfjdh")
                        console.log(localStorage.getItem("address"))
                        console.log(localStorage.getItem("isCart"))
                        if(localStorage.getItem("isCart")==="true"){//从购物车中结算
                                this.databs.forEach(element=>{
                                    list.push(element.id)//存购物车id
                                })
                                //  console.log("djshfjdh")
                                //  console.log(list)
                                this.axios.post("/authOrder/fromCart",{
                                    "aid":this.address.id,
                                    "cartId":list,
                                })
                                .then(res=>{
                                    localStorage.removeItem("selection")
                                    localStorage.removeItem("total_price")
                                    localStorage.removeItem("address")
                                    this.databs=[]
                                    this.address="",
                                    this.total_price=0
                                    localStorage.setItem("Issettlement","true")
                                    
                                    this.$message({
                                        message: '提交成功',
                                        type: 'success'
                            
                                    });
                                })
                                .catch(err=>{

                                })
                        }
                        //立即购买的结算
                        else if(localStorage.getItem("isCart")==="false"){
                            console.log("DataNase")
                            console.log(this.databs[0].gid)
                            console.log(this.databs[0].count)
                            console.log(this.address.id)
                            this.axios.post("/authOrder",{
                                "aid":this.address.id,
                                "gid":this.databs[0].gid,
                                "count":this.databs[0].count
                            })
                            .then(res=>{
                                console.log("Post")
                                console.log(res.data)
                                localStorage.removeItem("selection")
                                localStorage.removeItem("total_price")
                                localStorage.removeItem("address")
                                this.databs=[],
                                this.address="",
                                this.total_price=0
                                this.$message({
                                                message: '提交成功',
                                                type: 'success'
                                    
                                });
                            })
                            .catch(erro=>{
                                this.$message.error('提交失败，请重试！');
                            })
                        }

                        }
                    }
          
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

.el-card{
    overflow:visible
}
</style>

