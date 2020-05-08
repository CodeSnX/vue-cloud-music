<template>
  <v-app>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :single-select="singleSelect"
      item-key="name"
      show-select
      class="elevation-1"
    >
      <template v-slot:top>
        <v-switch
          v-model="singleSelect"
          label="单选"
          class="pa-3"
        ></v-switch>
      </template>
    </v-data-table>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: '歌单名',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: '作者', value: 'calories' },
        { text: '歌曲数', value: 'fat' },
        { text: '粉丝数', value: 'carbs' },
        { text: '播放量', value: 'protein' },
        { text: '热度', value: 'iron' }
      ],
      desserts: [
        {
          name: '100首工作看书刷题纯音乐',
          calories: '小王',
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '11'
        },
        {
          name: '全球历史上销量最高的100首单曲',
          calories: '小李',
          fat: 9.0,
          carbs: 37,
          protein: 43,
          iron: '11'
        },
        {
          name: '秋天来了，请使劲矫情',
          calories: '小张',
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '71'
        },
        {
          name: '寄存一首，胶片味道的歌',
          calories: '小言',
          fat: 37,
          carbs: 67,
          protein: 4.3,
          iron: '81'
        },
        {
          name: '《情书》——献给总是美丽的你',
          calories: '小刘',
          fat: 16.0,
          carbs: 49,
          protein: 39,
          iron: '161'
        },
        {
          name: '异域风情舞曲，放荡不羁的热情',
          calories: '小梦',
          fat: 100,
          carbs: 94,
          protein: 100,
          iron: '11'
        },
        {
          name: '孤独之战，奋力一搏——考试复习刷题用战歌',
          calories: '小赵',
          fat: 2,
          carbs: 98,
          protein: 0,
          iron: '21'
        },
        {
          name: '【华语】婚礼暖场，循环幸福。',
          calories: '小申',
          fat: 32,
          carbs: 87,
          protein: 65,
          iron: '451'
        },
        {
          name: '给你一剂抵挡四季抑郁的上好解药',
          calories: '小许',
          fat: 25.0,
          carbs: 51,
          protein: 49,
          iron: '221'
        },
        {
          name: '民谣狗',
          calories: '小席',
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '61'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
