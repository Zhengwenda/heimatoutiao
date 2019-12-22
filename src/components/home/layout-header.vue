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
          <img :src="userInfo.photo?userInfo.photo:defaultImg" alt="">
           <el-dropdown @command="handle">
               <span>{{userInfo.name}}</span>
               <el-dropdown-menu slot="dropdown">
                   <el-dropdown-item command="info">个人信息</el-dropdown-item>
                   <el-dropdown-item command="git">Git地址</el-dropdown-item>
                   <el-dropdown-item command="lgout">退出</el-dropdown-item>
               </el-dropdown-menu>
           </el-dropdown>
            </el-row>

        </el-col>
    </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}, // 用户信息
      defaultImg: require('../../assets/img/haha.jpg')
    }
  },
  created () {
    // 查询数据
    this.$axios({
      url: '/user/profile'
      //   headers参数

    }).then(result => {
      this.userInfo = result.data // 获取用户个人信息
    })
  },
  methods: {
    handle (command) {
      if (command === 'lgout') {
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
      } else if (command === 'git') {
        window.location.href = 'https://github.com/Zhengwenda/heimatoutiao'
      }
    }
  }
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
