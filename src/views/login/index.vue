<template>
  <div class="login_page fillcontaine">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer" v-show="showLogin">
        <div class="manage-tip">
          <p>elm 学习管理系统</p>
        </div>
        <el-form label-position="left" label-width="80px" :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item label="用户名" prop="username">
            <el-input placeholder="用户名" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
				    	<el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
				  </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      },
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      showLogin: true
    };
  },

  methods: {
    async submitForm(loginInfo) {
      this.$refs[loginInfo].validate(async (valid) => {
        if(valid) {
          console.log(this.loginForm)
          this.$router.push('study')
        }
      })
    }
  },
  
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.login_page {
  width: 100%;
  height: 1000px;
  background-color: #324057;
}

.manage-tip {
  position: absolute;
  width: 100%;
  top: -80px;
  left: 0;
  p {
    font-size: 34px;
    color: #fff;
  }
}

.form_contianer {
  .wh(320px, 210px);
  .ctp(320px, 210px);
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  .submit_btn {
    width: 100%;
    font-size: 16px;
  }
}
.tip {
  font-size: 12px;
  color: red;
}

.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>