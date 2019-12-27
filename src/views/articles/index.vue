<template>
  <el-card class="articles">
    <bread-crumb slot="header">
      <template slot="title">文章列表</template>
    </bread-crumb>
    <el-row class="searchTool">
      <el-col :span="2">
        <span>文章状态</span>
      </el-col>
      <el-col :span="18">
          <el-radio-group v-model="formData.status">
            <el-radio :label="5">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
          </el-radio-group>
      </el-col>
    </el-row>
    <el-row class="searchTool">

      <el-col :span="2">
        <span>频道列表</span>
      </el-col>
      <el-col :span="18">
        <el-select v-model="formData.channel_id">
          <el-option v-for="item in channels"
          :key="item.id"
          :label="item.name"
          :value="item.id"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row class="searchTool">
      <el-col :span="2">
        <span>时间选择</span>
      </el-col>
      <el-col :span="18">
        <el-date-picker
        v-model="formData.dateRange"
          type="daterange"
          range-separator="一"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-col>
    </el-row>
    <el-row class="total">
        <span>共找到1000条符合条件的内容</span>
    </el-row>
    <el-row v-for="item in 100" :key="item"  class="article-item" type="flex" justify="space-between">
        <el-col :span="6">
            <el-row type="flex">
                <img src="../../assets/img/404.png" alt="">
                <div class="info">
                   <span>111111111111</span>
                   <el-tag class="tag">qwq </el-tag>
                   <span class="date">1211</span>
                </div>
            </el-row>
        </el-col>
        <el-col :span="6">
            <el-row class="right" type="flex" just ify="end">
                <span><i class="el-icon-edit"></i>修改</span>
                <span><i class="el-icon-delete"></i>删除</span>
            </el-row>
        </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        status: 5,
        channel_id: null,
        dateRange: []

      },
      channels: [],
      value: ''
    }
  },
  methods: {
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    }
  },
  created () {
    this.getChannels()
  }
}
</script>

<style lang='less' scoped>
.articles {
  .searchTool {
    height: 60px;
    margin-left: 50px;
  }
  .total{
      margin: 60px 0;
      border-bottom: 1px dashed #ccc;
      height: 40px;
  }
  .article-item{
      margin: 20px 0;
      border-bottom:1px solid #f2f3f5;
      padding:10px 0;
          img{
              width: 180px;
              height: 100px;
              margin-right:10px;
              border-radius:4px;
          }
          .info {
              height: 100px;
              display:flex;
              flex-direction: column;
              justify-content: space-between;
              .tag {
                  max-width: 60px;
              }
              .data {
                 color: #999;
                  }
          }
          .right{
              span {
                  margin-left:8px;
                  font-size: 14px;
                  cursor: pointer;
              }
          }
     }
}

</style>
