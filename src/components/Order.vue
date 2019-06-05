<template>
	<el-scrollbar>
			<dh></dh>
			<div class="container">
			<el-table
				:data="tableData"
				style="width: 100%"
				>
				<el-table-column
					prop="time"
					label="时间"
					width="160">
				</el-table-column>
				<el-table-column
					prop="address.receiveName"
					label="接收人"
					width="120">
				</el-table-column>
				<el-table-column
					prop="address.receivePhone"
					label="接收号码"
					width="120">
				</el-table-column>
				<el-table-column
					prop="total"
					label="总额"
					width="90">
				</el-table-column>
				<el-table-column
					prop="address.name"
					label="地址"
					width="280">
				</el-table-column>
				<el-table-column
					prop="state"
					label="状态"
					width="120">
				</el-table-column>
				<el-table-column
					prop="state"
					label="操作"
					width="50">
					<template slot-scope="scope">
						<el-button v-if="tableData[scope.$index].state==='已发货'" type="text" @click="showCart(scope.$index)">收货</el-button>
					</template>
				</el-table-column>
				<el-table-column
					fixed="left"
					label=""
					width="120">
					<template slot-scope="scope">
							<el-popover  placement="left" width="800" trigger="click">
								<el-table :data="tableData[scope.$index].cart">
									<el-table-column width="500" prop="goods" label="商品名"></el-table-column>
									<el-table-column width="100" prop="price" label="单价"></el-table-column>
									<el-table-column width="100" prop="count" label="数量"></el-table-column>
									<el-table-column width="100" prop="subTotal" label="价格小计"></el-table-column>
								</el-table>
								<el-button  slot="reference">订单详情</el-button>
							</el-popover>
							
					</template>
				</el-table-column>
			</el-table>
			<el-dialog
						title="评价"
						:visible.sync="dialogVisible"
						width="30%"
						>
								<el-form ref="form1" :model="form1">
									<el-form-item label="商品满意度" label-width="120px">
										<el-rate
										v-model="form1.value"
										show-text>
										</el-rate>
									</el-form-item>
									<el-form-item>
										<el-input type="textarea" placeholder="宝贝满足你的期待吗？说说你的使用心得，分享给想买的他们吧" v-model="form1.rate"></el-input>
									</el-form-item>
								</el-form>
						<span slot="footer" class="dialog-footer">
							<el-button @click="dialogVisible = false">取 消</el-button>
							<el-button type="primary" @click="postcomment">确 定</el-button>
						</span>
					</el-dialog>
					<el-dialog style="z-index:2;" title="评价" :visible.sync="Visible">
						<el-table :data="cart">
							<el-table-column prop="goods"></el-table-column>
							<el-table-column>
								<template slot-scope="scope">
								      	<span v-if="cart[scope.$index].iscomment==='true'">已评价</span>
                    	<el-link v-else type="primary" @click.prevent="comment(scope.$index,cart[scope.$index].gid)">发表评论</el-link>
							        
								</template>
							
							</el-table-column>
						</el-table>
					</el-dialog>
		</div>
		
	</el-scrollbar>
</template>

<script>
import dh from './Head'
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
		},
		components: {
			dh
		},
    data() {
      return {
				dialogVisible: false,
				Visible: false,
        form1: {
          value: null,
          rate: ""
        },
        tableData:[],
				// tableData:[],
				gridData:[],
				DiaData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
					desc: '',
				},
					cart:[],
					gid:0,
					index:0,
        formLabelWidth: '120px'
      }
		},
		methods: {
			//显示每个商品进行评论
			showCart(index){
				this.Visible=true
				this.tableData[index].state="已收货"
				console.log("状态")
				console.log(this.tableData[index].state)
				console.log(this.tableData[index].id)
				//修改订单状态
				this.axios.put("/authOrder",{
					    "id":this.tableData[index].id,
             "state":this.tableData[index].state,
				})
				.then(res=>{
           	this.cart=this.tableData[index].cart
						this.cart.forEach(element=>{
							this.$set(element,"iscomment","false")
						})
						console.log("index")
						console.log(this.tableData[index])
				})
			  .catch(erro=>{
					this.$message.erro("确认收货失败，请重试！")
				})
			},
			//进入每个商品评论页进行进行评论
			comment(index,gid){
				 this.gid=gid
				 this.index=index
				//  console.log("gid")
				//  console.log(this.gid)
				 this.dialogVisible=true
			},
			//提交评论
			postcomment(){
				//  console.log("Comment")
				//  console.log(this.form1.rate)
				//  console.log(this.form1.value)
				//  console.log(this.gid)
				this.axios.post("/authComments",{
					"content":this.form1.rate,
					"gid":this.gid,
					"star":this.form1.value
				})
				.then(err=>{
            this.$message({
                        message: '评价成功',
                        type: 'success'
                                    
						});
						this.dialogVisible=false
						this.cart[this.index].iscomment="true"
				})
				.catch(erro=>{
					this.$message.erro("评价失败，请重试！")
				})
				 
			}
		},
		created(){
			this.axios.get("/authOrder")
			.then(res=>{
				// // res.data.list.forEach(element => {
				// // 	this.tableData.push(element.address)
				// // });
				this.tableData=res.data.list
				this.tableData.forEach(element => {
					this.gridData.push(element.cart)
				});
				console.log("grid")
				console.log(this.gridData)
			})
		}
  }
</script>

<style>
	*{
    font-family:Arial, Helvetica, sans-serif
  }
  .container {
    max-width: 1080px;
    margin: 0 auto;
    /* border: 1px solid black; */
	}
  
  .el-rate__icon{
    font-size: 26px;
    line-height: 40px;
  }
  .el-rate__item{
    font-size: 0px;
  }
  .el-rate{
    height: 40px;
  }
  .el-form-item__label{
    border: 0px;
    text-align: center;
  }
  .el-form-item__content {
    margin: 0 16px;
  }
  .el-textarea .el-textarea__inner{
    resize: none;
    height: 80px;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #a1a3a9;
    border-radius: 3px;
  }
	
</style>
