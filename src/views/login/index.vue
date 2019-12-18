<template>
  <div class="login">
    <el-card class="box-card">
      <div class="title">
      <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <el-form :model="loginForm" >
        <el-form-item>
          <el-input class="mobile"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input class="code"></el-input>
          <el-button plain class="btn">发送验证</el-button>
        </el-form-item>
         <el-form-item>
        <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
         </el-form-item>
         <el-form-item>
        <el-button type="primary" class="enter">登录</el-button>
         </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        chek: false
      }
    }
  }

}
</script>

<style lang="less" scoped>
  .login {
      background-image:url('../../assets/img/login_bg.jpg');
      height:100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    .box-card {
      height: 340px;
      width: 44 0px;
      .title{
        text-align: center;
        img {
        height: 40px;
     }
      }
     .mobile {
      margin-top: 20px;
    }
    .code {
      width: 65%;
       }
      .btn {
       float: right;
      }
    }
    .enter {
      width: 100%;
    }
  }
</style>
