// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存放轮播图数据的列表
    swiperList:[],
    //存放九宫格数据的列表
    gridList:[]
  },
  //获取轮播图数据的方法
  getSwiperList(){
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/slides',
      method:'GET',
      success:(res)=>{
        console.log(res);
        this.setData({
          swiperList:res.data
        })
      }
    })
  },
  //获取九宫格数据的方法
  getGridList(){
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/categories',
      method:'GET',
      success:(res)=>{
        console.log(res);
        this.setData({
          gridList:res.data
        })
      }
    })
  },
  //编程式导航 （跳转到tabbar页面 wx.switchTab 
  // 包含参数：success fun 接口调用成功的回调函数
  // 包含参数：fail fun 接口调用失败的回调函数
  // 包含参数：complete fun 接口调用结束的回调函数（成功失败都会调用）
  // ）
  gotoMessage(){
    wx.switchTab({
      url: '/pages/message/message'
    })
  },
  //编程式导航 （跳转到非tabbar页面 wx.navigateTo ）
  gotoInfo(){
    wx.navigateTo({
      url: '/pages/info/info',
    })
  },
  //编程式导航传参 
  gotoinfo2(){
    wx.navigateTo({
      url: '/pages/info/info?name=ls&age=22',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSwiperList();
    this.getGridList();
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