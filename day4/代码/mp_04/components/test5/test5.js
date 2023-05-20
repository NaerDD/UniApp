// components/test5/test5.js
 const myBehavior = require('../../behaviors/my-behavior')
Component({
  // 外部引入需要用到的
  behaviors:[myBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    // 声明类型即可 ，具体值通过父组件默认传值而来
    count:Number,
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 组件中的username高于behavior中的数据，因为是进行了重写
    username:'ls'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount(){
      //子组件中 +1
      this.setData({
        count:this.properties.count + 1
      })
      // 触发 父组件传递过来的函数 并带上希望传递给父组件的参数
      this.triggerEvent('sync',{value:this.properties.count})
    }
  }
})
