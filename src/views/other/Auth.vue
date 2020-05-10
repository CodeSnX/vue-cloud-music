<template>
  <v-app>
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="../../assets/images/20.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      height="50px"
    >
      <v-app-bar-nav-icon>
        <v-img
          src="../../assets/images/GitHub.png"
          width="10px"
        ></v-img>
      </v-app-bar-nav-icon>

      <v-toolbar-title>GitHub信息</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
          >
            <v-avatar>
              <v-img :src="user.avatar_url"></v-img>
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            link
            @click="$router.push('/')"
          >
            <v-list-item-title>确认登录</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title @click="logout">退出</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/home">个人主页</v-tab>
          <v-tab to="/following">关注</v-tab>
          <v-tab to="/followers">粉丝</v-tab>
          <v-tab to="/repositories">发布</v-tab>
          <v-tab to="/stars">收藏</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-content>
      <router-view> </router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Auth',
  data() {
    return {
      user: null,
      html_url: ''
    }
  },
  components: {},
  created() {
    console.log('回调')
    let user = this.$route.query.user
    if (user) {
      console.log(user)
      this.user = JSON.parse(user)
      localStorage.setItem('token', this.user.id)
      localStorage.setItem('user', user)
    }
  },
  mounted() {},
  methods: {
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.$router.push('/login')
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss"></style>
