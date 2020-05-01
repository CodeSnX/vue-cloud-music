<template>
  <div>
    <img
      :src="admin.avatar"
      @click="changeAvatar()"
      alt=""
    />
    <input
      type="file"
      title="更改头像"
      id="file"
      @change="uploadAvatar($event)"
      ref="InputFile"
      name="files"
    />
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      admin: JSON.parse(localStorage.getItem('admin')),
      avatar: ''
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    changeAvatar() {
      this.$refs.file.click()
    },
    // 更改头像的方法
    uploadAvatar(event) {
      const OSS = require('ali-oss')
      let client = new OSS({
        region: 'oss-cn-shanghai',
        accessKeyId: 'LTAI4FpzLFy8uA2PWAXH8cwQ',
        accessKeySecret: 'XLTomRADcglUJ5IgRrHxWKJMjPqg8b',
        bucket: 'blog-manage'
      })
      let timestamp = Date.parse(new Date())
      let imgUrl = 'img/' + timestamp
      var file = event.target.files[0] //获取文件流
      var _this = this
      client.multipartUpload(imgUrl, file).then(function(result) {
        _this.avatar = result.res.requestUrls[0]
        _this.updateAdminAvatar(_this.avatar)
      })
    },
    //更换头像
    updateAdminAvatar(url) {
      console.log('头像地址：' + url)
      this.axios({
        method: 'put',
        url: 'http://localhost:8023/sysAdmin/update',
        data: {
          avatar: url
        }
      }).then((res) => {
        if (res.data.code == 1) {
          this.user.avatar = url
          this.$store.commit('setUser', this.user)
          localStorage.removeItem('user')
          localStorage.setItem('user', this.user)
        }
      })
    }
  },
  computed: {}
}
</script>

<style lang="scss"></style>
