<template>
  <v-app>
    <v-container
      fluid
      class="fol"
    >
      <v-row>
        <v-col
          cols="12"
          sm="6"
          offset-sm="3"
        >
          <v-card>
            <v-list two-line>
              <template v-for="(item, index) in data">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                >{{ item.header }}</v-subheader>
                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
                ></v-divider>
                <v-list-item
                  v-else
                  :key="item.title"
                >
                  <v-list-item-avatar>
                    <img :src="item.avatar_url" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.login"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.id"></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-group>
                    <v-btn
                      class="ma-2"
                      color="#E040FB"
                    >
                      取消关注
                    </v-btn>
                  </v-list-item-group>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Follwing',
  data() {
    return {
      data: [
        {
          header: '我的关注',
          divider: true,
          inset: true
        }
      ]
    }
  },
  components: {},
  created() {
    this.axios.get('http://localhost:8023/oauth2/code/github/getInfo').then((res) => {
      this.data = JSON.parse(res.data.data.fow)
    })
  },
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
.fol {
  margin-top: 160px;
}
</style>
