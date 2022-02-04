// pages/learn/learn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:"hello world",
    imgSrc:"../../images/1.webp",
    randomNum1:Math.random()*10
  },
  onClick(e){
    console.log(e);
    //点击事件，以冒泡方式向外扩散
    console.log(e.target,"源头组件");
    console.log(e.currentTarget,"正在触发的组件");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})