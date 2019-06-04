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
					<el-button type="text" @click="dialogVisible = true">收货</el-button>
					
				</el-table-column>
				<el-table-column
					fixed="left"
					label=""
					width="120">
					<template slot-scope="scope">
							<el-popover ref="popover" placement="left" width="800" trigger="click">
								<el-table :data="tableData[scope.$index].cart">
									<el-table-column width="500" property="goods" label="商品名"></el-table-column>
									<el-table-column width="100" property="price" label="单价"></el-table-column>
									<el-table-column width="100" property="count" label="数量"></el-table-column>
									<el-table-column width="100" property="subTotal" label="价格小计"></el-table-column>
								</el-table>
							</el-popover>
							<el-button v-popover:popover>订单详情</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-dialog
						title="评价"
						:visible.sync="dialogVisible"
						width="30%"
						:before-close="handleClose">
								<el-form ref="form1" :model="form1">
									<el-form-item label="商品满意度" label-width="120px">
										<el-rate
										v-model="form1.value"
										show-text>
										</el-rate>
									</el-form-item>
									<el-form-item>
										<el-input type="textarea" placeholder="宝贝满足你的期待吗？说说你的使用心得，分享给想买的他们吧" v-model="form.rate"></el-input>
									</el-form-item>
								</el-form>
						<span slot="footer" class="dialog-footer">
							<el-button @click="dialogVisible = false">取 消</el-button>
							<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
						</span>
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
          desc: ''
        },
        formLabelWidth: '120px'
      }
		},
		created(){
			this.axios.get("/authOrder")
			.then(res=>{
				// // res.data.list.forEach(element => {
				// // 	this.tableData.push(element.address)
				// // });
				this.tableData=res.data.list
				// this.tableData.forEach(element => {
				// 	this.gridData.push(element.cart)
				// });
				// console.log(this.gridData)
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
