Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../img/rmd/01.png',
      '../img/rmd/02.png',
      '../img/rmd/03.png',
      '../img/rmd/04.png'
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