<template>
  <v-app>
    <v-container fluid>
      <v-row dense>
        <v-card
          class="mx-auto"
          width="400"
        >
          <v-img
            :src="data.avatar_url"
            height="400"
          ></v-img>

          <v-card-title>
            {{ data.login }}
          </v-card-title>

          <v-card-subtitle>
            {{ data.id }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              text
              to="/following"
            > 关注：{{ data.following }} </v-btn>
            <v-btn
              text
              to="/followers"
            > 粉丝：{{ data.followers }} </v-btn>
            <v-btn
              text
              to="/repositories"
            > 发布：{{ data.public_repos }} </v-btn>
            <v-btn
              text
              to="/stars"
            >
              收藏
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              icon
              @click="show = !show"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                {{ data.bio }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      show: false,
      data: null
    }
  },
  components: {},
  created() {
    this.axios.get('http://localhost:8023/oauth2/code/github/getInfo').then((res) => {
      this.data = JSON.parse(res.data.data.users)
    })
  },
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
.mx-auto {
  margin-top: 160px;
}
</style>
