/**
 * *@2019-1-17
 * *@author 小五
 * *@全局配置文件
 */
import { librarys } from '../assets/js/library'
// 引入全局变量
// axios请求
import * as http from './http/index'
// api 接口
import Api from './api/index'
// 正则匹配规则
import regular from './regular.js'
// 引入全局样式配置

// 图标字体库

// 引入全局组件

// vue配置文件
const options = {
  // 对象属性
  object: {
    // 配置属性
    config: {
    },
    // 配置全局变量
    prototype: {
      $api: Api, // 封装的ajax请求
      $http: http.default, // 封装的ajax请求
      $reg: regular, // 正则表达式
      $upload: librarys.upload,
    }
  },
  // 方法属性
  methods: {
    // 公共组件
    component: {
    },
    // 过滤器
    filter: {},
    // 自定义指令
    directive: {
      //  判断图片链接是否有效
      'imgLoad': {
        inserted: function (el, { value }) {
          librarys.loadImageAsync(value.src).then((url) => {
            el.src = url
          }, () => {
            // el.style.display = 'none'
          }).catch((error) => {
            console.log(error)
          })
        }
      }
    }
  }
}

export default {
  install: (Vue) => {
    const {object, methods} = options
    // 配置属性以及全局变量
    for (let k in object) {
      for (let i in object[k]) {
        Vue[k][i] = object[k][i]
      }
    }
    // 调取使用Vue全局方法
    for (let x in methods) {
      for (let a in methods[x]) {
        Vue[x](a, methods[x][a])
      }
    }
  }
}
