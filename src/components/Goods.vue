<template>
	<!-- <div class="body-bg"> -->
	<el-scrollbar>
		<dh></dh>
		<div class="container">
			<h4>购物车</h4>
			<el-table
				height="450"
				ref="multipleTable"
				empty-text="暂无商品"
				:data="cart_list"
				@selection-change="handleSelectionChange"
				style="width: 100%">
				<el-table-column type="expand">
				<template slot-scope="props">
					<el-form label-position="left" inline class="demo-table-expand">
					<el-form-item label="商品名称">
						<span>{{ props.row.name }}</span>
					</el-form-item>
					<el-form-item label="所属店铺">
						<span>{{ props.row.shop }}</span>
					</el-form-item>
					<el-form-item label="商品 ID">
						<span>{{ props.row.id }}</span>
					</el-form-item>
					<el-form-item label="店铺 ID">
						<span>{{ props.row.shopId }}</span>
					</el-form-item>
					<el-form-item label="商品分类">
						<span>{{ props.row.category }}</span>
					</el-form-item>
					<el-form-item label="店铺地址">
						<span>{{ props.row.address }}</span>
					</el-form-item>
					<el-form-item label="商品描述">
						<span>{{ props.row.desc }}</span>
					</el-form-item>
					</el-form>
				</template>
				</el-table-column>
				<el-table-column
				 type=selection
				 
				>
				</el-table-column>
				<el-table-column
				label="商品名称"
				prop="name">
				</el-table-column>
				<el-table-column
				label="描述"
				prop="desc">
				</el-table-column>
				<el-table-column
				label="价格"
				prop="price">
				</el-table-column>
				<el-table-column
				label="数量">
					<template slot-scope="scope">
						<div class="div_number">
							<el-input-number :min="1" @change="handleChange($event,scope.$index)" size="mini" v-model="scope.row.count">
							</el-input-number>
						</div>
                    </template>
				</el-table-column>
				<el-table-column
					fixed="right"
					label="操作"
					width="120">
					<template slot-scope="scope">
						<el-button
						@click.native.prevent="deleteRow(scope.$index, cart_list)"
						type="text"
						size="small">
						移除
						</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-row>
				<el-col :span="8">
					<span style="font-size:12px">共 {{cart_list.length}}种商品，已选择 {{selectionNum.length}} 件</span>
				</el-col>
				<el-col :span="16">
					合计： {{total_price}}元
				<el-button type="primary">去结算</el-button>
				</el-col>
			</el-row>
		</div>
	<!-- </div> -->
	</el-scrollbar>
</template>

