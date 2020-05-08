<template>
  <v-app>
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
          color="white"
        >
          <v-toolbar-title>歌单</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-on="on"
              >添加</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.name"
                        label="歌名"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.calories"
                        label="歌手"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.fat"
                        label="作曲"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.carbs"
                        label="标签"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.protein"
                        label="专辑"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >确定</v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >取消</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >Reset</v-btn>
      </template>
    </v-data-table>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: '歌名',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: '歌手', value: 'calories' },
      { text: '作曲', value: 'fat' },
      { text: '标签', value: 'carbs' },
      { text: '专辑', value: 'protein' },
      { text: '修改', value: 'actions', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: '',
      fat: '',
      carbs: '',
      protein: ''
    },
    defaultItem: {
      name: '',
      calories: '',
      fat: '',
      carbs: '',
      protein: ''
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? '新的歌曲' : '修改歌曲'
    }
  },

  watch: {
    dialog(val) {
      val || this.close()
    }
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: '凤凰劫',
          calories: '河图',
          fat: '河图',
          carbs: '华语',
          protein: '凤凰'
        },
        {
          name: '那些年',
          calories: '胡夏',
          fat: '木村充利',
          carbs: '华语',
          protein: '那些年'
        },
        {
          name: '快乐颂',
          calories: '吴青峰',
          fat: '吴青峰',
          carbs: '华语',
          protein: '快乐'
        },
        {
          name: '相逢何必曾相识(粤)',
          calories: '蒋志光',
          fat: '蒋志光',
          carbs: '粤语',
          protein: '相逢'
        },
        {
          name: '黎明',
          calories: '贾鹏芳',
          fat: '贾鹏芳',
          carbs: '华语',
          protein: '黎明'
        },
        {
          name: '想你的三百六十五天',
          calories: '李玟',
          fat: '李伟菘',
          carbs: '华语',
          protein: '想你'
        },
        {
          name: '那些你很冒险的梦',
          calories: '林俊杰',
          fat: '林俊杰',
          carbs: '华语',
          protein: '那些你很冒险的梦'
        },
        {
          name: '鬼迷心窍',
          calories: '李宗盛',
          fat: '李宗盛',
          carbs: '经典',
          protein: '鬼迷心窍'
        },
        {
          name: '为你我受冷风吹',
          calories: '林忆莲',
          fat: '李宗盛',
          carbs: '经典',
          protein: '为我你受冷风吹'
        },
        {
          name: '你那么爱她',
          calories: '李隆璇',
          fat: '李隆璇',
          carbs: '华语',
          protein: '你那么爱她'
        }
      ]
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item)
      confirm('您确定要删除这首歌曲吗?') && this.desserts.splice(index, 1)
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

<style scoped lang="scss">
</style>
     