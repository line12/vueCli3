<template>
  <div id="app">
    <a @click="getdata">点击获取数据</a>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { Toast } from 'vant'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  created (){

  },
  methods: {
    getdata () {
      let params={}
      console.log('接口数据'+JSON.stringify(this.$api))
      this.$http[this.$api.getData.method]('/mock/'+ this.$api.getData.url, params, false, false)
        .then((response) => {
          console.log(response)
          Toast('获取数据成功')
        })
        .catch((errror) => {
        });
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  display: flex;
  width: 750px;
  height: 100px;
  background-color: red;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