<script>
import dh from './Head'
export default {
	data() {
      return {
        cart_list: [{
			price: 49,
			name: '好滋好味鸡蛋仔',
			category: '江浙小吃、小吃零食',
			desc: '荷兰优质淡奶，奶香浓而不腻',
			count: 1,
			address: '上海市普陀区真北路',
			shop: '王小虎夫妻店',
			shopId: '10333'
			}, {
			price: 39,
			name: '好滋好味鸡蛋仔',
			category: '江浙小吃、小吃零食',
			desc: '荷兰优质淡奶，奶香浓而不腻',
			count: 1,
			address: '上海市普陀区真北路',
			shop: '王小虎夫妻店',
			shopId: '10333'
			}, {
			price: 36,
			name: '好滋好味鸡蛋仔',
			category: '江浙小吃、小吃零食',
			desc: '荷兰优质淡奶，奶香浓而不腻',
			count: 1,
			address: '上海市普陀区真北路',
			shop: '王小虎夫妻店',
			shopId: '10333'
			}, {
			price: 37,
			name: '好滋好味鸡蛋仔',
			category: '江浙小吃、小吃零食',
			desc: '荷兰优质淡奶，奶香浓而不腻',
			count: 2,
			address: '上海市普陀区真北路',
			shop: '王小虎夫妻店',
			shopId: '10333'
			}, {
			price: 37,
			name: '好滋好味鸡蛋仔',
			category: '江浙小吃、小吃零食',
			desc: '荷兰优质淡奶，奶香浓而不腻',
			count: 2,
			address: '上海市普陀区真北路',
			shop: '王小虎夫妻店',
			shopId: '10333'
			}, {
			price: 37,
			name: '好滋好味鸡蛋仔',
			category: '江浙小吃、小吃零食',
			desc: '荷兰优质淡奶，奶香浓而不腻',
			count: 2,
			address: '上海市普陀区真北路',
			shop: '王小虎夫妻店',
			shopId: '10333'
			}, {
			price: 37,
			name: '好滋好味鸡蛋仔',
			category: '江浙小吃、小吃零食',
			desc: '荷兰优质淡奶，奶香浓而不腻',
			count: 2,
			address: '上海市普陀区真北路',
			shop: '王小虎夫妻店',
			shopId: '10333'
			}, {
			price: 37,
			name: '好滋好味鸡蛋仔',
			category: '江浙小吃、小吃零食',
			desc: '荷兰优质淡奶，奶香浓而不腻',
			count: 2,
			address: '上海市普陀区真北路',
			shop: '王小虎夫妻店',
			shopId: '10333'
			}, {
			price: 37,
			name: '好滋好味鸡蛋仔',
			category: '江浙小吃、小吃零食',
			desc: '荷兰优质淡奶，奶香浓而不腻',
			count: 2,
			address: '上海市普陀区真北路',
			shop: '王小虎夫妻店',
			shopId: '10333'
			}, {
			price: 37,
			name: '好滋好味鸡蛋仔',
			category: '江浙小吃、小吃零食',
			desc: '荷兰优质淡奶，奶香浓而不腻',
			count: 2,
			address: '上海市普陀区真北路',
			shop: '王小虎夫妻店',
			shopId: '10333'
			}],
		check_list: [{
			price: 36,
			name: '好滋好味鸡蛋仔',
			category: '江浙小吃、小吃零食',
			desc: '荷兰优质淡奶，奶香浓而不腻',
			count: 1,
			address: '上海市普陀区真北路',
			shop: '王小虎夫妻店',
			shopId: '10333'
			}, {
			price: 37,
			name: '好滋好味鸡蛋仔',
			category: '江浙小吃、小吃零食',
			desc: '荷兰优质淡奶，奶香浓而不腻',
			count: 2,
			address: '上海市普陀区真北路',
			shop: '王小虎夫妻店',
			shopId: '10333'
			}],
			selectionNum:[],
			// total_price:0
			}
    },
	components: {
        dh
	},
	created(){
		// this.init()
	},
	computed: {
		// total_num : function () {
		// 	let num = 0
		// 	this.check_list.forEach((item)=>{
		// 		num += item.count
		// 	})
		// 	console.log(num)
		// 	return num
		// },
		// total_price : function () {
		// 	let sum_price = 0
		// 	this.check_list.forEach((item)=>{
		// 		sum_price += item.count*item.price
		// 		console.log(item+":"+sum_price)
		// 	})
		// 	console.log(sum_price)
		// 	return sum_price
		// }
		total_price:function(){
			if(this.selectionNum.length<=0){
				return 0
			}else{
				var total=0;
				this.selectionNum.forEach(item=>{
						total=item.count*item.price+total
						console.log("total")
						console.log(total)
				})
				return total
			}
		}
	},
	methods: {
		deleteRow(index, rows) {
		rows.splice(index, 1);
		},
		//复选框变化，存储已选择项
		handleSelectionChange:function (val) {
			// this.check_list = val
			this.selectionNum=val
			console.log("Select")
			console.log(this.selectionNum)
		},
		//数量变化
		handleChange:function (val,index) {
			console.log("Num")
			console.log(val)
			console.log(this.cart_list[index].price)
		},
		getCartList(){
			this.axios.get('/cart_list')
			.then(res =>{
				this.cart_list = res.data.cart_list
			})
		},
		getCheckList(){
			this.axios.get('/check_list')
			.then(res =>{
				this.check_list = res.data.check_list
			})
		}
    }
    // export default {
//     props: ['id'],

//     data: ()=>({
//         goods: {
//         },

   
//     }),

//     mounted(){
//         this.init()
//     },

//     beforeRoteUpdate (to, from, next) {
//         this.init()
//         next()
//     },

//     methods:{
//         init(){
//             this.axios.get('http://172.18.44.25/goods/'+this.id)
//             .then(res=> {

//                 this.goods = res.data
//                 console.log(this.goods)
//             })
//         }
//     }
// }
}
</script scoped>

    <!-- <div>
            <h1>test</h1>
            <div>
                <p>{{goods.gid}}</p>
                <p>{{goods.name}}</p>
                
                <p><button>加入购物车</button><button><router-link to="/order">立即购买</router-link></button></p>
            </div>

    </div> -->


<style scoped>
	.body-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow-y: auto;
        background-color: #f5f5f5;
    }
    .container {
        max-width: 1080px;
        margin: 0 auto;
        /* border: 1px solid black; */
    }
	/* 引入样式 */
	.demo-table-expand {
		font-size: 0;
	}
	.demo-table-expand label {
		width: 90px;
		color: #99a9bf;
	}
	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}
</style>
