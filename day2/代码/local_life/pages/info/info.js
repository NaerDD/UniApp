// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //点击事件传递的参数进行存储
    query:{}
  },
  //编程式导航 后退事件 不配置信息 默认delta=1
  // 包含参数：delta number 接口调用返回的层数
  // 包含参数：success fun 接口调用成功的回调函数
  // 包含参数：fail fun 接口调用失败的回调函数
  // 包含参数：complete fun 接口调用结束的回调函数（成功失败都会调用）
  // goBackFun(){
  //   wx.navigateBack()
  // },
  goBackFun(){
    wx.navigateBack({
      delta:1,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
    this.setData({
      query:options
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})