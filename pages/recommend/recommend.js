Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://lingakg.oss-cn-shanghai.aliyuncs.com/zhiwen/rmd/01.png',
      'http://lingakg.oss-cn-shanghai.aliyuncs.com/zhiwen/rmd/02.png',
      'http://lingakg.oss-cn-shanghai.aliyuncs.com/zhiwen/rmd/03.png',
      'http://lingakg.oss-cn-shanghai.aliyuncs.com/zhiwen/rmd/04.png'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  bindViewlogin:function(){
    wx:wx.navigateTo({
      // url: '../index/index',
      url: '../login/login',
      success: function(res) {
        console.log('data',res)
      }
    })
  }
})