<template>
  <v-app>
    <v-app-bar
      color="cyan"
      src="../../assets/images/20.jpg"
      dense
      dark
      height="80"
      app
    >
      <v-app-bar-nav-icon @click="$router.push('/')"></v-app-bar-nav-icon>
      <v-toolbar-title>GitHub个人信息</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <router-link to="this.html_url"></router-link>
        <v-icon color="red">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item link>
            <v-list-item-title>设置</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title @click="logout">退出</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col
            cols="12"
            md="6"
          >
            <v-list>
              <v-list-item>
                <v-btn
                  class="ma-2"
                  :loading="loading"
                  :disabled="loading"
                  color="secondary"
                  @click="loader = 'loading'"
                >
                  粉丝:{{ user.followers }}
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn
                  :loading="loading3"
                  :disabled="loading3"
                  color="blue-grey"
                  class="ma-2 white--text"
                  @click="loader = 'loading3'"
                >关注:{{ user.following }}
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn
                  class="ma-2"
                  :loading="loading2"
                  :disabled="loading2"
                  color="success"
                  @click="loader = 'loading2'"
                >
                  已发布:{{ user.public_repos }}
                </v-btn>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-card>
              <v-card-title>
                <v-img :src="user.avatar_url"></v-img>
              </v-card-title>
              <v-card-text>
                <p>用户名：{{ user.name }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
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
      this.html_url = JSON.parse(user.html_url)
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
