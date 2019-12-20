<template>
    <el-row type="flex" justify= "space-between" align="middle" class='layout-header'>
         <!-- 左侧 -->
        <el-col class='left' :span="6">
            <i class="el-icon-s-unfold"></i>
            <span class="title">江苏传智播客教育科技股份有限公司</span>
        </el-col>
        <!-- 右侧  -->
        <el-col class="right" :span="4">
            <el-row type="flex" justify="end " align="middle ">
          <img src="../../assets/img/home.jpg" alt="">
           <el-dropdown>
               <span>嘻嘻哈哈</span>
               <el-dropdown-menu slot="dropdown">
                   <el-dropdown-item>个人信息</el-dropdown-item>
                   <el-dropdown-item>Git地址</el-dropdown-item>
                   <el-dropdown-item>退出</el-dropdown-item>
               </el-dropdown-menu>
           </el-dropdown>
            </el-row>

        </el-col>
    </el-row>
</template>

<script>
export default {
}
</script>
<style lang='less' scoped>
    .left{
        font-size: 18px;
        .title {
            margin-left:4px;
            color: #2c3e50;
            font-size:14px;
        }
    }
    .right {
        margin-right: 30px;
        img {
            height: 40px;
            width: 40px;
            border-radius:50%;
            margin-right:5px;
        }
        }
</style>
