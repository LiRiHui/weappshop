// index.js
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getExtConfig({

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onShow: function () {

  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

  , selectTab: function (event) {
    // console.log("selected:",event)
    this.setData({
      tabSelectedIndex: event.currentTarget.dataset.tabid
    })
  },

  showLocation: function (event) {
    var location = this.data.location
    wx.openLocation({
      address: location.address,
      name: location.name,
      latitude: location.latidude,
      longitude: location.longitude,
    })
  },

  phoneCall: function () {
    var pn = this.data.phoneNumber
    wx.showActionSheet({
      itemList: ["呼叫 " + pn],
      success: function (res) {
        if (res.tapIndex == 0) {
          wx.makePhoneCall({
            phoneNumber: pn,
          })
        }
      }, fail: function (res) {
        console.log(res)
      }
    })
  },

  showCode: function () {
    wx.previewImage({
      urls: [this.data.codeUrl],
    })
  },

  showImages: function () {
    wx.previewImage({
      urls: this.data.bannerOriginalImages,
    })
  },

  showImage: function (event) {
    wx.previewImage({
      urls: [event.currentTarget.dataset.origin],
    })
  }

  /**
 * 页面的初始数据
 */
  , data: {
    bannerImages: ["http://i4.piimg.com/599607/f888c69f6d478aees.jpg", 
      "http://i4.piimg.com/599607/f2d19660169cd36fs.jpg", "http://i2.kiimg.com/599607/96633e3dd0d8b693s.jpg", "http://i4.piimg.com/599607/14ab50fbc4b0595es.jpg", "http://i2.kiimg.com/599607/ad5279f2d433082es.jpg", "http://i2.kiimg.com/599607/5246515921f1e37es.jpg", "http://i2.kiimg.com/599607/5b97e2cfaefe5e1cs.jpg","http://i2.kiimg.com/599607/6ae255403de409d4s.png"],
    bannerOriginalImages: ["http://i4.piimg.com/599607/f888c69f6d478aee.jpg", 
      "http://i4.piimg.com/599607/f2d19660169cd36f.jpg", "http://i2.kiimg.com/599607/96633e3dd0d8b693.jpg", "http://i4.piimg.com/599607/14ab50fbc4b0595e.jpg", "http://i2.kiimg.com/599607/ad5279f2d433082e.jpg", "http://i2.kiimg.com/599607/5246515921f1e37e.jpg", "http://i2.kiimg.com/599607/5b97e2cfaefe5e1c.jpg","http://i2.kiimg.com/599607/6ae255403de409d4.png"],
    vips: [{
      color:"#cbcbff",
      image: "http://i2.kiimg.com/599607/5d2449359bc7c51c.png",
      title: "银卡充值500元",
      subTitle: "享受洗澡美容9.5折优惠"
    },{
        color: "#f8c228",
      image: "http://i2.kiimg.com/599607/60fd1275def4bd45.png",
      title: "金卡充值1000元",
      subTitle: "享受洗澡美容9折优惠，商品9.5折优惠"
    }, {
        color: "white",
      image: "http://i2.kiimg.com/599607/24a645ec7acb63e0.png",
      title: "白金卡充值2000元",
      subTitle: "享受洗澡美容8.5折优惠，商品9折优惠"
    }, {
        color: "#c67239",
      image: "http://i2.kiimg.com/599607/04b2ad9c46c92403.png",
      title: "钻石卡充值3000元",
      subTitle: "享受洗澡美容8折优惠，商品9折优惠"
    }],
    notices: [{
      origin: "http://i2.kiimg.com/599607/a729729f18969f18.jpg",
      image: "http://i2.kiimg.com/599607/a729729f18969f18t.jpg",
      title: "买比瑞吉狗粮猫粮小包满100元",
      subTitle: "赠送价值20元高端零食！"
    }, {
        origin: "http://i4.piimg.com/599607/049742638e24fe18.jpg",
        image: "http://i4.piimg.com/599607/049742638e24fe18t.jpg",
      title: "买比瑞吉狗粮猫粮大包满300元",
      subTitle: "赠送价值80元高端零食+专用储粮桶！"
    }, {
      origin: "http://i2.kiimg.com/599607/1d62a752430b2b05.png",
      image: "http://i2.kiimg.com/599607/1d62a752430b2b05t.jpg",
      title: "买耐吉斯狗粮",
      subTitle: "送麦德氏超浓缩卵磷脂150G一盒！"
    }, {
      origin: "http://i4.piimg.com/599607/ae8e25c823b3ee1b.jpg",
      image: "http://i4.piimg.com/599607/ae8e25c823b3ee1bt.jpg",
      title: "grest犬猫综合营养膏",
      subTitle: "买二送一"
    }, {
      origin: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898.png",
      image: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898t.jpg",
      title: "转发文字及图片集满38个赞",
      subTitle: "送比瑞吉500g狗粮！"
    }],
    combos: [{
      origin: "http://i1.buimg.com/599607/0b777f6781f4ad0f.jpg",
      image: "http://i1.buimg.com/599607/0b777f6781f4ad0ft.jpg",
      title: "小型犬精致洗护套餐",
      subTitle: "（10斤内）39元！"
    }, {
      origin: "http://i1.buimg.com/599607/b86641a58b071218.jpg",
      image: "http://i1.buimg.com/599607/b86641a58b071218t.jpg",
      title: "中型犬精致洗护套餐",
      subTitle: "（30斤内）59元！"
    }, {
      origin: "http://i1.buimg.com/599607/3a38364ff58c81de.jpg",
      image: "http://i1.buimg.com/599607/3a38364ff58c81det.jpg",
      title: "大型犬精致洗护套餐",
      subTitle: "（50斤内）89元！"
    }, {
      origin: "http://i1.buimg.com/599607/46624f0ae2c7c193.jpg",
      image: "http://i1.buimg.com/599607/46624f0ae2c7c193t.jpg",
      title: "猫咪轻柔洗护套餐",
      subTitle: "98元！"
    }, {
      origin: "http://i1.buimg.com/599607/849ec510b336ca11.jpg",
      image: "http://i1.buimg.com/599607/849ec510b336ca11t.jpg",
      title: "萌宠创意造型",
      subTitle: "（10斤内）128元！"
    }],
    englishName: "Mango's Pet",
    name: "曼果宠物乐园",
    codeUrl: 'http://i2.kiimg.com/599607/ad5279f2d433082e.jpg',
    phoneNumber: "18502794699",
    location: {
      address: '武汉市武昌区宝通寺路百瑞景一期1-6商铺',
      latidude: 30.51974,
      longitude: 114.33411,
      name: '曼果宠物'
    },
    tabSelectedIndex: 0,
    openTime: '9:00-21:00',
    tabsHeight: 450
  }

})