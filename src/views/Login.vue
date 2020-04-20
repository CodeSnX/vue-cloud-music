<template>
  <div
    class="wrap"
    id="wrap"
  >
    <form
      action=""
      ref="form"
      :model="validateForm"
    >
      <div class="logGet">
        <!-- 头部提示信息 -->
        <div class="logD logDtip">
          <p class="p1">登录</p>
        </div>
        <!-- 输入框 -->
        <div class="lgD">
          <img
            src="http://b-ssl.duitang.com/uploads/item/201702/10/20170210161310_xCU8H.jpeg"
            width="20"
            height="20"
            alt=""
          />
          <input
            type="text"
            placeholder="输入用户名"
            v-model="validateForm.username"
            :rules="usernameRules"
          />
        </div>
        <div class="lgD">
          <img
            src="http://b-ssl.duitang.com/uploads/item/201704/10/20170410095843_SEvMy.thumb.700_0.jpeg"
            width="20"
            height="20"
            alt=""
          />
          <input
            type="text"
            placeholder="输入用户密码"
            v-model="validateForm.password"
          />
        </div>
        <div class="logC">
          <a>
            <button @click="submit">登 录</button>
          </a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      usernameRules: [
        { validate: (val) => !!val, message: '必须填写用户名' },
        { validate: (val) => val.length >= 3, message: '用户名长度大于3' }
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须填写密码' },
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10' }
      ],
      argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议' }],
      validateForm: {
        username: '',
        password: '',
        isAgree: false
      },
      menuList: [],
      openSimple: false
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    openSimpleDialog() {
      this.openSimple = true
    },
    closeSimpleDialog() {
      this.openSimple = false
    },
    submit() {
      this.$refs.form.validate().then((result) => {
        console.log('form valid: ', result)
        //模拟后端接口数据
        let user = {
          userId: '1802343215',
          username: 'xgp',
          userRole: 'admin',
          avatar:
            'https://avatars1.githubusercontent.com/u/42235689?s=60&u=b25100f60b66465b78fe97e36b2788715c216a6d&v=4'
        }
        this.menuList = [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', url: '/dashboard', subMenus: [] },
          {
            title: '音乐管理',
            icon: 'mdi-music',
            url: '',
            subMenus: [
              {
                title: '歌单管理',
                icon: 'mdi-domain',
                url: '/music-list',
                permissions: []
              },
              {
                title: '歌曲管理',
                icon: 'mdi-text',
                url: '/music',
                permissions: ['music:add', 'music:edit', 'music:delete']
              }
            ]
          },
          { title: 'About', icon: 'mdi-help-box', url: '/about', subMenus: [] }
        ]
        localStorage.setItem('token', 'EcIHTAWoGrmMVvTu2LPvuL-siq6hAfieVeehl-HTe_M')
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('menuList', JSON.stringify(this.menuList))
        this.$store.commit('setToken', 'EcIHTAWoGrmMVvTu2LPvuL-siq6hAfieVeehl-HTe_M')
        this.$store.commit('setUser', user)
        this.$store.commit('setMenuList', this.menuList)
        this.$router.push('/')
        this.openSimpleDialog()
      })
    },
    clear() {
      this.$refs.form.clear()
      this.validateForm = {
        username: '',
        password: '',
        isAgree: false
      }
    }
  },
  computed: {}
}
</script>

<style>
body {
  background-image: url(http://i1.hdslb.com/bfs/archive/0330333a794f7fbc5b7ea95fe79cedd546c0b8a4.jpg);
  background-size: 100%;
  /* background-color: antiquewhite;
  background-repeat: no-repeat;
  background-position: center center; */
}

* {
  margin: 0;
  padding: 0;
}

#wrap {
  height: 600px;
  width: 100%;
  background-position: center center;
  position: relative;
}

#head {
  height: 120px;
  width: 100;
  background-color: #66cccc;
  text-align: center;
  position: relative;
}

#wrap .logGet {
  height: 408px;
  width: 368px;
  position: absolute;
  background-color: #ffffff;
  top: 100px;
  right: 5%;
}

.logC a button {
  width: 100%;
  height: 45px;
  background-color: #ee7700;
  border: none;
  color: white;
  font-size: 18px;
}

.logGet .logD.logDtip .p1 {
  display: inline-block;
  font-size: 28px;
  margin-top: 30px;
  width: 86%;
}

#wrap .logGet .logD.logDtip {
  width: 86%;
  border-bottom: 1px solid #ee7700;
  margin-bottom: 60px;
  margin-top: 0px;
  margin-right: auto;
  margin-left: auto;
}

.logGet .lgD img {
  position: absolute;
  top: 12px;
  left: 8px;
}

.logGet .lgD input {
  width: 100%;
  height: 42px;
  text-indent: 2.5rem;
}

#wrap .logGet .lgD {
  width: 86%;
  position: relative;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
}

#wrap .logGet .logC {
  width: 86%;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
}

.title {
  font-family: '宋体';
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 使用css3的transform来实现 */
  font-size: 36px;
  height: 40px;
  width: 30%;
}

.copyright {
  font-family: '宋体';
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 使用css3的transform来实现 */
  height: 60px;
  width: 40%;
  text-align: center;
}
</style>
