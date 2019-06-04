<template>
  <div class="container">
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog
      title="评价"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
          <el-form ref="form" :model="form">
            <el-form-item label="商品满意度" label-width="120px">
              <el-rate
              v-model="form.value"
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
</template>



<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        form: {
          value: null,
          rate: ""
        }
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
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
