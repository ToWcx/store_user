<template>
  <div class="container">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>我的收货地址</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="add">添加新地址</el-button>
        </div>
        <div v-for="(item,index) in address" :key="index" class="text item">
            <span>{{item.receiveName}}</span>
            <span>{{item.receivePone}}</span>
            <!-- <span style="float:right;margin-left:20px"><el-link icon="el-icon-delete" @click.native.prevent="cancel(index)"></el-link></span> -->
            <span style="float:right;margin-left:20px"><el-link icon="el-icon-edit" @click.native.prevent="edit(index)"></el-link></span>          
        <div>
            <el-tag type="danger">默认</el-tag>
            {{item.address}}
          </div>
          
        </div>
      </el-card>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="收货人" >
            <el-input v-model="form.receiveName"  autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" >
            <el-input v-model="form.receivePhone" autocomplete="off"></el-input>
          </el-form-item>
          <!-- <el-form-item label="收货地址" >
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item> -->
              <addressOptions></addressOptions>
          <el-switch
            v-model="Default"
            inactive-text="设为默认地址">
          </el-switch>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="add_submit">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>
<script>
import addressOptions from './AddressOptions.vue'
const address_options=[
  {
    value:"",
    label:"",
    children:[
      {
        value:"",
        label:"",
        children:[
          {
            value:"",
            label:"",
            children:[
              {
                value:"",
                label:"",
                children:[
                  {
                    
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }

]
export default {
  components:{
    'addressOptions':addressOptions
  },
  data() {
    return {
       dialogFormVisible: false,
       Default:false,
       form:{
          receiveName:"",
          receivePhone:"",
          address:"",
       },
       address:[],
       address_options,
       operation:"",
       index:0,
       value:"",
       a: []
    }
  },
  created(){
    //  this.axios.get("/user/address?name=root")
      this.axios.get("/auth/address")
      .then(res=>{
        this.address=res.data
        // this.address=res.data.list
      }),
      this.axios.put("/auth",{
        "name":"root",
        "passwd":"root"
      })
      .then(res=>{
        console.log(res.data)
      })

      
  },

  methods: {
    edit(i){
      // alert(i)
      this.form=this.address[i]
      this.dialogFormVisible=true,
      this.operation="edit",
      this.index=i
    },
    add(){
      this.dialogFormVisible=true
      this.form={
          receiveName:"",
          receivePhone:"",
          address:"",
       }
       this.operation="add"
    },
    add_submit(){
      //添加新地址
      if(this.operation==="add"){
           this.axios.post("http://localhost:3000/address",
            {
                "address":this.form.address,
                "receiveName":this.form.receiveName,
                "receivePhone":this.form.receivePhone,
                "uid":1
            }
            )
            .then(res=>{
              this.$message({
                message: '添加成功',
                type: 'success'
              });
              this.dialogFormVisible=false
            })
            .catch(err=>{
              this.$message.error('添加失败，请重试！');
            })
      }else if(this.operation==="edit"){//修改地址
        this.axios.put("http://localhost:3000/address?aid="+this.address[this.index].aid,
            {
                "address":this.form.address,
                "receiveName":this.form.receiveName,
                "receivePhone":this.form.receivePhone,
                "uid":this.address[this.index].uid,
                "postcode": this.address[this.index].postcode,
                "aid":this.address[this.index].aid,
                "id":5
            }
            )
            .then(res=>{
              this.$message({
                message: '修改成功',
                type: 'success'
              });
              this.dialogFormVisible=false
            })
            .catch(err=>{
              this.$message.error('修改失败，请重试！');
            })
      }
     
    }


  }
}
</script>
<style scoped>
 .container {
        max-width: 1080px;
        margin: 0 auto;
        /* border: 1px solid black; */
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

</style>

