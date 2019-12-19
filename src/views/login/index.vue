<template>
  <div class="login">
    <el-card class="box-card">
      <div class="title">
      <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <el-form :model="loginForm"  :rules="loginRules" ref="myForm">
        <el-form-item prop="mobile">
          <el-input class="mobile" v-model="loginForm.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input class="code" v-model="loginForm.code"></el-input>
          <el-button plain class="btn">发送验证</el-button>
        </el-form-item>
         <el-form-item prop="check" >
        <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
         </el-form-item>
         <el-form-item>
        <el-button type="primary" class="enter" @click="submitLogin">登录</el-button>
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
        check: false
      },
      loginRules: {
        mobile: [{ required: true, message: '请输入您的手机号' }, {
          pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确'
        }],
        code: [{ required: true, message: '请输入您的验证码' }, {
          pattern: /^\d{6}$/, message: '验证码格式不正确'
        }],
        check: [{ validator: function (rule, value, callback) {
          if (value) {
            callback()
          } else {
            callback(new Error('没勾选'))
          }
        } }]
      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.myForm.validate(function (isOk) {
        if (isOk) {

        }
      })
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
