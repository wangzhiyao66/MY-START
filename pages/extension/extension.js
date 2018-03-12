Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeimages:'http://lingakg.oss-cn-shanghai.aliyuncs.com/zhiwen/home-t.png'
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
  bindViewextension:function(){
    wx.navigateTo({
      url: '../recommend/recommend',
    })
  }
})