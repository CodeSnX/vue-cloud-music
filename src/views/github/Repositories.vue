<template>
  <v-app>
    <v-container>
      <v-card
        width="500"
        class="mx-auto"
      >
        <v-list two-line>
          <v-list-item-group
            v-model="selected"
            multiple
            active-class="pink--text"
          >
            <template v-for="(item, index) in data">
              <v-list-item :key="item.name">
                <template>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                    <v-list-item-subtitle
                      class="text--primary"
                      v-text="item.headline"
                    ></v-list-item-subtitle>
                    <v-list-item-subtitle v-text="item.description"></v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-list-item-action-text v-text="item.name"></v-list-item-action-text>
                    <v-icon
                      v-if="!active"
                      color="grey lighten-1"
                    >
                      star_border
                    </v-icon>

                    <v-icon
                      v-else
                      color="yellow"
                    >
                      star
                    </v-icon>
                  </v-list-item-action>
                </template>
              </v-list-item>

              <v-divider
                v-if="index + 1 < items.length"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Repositories',
  data() {
    return {
      selected: [2],
      data: null
    }
  },
  components: {},
  created() {
    this.axios.get('http://localhost:8023/oauth2/code/github/getInfo').then((res) => {
      this.data = JSON.parse(res.data.data.repos)
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
