// pages/find/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"梦回大唐，百年盛世",
    list:[
      {id:1,name:"张三"},
      {id:2,name:"李四"},
      {id:3,name:"王五"},
      {id:4,name:"赵六"},
      {id:5,name:"吴七"},
    ],
    flag:true,
    backgroud:'hide',
    
  },
change(){
  this.setData({
    msg:"残剑断刃弑手足，青龙玄武现真身"
  })
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