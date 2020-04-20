<template>
  <v-card
    max-width="400"
    class="mx-auto"
  >
    <v-container class="pa-1">
      <v-item-group
        v-model="selected"
        multiple
      >
        <v-row>
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
            md="6"
          >
            <v-item v-slot:default="{ active, toggle }">
              <v-img
                :src="`https://cdn.vuetifyjs.com/images/${item.src}`"
                height="150"
                class="text-right pa-2"
                @click="toggle"
              >
                <v-btn
                  icon
                  dark
                >
                  <v-icon>
                    {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                  </v-icon>
                </v-btn>
              </v-img>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'MusicList',
  data: () => ({
    items: [
      {
        src: 'http://b-ssl.duitang.com/uploads/item/201704/10/20170410095843_SEvMy.thumb.700_0.jpeg'
      },
      {
        src: 'http://b-ssl.duitang.com/uploads/item/201704/10/20170410095843_SEvMy.thumb.700_0.jpeg'
      },
      {
        src: 'http://b-ssl.duitang.com/uploads/item/201704/10/20170410095843_SEvMy.thumb.700_0.jpeg'
      },
      {
        src: 'http://b-ssl.duitang.com/uploads/item/201704/10/20170410095843_SEvMy.thumb.700_0.jpeg'
      }
    ],
    selected: []
  })
}
</script>

<style scoped lang="scss"></style>