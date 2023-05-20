// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0
  },
  syncCount(e){
    console.log("syncCount");
    console.log(e.detail.value);
    this.setData({
      count:e.detail.value
    })
  },
  getChild(){
    //这里可以传类选择器 或者ID选择器
    // .customCa 或者 #cA
     const child = this.selectComponent('.customA')
    //  console.log(child);
    // 调用子组件实例上的属性
    // child.setData({
    //   count:child.properties.count + 1
    // })
    // 调用子组件中定义的方法 子组件中定义的method在_proto_上 可以直接调用
    child.addCount()
    // 这里调用子组件上的方法 同时触发自定义事件 达成子组件再传递给父组件数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("触发了上拉触底事件");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})