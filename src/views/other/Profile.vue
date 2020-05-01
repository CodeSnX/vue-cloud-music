<template>
  <v-container>
    <v-card
      max-width="375"
      class="ml-1"
    >
      <v-img
        :src="admin.avatar"
        height="300px"
        dark
        v-ripple
      >
        <v-row class="fill-height">
          <v-card-title>
            <v-spacer></v-spacer>
            <v-btn
              dark
              icon
              class="mr-1"
              @click="change"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-card-title>

          <v-spacer></v-spacer>
        </v-row>
      </v-img>

      <v-list two-line>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="cyan">mdi-email</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ admin.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="cyan">mdi-map-marker</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ admin.id }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-spacer></v-spacer>
  </v-container>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      admin: this.$store.state.admin
    }
  },
  created() {
    this.$store.commit('setAdmin', JSON.parse(localStorage.getItem('admin')))
  },
  methods: {
    change() {
      this.admin.id = '123456789'
      this.admin.name = 'new name'
      this.$store.commit('setAdmin', this.admin)
    }
  }
}
</script>
<style scoped lang="scss">
.mr-1 {
  margin-top: -240px;
  margin-left: 300px;
}
</style>
