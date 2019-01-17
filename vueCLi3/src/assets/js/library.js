/**
 * 方法库类
 */
class Libaray {
  /**
   * 为元素绑定样式
   */
  eleSetStyle (options) {
    const {dom, styles} = options
    if (this.dataType(styles) === 'object') {
      for (let k in styles) {
        dom.style[k] = styles[k]
      }
    } else {
      console.log('请传入对象参数')
    }
  }
  /**
   * 校验数据格式
   */
  dataType = params => {
    let type = Object.prototype.toString.call(params)
    type = type.split(' ')[1].replace(']', '').toLowerCase()
    return type
  }
  /**
   * 检验数据是否是有效数据（排除空数组，空对象，null，defined，0归为有效，false归为有效）
   */
  dataIsEffective = params => {
    const type = this.dataType(params)
    const invalid = ['undefined', 'null']
    if (invalid.indexOf(type) >= 0) {
      return 'invalid'
    } else if (type === 'array' && JSON.stringify(params) === '[]') {
      return 'emptyArr'
    } else if (type === 'object' && JSON.stringify(params) === '{}') {
      return 'emptyObj'
    } else if (params === '') {
      return 'emptyStr'
    } else {
      return 'effective'
    }
  }
  /**
   * 获取元素的样式属性
   */
  getStyle = (element, attr) => {
    let result = element.currentStyle ? element.currentStyle[attr] : window.getComputedStyle(element, null)[attr]
    if (result === 'auto') {
      return 0
    } else {
      return result
    }
  };
  /**
   * 为元素绑定多个属性的兼容代码
   */
  addEventListener = (element, type, fn) => {
    if (typeof (element.addEventListener) !== 'undefined') {
      element.addEventListener(type, fn, false)
    } else if (typeof (element.attachEvent) !== 'undefined') {
      element.attachEvent('on' + type, fn)
    } else {
      element['on' + type] = fn
    }
  }
  /**
   * 验证图片是否存在
   * @param {'图片链接'} url
   */
  loadImageAsync (url) {
    return new Promise(function (resolve, reject) {
      const image = new Image()
      image.src = url
      image.onload = function () {
        resolve(url)
      }
      image.onerror = function () {
        reject(url)
      }
    })
  }
}
const librarys = new Libaray()
export {librarys}
