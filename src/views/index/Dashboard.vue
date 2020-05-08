<template>
  <v-app>
    <v-container fluid>
      <v-row dense>
        <template class="card-left">
          <v-card
            class="mx-auto"
            width="500"
          >
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="headline">安徽 阜阳</v-list-item-title>
                <v-list-item-subtitle>星期五，上午9:00，晴</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-text>
              <v-row align="center">
                <v-col
                  class="display-3"
                  cols="6"
                >
                  23&deg;C
                </v-col>
                <v-col cols="6">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                    alt="Sunny image"
                    width="92"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-text>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-send</v-icon>
              </v-list-item-icon>
              <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cloud-download</v-icon>
              </v-list-item-icon>
              <v-list-item-subtitle>48%</v-list-item-subtitle>
            </v-list-item>

            <v-slider
              v-model="time"
              :max="6"
              :tick-labels="labels"
              class="mx-4"
              ticks
            ></v-slider>

            <v-list class="transparent">
              <v-list-item
                v-for="item in forecast"
                :key="item.day"
              >
                <v-list-item-title>{{ item.day }}</v-list-item-title>

                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-subtitle class="text-right">
                  {{ item.temp }}
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn text>完整报告</v-btn>
            </v-card-actions>
          </v-card>
        </template>
        <template class="card-right">
          <v-card
            :loading="loading"
            class="mx-auto"
            width="500"
          >
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>

            <v-card-title>咖啡馆Badilico</v-card-title>

            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ml-4">4.5 (413)</div>
              </v-row>

              <div class="my-4 subtitle-1">
                $•意餐，咖啡馆
              </div>

              <div>小盘子，沙拉和三明治-12个室内座位加露台座位的私密环境。</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>今晚有空</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>

                <v-chip>8:00PM</v-chip>

                <v-chip>9:00PM</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
              >
                保留
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      labels: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      time: 0,
      forecast: [
        { day: '星期六', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
        { day: '星期日', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
        { day: '星期一', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.mx-auto {
  margin-top: 10px;
}
.card-left {
  width: 50%;
  margin-left: 10px;
}
.card-right {
  width: 50%;
  margin-right: 10px;
}
</style>
