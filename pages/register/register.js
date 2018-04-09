Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '../img/rmd/00.png',
    username: '',
    password: '',
    Email:''
  },
  bindViewTap: function () {
    console.log('123');
  },
  // -------------------获取用户账号和密码----------------
  getuser: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  getEmail:function(e){
    this.setData({
      Email: e.detail.value
    })
  },
  getpassword: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  login: function () {
    let obj = {
      'user': this.data.username,
      'password': this.data.password
    }
    console.log('login', obj);
    wx: wx.navigateTo({
      url: '../login/login',
    })
  },
  addUser: function () {
    wx: wx.navigateTo({
      url: '../login/login',
    })
  }


})