<template>
  <mu-container class="button-wrapper">
    <mu-text-field
      v-model="username"
      label="昵称"
      label-float
    ></mu-text-field><br />
    <mu-text-field
      v-model="avatar"
      label="头像链接地址"
      full-width
    ></mu-text-field><br />
    <mu-text-field
      v-model="password"
      label="密码"
      label-float
    ></mu-text-field><br />
    <mu-flex
      justify-content="center"
      align-items="center"
    >
      <mu-button
        round
        color="success"
      >确认修改</mu-button>
    </mu-flex>
  </mu-container>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      username: '',
      password: '',
      avatar: ''
    }
  },
  created() {},
  methods: {}
}
</script>
<style lang="scss">
.button-wrapper {
  .mu-button {
    margin: 8px;
    vertical-align: middle;
  }
  a.mu-button {
    text-decoration: none;
  }
}
</style>
