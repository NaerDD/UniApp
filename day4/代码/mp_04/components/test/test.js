// components/test/test.js
Component({
  /**
   * 组件的属性列表  properties倾向于存储外界传递到组件中的数据
   */
  properties: {
    // 第一种方式：简化的方式 不需要指定默认值
    // max:Number
    // 第二种方式：完整的定义方式 如果外界没传值就为10 传了就以外界的值为准
    max:{
      type:Number,
      value:10
    }
  },

  /**
   * 组件的初始数据 data倾向于存储组件的私有数据
   */
  data: {
    count:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击事件处理函数
    addCount(){
      //这里data中也有max属性 说明data和props是在同一块区域的
      console.log(this.data.max);
      // 如果count大于max就return出去 不让它加
      if(this.data.count >= this.properties.max) return
      this.setData({
        count:this.data.count + 1,
        // 本质上data数据和prop属性没有任何区别 因此prop属性的值也可以用于页面渲染
        // 或使用setData为prop中的属性重新赋值
        max:this.properties.max + 1
       })
        //函数内部 调用自定义函数
       this._showCount()
      },
      //自定义方法以_开头
      _showCount() { 
        // showToast 弹出提示消息方法
        wx.showToast({
          title: 'count值为:' + this.data.count,
          icon:'none'
        })
      }
    }
})
