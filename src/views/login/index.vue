<template>
    <div class="container" ref="box">
        <el-card class="my-card">
            <img src="../../assets/images/logo_index.png" alt="">
            <el-form ref="loginForm" :model="loginForm" :rules="loginRules" status-icon>
                <el-form-item prop="mobile">
                    <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <el-input v-model="loginForm.code"  placeholder="请输入密码" style="width:237px; margin-right:10px"></el-input>
                    <el-button>发送验证码</el-button>
                </el-form-item>
                <el-form-item>
                    <el-checkbox :value='true'>我已阅读并同意用户协议和隐私条款</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button type='primary' @click="login()" style="width:100%;">登 录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  // mounted () {
  //   // 渲染完毕后
  //   // $refs 当前组件上使用ref的元素集合（对象）

  //   // const box = this.$refs
  // },
  data () {
    const checkMobile = (ruel, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号不存在'))
      }
      callback()
    }
    return {
      // 表单数据对象
      loginForm: {
        mobile: '',
        code: ''
      },

      //   表单校验规则对象
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码长度为6', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginForm)
            .then(res => {
              this.$router.push('/')
            })
            .catch(() => {
              this.$message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container{
    background:url(../../assets/images/login_bg.jpg) no-repeat center/cover;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    .my-card{
        width: 400px;
        height: 350px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        img {
            width: 200px;
            display: block;
            margin: 0 auto 20px;
        }
    }
}
</style>
