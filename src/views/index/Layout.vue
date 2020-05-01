<template>
  <div>
    <v-card class="overflow-hidden top">
      <v-app-bar
        fixed=""
        color="#fcb69f"
        dark
        shrink-on-scroll
        :src="bg"
        scroll-target="#scrolling-techniques-2"
        class="animated zoomIn move"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
        </template>
        <v-app-bar-nav-icon @click="miniVariant = !miniVariant"></v-app-bar-nav-icon>
        <v-toolbar-title link>云音乐后台</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn
          icon
          @click="logout()"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1px;"></v-container>
      </v-sheet>
    </v-card>
    <div class="main">
      <div class="side-bar">
        <v-card
          min-height="100vh"
          class="overflow-hidden animated rotateInDownLeft move"
        >
          <v-navigation-drawer
            v-model="drawer"
            :color="color"
            :expand-on-hover="expandOnHover"
            :mini-variant="miniVariant"
            :right="right"
            :src="bg"
            absolute
            dark
          >
            <v-list
              dense
              nav
              class="py-0"
            >
              <v-list-item
                two-line
                :class="miniVariant && 'px-0'"
              >
                <router-link to="/profile">
                  <v-list-item-avatar>
                    <img :src="admin.avatar" />
                  </v-list-item-avatar>
                </router-link>

                <v-list-item-content>
                  <v-list-item-title>
                    <h3 class="gutter link">Cloud Music</h3>
                  </v-list-item-title>
                  <v-list-item-subtitle class="gutter link">{{ admin.name }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>
              <v-list>
                <v-list-group
                  v-for="(menu, index) in menuList"
                  :key="index"
                >
                  <template
                    v-slot:activator
                    v-if="menu.type === 1"
                  >
                    <v-list-item-icon>
                      <v-icon>{{ menu.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content v-if="menu.subMenus.length > 0">
                      <v-list-item-title class="link">{{ menu.title }}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-content v-else>
                      <router-link :to="menu.path">
                        <v-list-item-title class="link">{{ menu.title }}</v-list-item-title>
                      </router-link>
                    </v-list-item-content>
                  </template>

                  <v-list-item
                    v-for="(subMenu, index1) in menu.subMenus"
                    :key="index1"
                  >
                    <v-list-item-icon style="margin-left:20px;">
                      <v-icon>{{ subMenu.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <router-link :to="{ name: subMenu.path, params: { index: index, index1: index1 } }">
                        <v-list-item-title class="link">{{ subMenu.title }}</v-list-item-title>
                        <!-- <v-list-item-title class="link" @click="gotoSubPage(subItem.path, index, index1)">{{
                              subItem.title
                            }}</v-list-item-title> -->
                      </router-link>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-group>
              </v-list>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </div>
      <div
        class="content"
        :class="{ mini: miniVariant }"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      index: 0,
      index1: 0,
      subMenus: [],
      roleId: localStorage.getItem('roleId'),
      admin: this.$store.state.admin,
      menuList: this.$store.state.menuList,
      drawer: true,
      color: 'primary',
      colors: ['primary', 'blue', 'success', 'red', 'teal'],
      right: false,
      miniVariant: false,
      expandOnHover: false,
      background: true,
      bg: 'https://niit-soft.oss-cn-hangzhou.aliyuncs.com/wallpaper/18.jpg'
    }
  },
  created() {
    //取得前一个页面传过来的roleId
    console.log('****************' + this.roleId)
    this.axios.get(this.GLOBAL.baseUrl + '/sysRole?roleId=' + this.roleId).then((res) => {
      localStorage.setItem('menuList', JSON.stringify(res.data.data.menus))
      this.$store.commit('setMenuList', JSON.parse(localStorage.getItem('menuList')))
      this.$store.commit('setAdmin', JSON.parse(localStorage.getItem('admin')))
      this.admin = JSON.parse(localStorage.getItem('admin'))
      this.menuList = JSON.parse(localStorage.getItem('menuList'))
    })
  },
  mounted() {},
  methods: {
    logout() {
      alert('log out')
      localStorage.removeItem('token')
      localStorage.removeItem('admin')
      localStorage.removeItem('roleId')
      localStorage.removeItem('adminId')
      localStorage.removeItem('menuList')
      this.$store.commit('setAdmin', null)
      this.$store.commit('setMenuList', null)
      this.$router.push('/login')
    }
    // gotoSubPage(path, index, index1) {
    //   console.log(path, index, index1)
    //   this.$router.push({
    //     path: path,
    //     query: {
    //       index: index,
    //       index1: index1
    //     }
    //   })
    // }
  },
  computed: {
    // bg() {
    //   // return this.background ? 'https://picsum.photos/1920/1080?random' : undefined
    //   return '../assets/images/login-bg.jpg'
    // }
  }
}
</script>

<style scoped lang="scss">
.top {
  margin-bottom: 120px;
}
.main {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 30px;
  position: relative;
  .side-bar {
    overflow: hidden;
    flex: 0 0 35%;
    border-radius: 5px;
    .v-card {
      width: 46%;
    }
  }
  .content {
    flex: 1 1 65%;
    margin-left: -18%;
    border-radius: 5px;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
  }
  .mini {
    z-index: 9;
    flex: 1 1 85%;
    margin-left: -30%;
    border-radius: 5px;
    background-color: #fff;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
}
.link {
  margin-left: 10px;
  cursor: pointer;
}
</style>