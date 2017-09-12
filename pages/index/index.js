
// index.js
Page({
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
    /*type: 'gcj02',
    wx.chooseLocation({
      success: function(res) {
         console.log(res)
       },
     })*/
    wx.openLocation({
      address: location.address,
      name: location.name,
      latitude: location.latidude,
      longitude: location.longitude,
    })
  },

  showCode: function () {
    wx.previewImage({
      urls: ["https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeNVsG82S8mNldiaicFaLZBlk0R8ruR1ueaUUiabryxhAiaN8kwa8mRtV1tw/0?wx_fmt=jpeg"],
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
  swiperChanged: function (event) {
    var current = event.detail.current
    this.setData({
      currentBannerIndex: current
    })
  }
, showHeader: function () {
    wx.previewImage({
      current: this.data.bannerOriginalImages[this.data.currentBannerIndex],
      urls: this.data.bannerOriginalImages,
    })
  }
  , showImages: function (event) {
    var arrName = event.currentTarget.dataset.arrName
    var arrIndex = event.currentTarget.dataset.arrId
    wx.previewImage({
      current: arrName[arrIndex],
      urls: arrName,
    });
  },
  /**
 * 页面的初始数据
 */
  data: {
    currentBannerIndex: 0,
    bannerImages: [
    "https://mmbiz.qpic.cn/mmbiz_png/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeWiaI7xKSTqom4ZA0wMgDaiaj4JdCHibUEXpEgO5hTHX2Jv9vakXdUPt4A/0?wx_fmt=png",
      "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeSc1mO8vP6zq3NnL9uCgKP112IGeyez22AZyxBKDgJMrHqzGurZAXiaA/0?wx_fmt=jpeg",
      "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeK8keWNU736eMn4M7k09fyVffb7B2524LiahOxd3SpOBgaVnPuIzhRHQ/0?wx_fmt=jpeg",
      "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe6dJcT0tLb06HLbOHQMDFVTfJcZiaA0DcOCATysP8r1jO7rAKdR8nyJQ/0?wx_fmt=jpeg",
      "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYedVP7sFI1EKw5Y0xibLpyzFiavvDXibhjpNibiaO40Zgdj2B8RFSodGPHSMg/0?wx_fmt=jpeg",
      "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeBWAiavYSgdZ86TRVzElrhXGjS3agjv229LibnCC7HtgSVOR1LXftHhPw/0?wx_fmt=jpeg",
      "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeNULDRia57OY6LHbhibZwQ97zqAQ5JYiaC7C3ahDYS0Z2YBOnNcAHbpwaw/0?wx_fmt=jpeg",        
    ],
    bannerOriginalImages: [
      "https://mmbiz.qpic.cn/mmbiz_png/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeWiaI7xKSTqom4ZA0wMgDaiaj4JdCHibUEXpEgO5hTHX2Jv9vakXdUPt4A/0?wx_fmt=png",
      "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeSc1mO8vP6zq3NnL9uCgKP112IGeyez22AZyxBKDgJMrHqzGurZAXiaA/0?wx_fmt=jpeg",
      "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeK8keWNU736eMn4M7k09fyVffb7B2524LiahOxd3SpOBgaVnPuIzhRHQ/0?wx_fmt=jpeg",
      "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYew8o9gBuuVfAv4rOejf3XQzkFoxMmEw2Se8bpWnHENFboz77Eo4tENg/0?wx_fmt=jpeg",
      "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeKYY9MbQibMNnjLJlJ7NwTnzhLwkIyp30GZ19Y6Yqj1icGJNr6aUjphpw/0?wx_fmt=jpeg",
      "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeUflvSo6l6RwJCvAxAoic6CGh30k5sj8C11P0yjJibfvdIUQ1fbRDkDxA/0?wx_fmt=jpeg",
      "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe0SZsAvsLHtKYnIbIcEwjTssdSHiccEia9YASyRDf4fSQNpZ47wo7XyhA/0?wx_fmt=jpeg",
      ],
    store_manager:{
      englistTitle: "STORE MANAGER RECOMMENDED",
      chineseTitle: "店长推荐",
      bestStore: [
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeDByI47gkf4fhUiaXgFKFm6Af5Jm76TOChgDia9PJss0MWl4MggtQwJIg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeLBt7NnyJAR08zHdX20jiaqCiav1NU7sn393vgPlAcbibXwMAxnggoGRyg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeo2A54GU1KjO8hc4ZcBERlxwibldibjBBvnmph41xNs6IEnIrOHkQWILQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYevIicjypfmVNnIzf7roArYicPGMLFIPEOQa0rgRs9iabnwiacgqWFiawU12Q/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeEvtXr2FnI6NhInaicIjrEBDhgwfexFF9aplrqUqicm9J1WkhLO8wMwQw/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeqDOekoZiaTdPcvsy0VXCKgjumicsWUaG8Qia5FNIddvTWcB9uySLmnyJQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeaqt0XAOymIyd9XRBO8YCBcObZoRBo7ZbTEicSnZPVl2GnojicVaCiawNQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYejwpeYibOAnyRwl8CVJOtIHjeEGNEpSpnQtqCFjDZuY4Vhmib9kFXBdOg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYezcjry9yuMhp81O6Ix82picuCEMwaUl6jgU2JFD0OHhmAN7TuTruVoqA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYekiaPRDpIfsw76YaDhazsmyxC8dFclWBFC1V8diaiaHfNI5TkDFLfhBl4Q/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYelotC8AsiajSY6ReKKDvHVIeO30CtA5sjONH9ra8Wpw2ASLEoOQlX2WQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe7IZqUdnHDtK7Pal6jicB7fup95beqE1ia3vPkev0dHQiaVibRWq0bxUynA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYetVuAjxeicvWicFnnaoGj1uDw7FvWsNfomjOkROYmjTClbd3Dd5VSb9uA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeupFwHJAKuprhTtAD6I29R5XibPKnX8eL06lD2iaic16VChE82ED1ArslQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeiaNTQswhTMA8eKYCN2EXYerRjh0mGjqU5wsib4axfFcZrl318XqSYoUA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe4vLyyfQYjzaInITLKGF2Lx2OibibPTgBtI4afVQwAANAcw7DFeRHdRzA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeibEmYNicXKq5STRXKSDp1ASq9KXk2tA0m135pJQAzLnPO62IibzobU0nQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe9ReO8Dvhag4Gbf5ZWw5VGmchg0a12ROpwoWmKibI5l1d20RGgdGsBUg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYePFEGG3uVhibXqOyzvcwKJ3FpzgtMibnXabghX4rnrmaBmiaNOUzGsdabw/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe0X4YTtmejBr74ic1n1ntt2BrC8HuQum7NzfBVOjFDXkfibzsPPkVUibmg/0?wx_fmt=jpeg",
"https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYetx4AFk94dBGaW40MXjPgNJNR4rZKAYBaUp0xSst1Yv8VNaF1icNqEaQ/0?wx_fmt=jpeg",
        ],
      bestStoreOrginal: [
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYel0mxgxmdCD9ldfNfnibZnrdDiagjG1ib3Z7nIMSVseAAGyib9TFm8NT33Q/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeicFVZJtgDkhQ73AlemdBMGor7Puk0225Wfj3GIBNxAQVJHHNnutS7eA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe9vwkv3Jz3FQovNoAkbD1UxNl7MJ37NBZIaUsstkxiby6WGSS4zUciaicA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYefL1aAJLIRXtKic8XUpvibFJcO0DEiaPia9fdu8lG5uS8qEeblbZiaOhYz2g/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYelEE4DBpvjcb6wZuXaBuWOmz9WNTSTvKQxl6Zabc51vTWkAial9az3nQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYekrqsibudGvIhicH0cffNTSCM9kxjqmic8WhNwXeobWPgKXAb6EKaF5LQA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYekcrZ7QkAg8AcRmv2QzfSdZCba8nBMHT5xkfHiba3VIDJsYicPOuZ3EMg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeibvI0GQqbia2vmExDGI6yDwZmO2YugNfhrH6ZtnXh3lABpvWYLTnynww/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeiaeib4icraich3IAbfPP0jhLr2sBD6noGCCicVDb1MyJXKDadzaNveD9Zag/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeOle2CPIGB23vEkyzBS2neebK8uaGQF1EPXRtYPKSIfAzp1u4GIrxaQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeAVpyZSDOXmD1wgic7PRaeUrzjYiaxrGD5riaNz6urWBRHOVKpWRFiaibt3g/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYemVT53NgKbpH3VOZm3MbiaLib5JH1sfmvomhMrTINUFOS1IpuaOjFYIfw/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe9QESoFxwMib3bnGAO0oHdz0PbkCVfO3Bak9hNVSeThFE8ZsVibDR01AA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe5hMQt3Lgu27MeianT3jA3SFxwZhsmPdD9TiblnybVeKcg9ia0S2XUV0lg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeJ8I5jaibJ4zjn8JUBNicQUbSwKofNKSksYY6exiayzbJQTl50CDQVkoGQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeHC3CWWSYm7hrygpAZ0y7ZgZxYkKsvgNqJwYwp6Xscb52TWV5SD7P3Q/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeBiccYUbOPrP0OFiaCrVEKib5sj3k5EDsc2RjTv1Hhia8DqylrdibiaibrqjIQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYetk0fWWKgQqtSpBoBBhqeUy6w63uAySHv3CrFGX7O4SVKjh8f2807Pg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeALGmuEa2Xdrrpd740Lh7ibD64gljibO5820IDWCbaFXUIXic9v3LZanvQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeKfuSxmXoEKX4sJ7yduGeEwvDNeYSthUiaicdnWzSptOicSO7icfQIKibkUw/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYehlLaNLqHLu30yg3A0VrmV0HpibnqGKxAIkicVM7smuVEegL4mdGsd7bA/0?wx_fmt=jpeg",
      ]
    },
  
    shoeAccSrc: [
      {
        englistTitle: "SHOES & ACCESSORIES",
        chineseTitle: "鞋子配饰",
        bestStore: [
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeomskJ4hQxjLzX7j7x4sw1IiavC45GqgCz614BcBSSkv3HrtaC1myhUg/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeyrE6B6cBiboficzoLp6RGYn6erCoZx0uEKQl5addA4ayRnlmYibTDkJTQ/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYevIicjypfmVNnIzf7roArYicPGMLFIPEOQa0rgRs9iabnwiacgqWFiawU12Q/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeo2A54GU1KjO8hc4ZcBERlxwibldibjBBvnmph41xNs6IEnIrOHkQWILQ/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYerYGNUBC3A6XVXdNgkYGjuvojgsiaXHTfQyGXticftkqNsH8HusibVcFew/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeslZeerBgZ22lllG9fY5RZTiaicicicvL1DUKULBTeHdLibriaQmOia5oias7Ig/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeuZeiaTvSmyGbCZHSmM7khtMdia0FTD7YJuk45NWJWicl61URbmoX4r4bA/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYePSYzeical8jaqCAzQcTvAianLgzkicmsVgcCT0rZyhia00H1icWZVC5S6DA/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYezjGiaZgqGgPYRPGdyIm1ewfwF4iaCcB6lZdoQwrAlbweqldob4ibnPKHw/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYefj4dT7T2z5TYudibIFwtRYjDJxUn0BH1vWZEeuZT8NL9WVw6Kt6f2Wg/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYewCO9OYSU4djtDlxsXl3zZlLsy7cdfH37aiakxodViascNw43kZWaRC4Q/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeQXInoUuRiclP6VFXT1DRUTKGNEVCbDUwiaZJ7tCeufPCcegUWQB9nRqg/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeA31MBjiaczWmE5FMLiaRr0SRGQ3TqkseroDBnSjjUPhYNJnDD8mq5WCw/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeiaNTQswhTMA8eKYCN2EXYerRjh0mGjqU5wsib4axfFcZrl318XqSYoUA/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYevothiaehoUOsSlgZ495eytf8VB9XgkgUYH1fmYsn2bgEemuM5VE8EibA/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYetVuAjxeicvWicFnnaoGj1uDw7FvWsNfomjOkROYmjTClbd3Dd5VSb9uA/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeebkvyP0olbicnn1PlkG06zzqqNJU34iceC1PgJrcyzBLvBEMhWgMvibOw/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe0X4YTtmejBr74ic1n1ntt2BrC8HuQum7NzfBVOjFDXkfibzsPPkVUibmg/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeo0zsoicCOkQ94cia7ZnTbBTF9ndePa4jrlHBoSyFSHibpVtQW0aksYp8Q/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYehWwibt4SB1GaianyMcbicUU7trUicKdKicdMe1U5TaiaEwGh6LXrHEclxVHw/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeyVPCJT0Q85iaYAvI6saF2EJCbKgOjl9jQfAKdoMh4uy3ficoKykjHIyw/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYekia6uVj2k0OpaDukXR8XFTAIcsJYs3rgFn9u3y8IdicY73VhtYuQzvZw/0?wx_fmt=jpeg",
        ],
        bestStoreOrginal: [
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeoFamIOn4PAJIQaLhbzatQ07z3ofDRADxOiautbt1DYiaVoLJP0PDOX6w/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeTmkss1oO9J1MeWyPHqf7Hnexqib7QnlSuozf6ECcpJmvu2gWibaE6SgA/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYefL1aAJLIRXtKic8XUpvibFJcO0DEiaPia9fdu8lG5uS8qEeblbZiaOhYz2g/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe9vwkv3Jz3FQovNoAkbD1UxNl7MJ37NBZIaUsstkxiby6WGSS4zUciaicA/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYefEayib08xSEcaoJq6Bthl7jLUuEDn7RmJ9WSP3w8qoLZmCUuQoyN57g/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeBbicPTwZU8TQcTqZiajpvEb0At1A5E1O6iakLcicfoJXBB0HVahkQE5Vpw/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeCBBRzrdvlqcROTJz6uKxs6o76mqTwic6s2IN8Z6K6FJQDgtg8HBEbuw/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeAK449GxpVGu0CV0EvicFW2GHG4bic8BgkIWRl1kBoVINianswYyxCVrdQ/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeHuicibCU8HFzRYHESHHTbrEApw699h9wXWflibCDxTVT7jhUqYdSoXShw/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYemRZhV3BWyCHUXic9bLwXZmSLvHzP8TynwRQkLsiaZCvKX6ZNPjUCaCeQ/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe3bM1Wbso9bUScicMTfF592EJfI1wOEndfURic7Tl4UTDiaPXNDCon49Mw/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeBFvgfmGhFnraOleP4ibMR9wk7Rus27aeuZUDLIrm5YmOFuTEj4WibZYg/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe6ou2UcI41cyWvkgmw0yibe35tSfkPnP3To1BwQOjmYKrD2E7YH09KZw/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeJ8I5jaibJ4zjn8JUBNicQUbSwKofNKSksYY6exiayzbJQTl50CDQVkoGQ/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYePwXPbEpeTFIMYLrQSd4Ggly3q1XJECo7wnSWghoDMSV80w4rZKz4DQ/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe9QESoFxwMib3bnGAO0oHdz0PbkCVfO3Bak9hNVSeThFE8ZsVibDR01AA/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeibT11uarjk5YCICRreKw0enMnVY1o5IYuWRicwdjXGro7iagptR4sc7Ng/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeKfuSxmXoEKX4sJ7yduGeEwvDNeYSthUiaicdnWzSptOicSO7icfQIKibkUw/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeXuR75K76HON67OrqEic2goafn3CHaqclGsea0qrrdguEDfiakvQon0NA/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYegFRoaWh93aLia4gbfkyzBF9laicaHtvtgwP8W9icP6dLiaSUT70m36QVlA/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYePtUM9vyyS8r6rEgCJhA6sTriaf5QESNL9vSKBmFSW9hfd9hk74ibp2Bg/0?wx_fmt=jpeg",
          "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYelAMDe4QvkE7bCZDpkic0p1D74Q4HjAnD2qryNMmnib1s5FTvnbiaK3kUw/0?wx_fmt=jpeg",
        ]
      },
    ],
    LuxuryList: {
      smallList:[
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYem2XW6Q80qNu19ZMiagrPbKPfpMctVicefOCGHeZkibbF1MMZlNX5nrsmA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeSvINpgDbK6hLoDDATrSjvn52fx2icX10drgdMuXxtkuwADXCZRokLnw/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYewRmCaYLMTH8R2M5hYKCrI3gzFvuialFACzmEQmyv1WEsgyOjWr5Hk7A/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe5Pq30VKJXLCtYet0iavsqRuZ7sTGLTCMapuNAfMh2B5kDibOEhycTckQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeBGJe3iaOgjckrqnNR8S0orbYBfUicIMamCTNmZoYcN4FzNwI4t2N5bEA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYejAJWgicciazP2TEXynyu1FfOkZcN23Cvd0zK9PcPe904XAicgazNn1feA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeB7M2DlY2SaibibHxs89pqrxb0ibfLydUXUHCeQJPPTfqEOPTJZib5L4vMQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe6W9InAiceEZX0zT8ZfyDiajnN8tibTeOFzJHpyoppo0FoCnBbukibfibCNQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeyuQTnF9MHFLWCYKpST6SqKPUT41cicyQ67ssptxSI9ajVN7Lo8DYzag/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeMszKiay0vvCYiaLDEEECcr7VbrxIz0oKiaHTq7flJnGNgLfhBWiceaG4uA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeICRicPdicA01QSd66Farf3YARhLOiadUsbyQNo29uzA1m5AI2m7WiaiciaeQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYemz39LQRja3ibZAhJkwSBMWViaQhEAlBdjmHZxuicmp1zuzBJsDibck8LNA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYecvtA20mzic9Toichibaeib25ib9ib1oyMTsmvYjVnzDhClbetLcIPX8CCWZg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe73Bic5AgAb4YO5V3UrFvvKQfRBU3zblEdRqtOt5aDVILC5xws2YSBUw/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeia5qyLb28EmvuPia7pDxWLVyqzE2ibic6cQ0JH0ACSzbTnSj6lqweN2nkQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeN06icplaFFsicoGTpAREIZVKOPDRiafo80e7hU4yhTxsQ8wNGBm7jicZvQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYetPbIFIP243dNqy4z913Mx4XudfUvnm08micIcYMeHWgw9RVNczfMnPg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYefbEgETgu7IffK2V7ao9Sytwygvwia0RucpziccrZicudiaAHxAKibXjaDtw/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYezAEEf5IL2tqvWHRph7AnOSicxzdhU0o97rtYF6cW80FwtlXkhOvqDEg/0?wx_fmt=jpeg",
      ],
      orginalList:[
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYemJoiaIcS1eoicrbZtibdYpPFpddkPq6RMCg8kWdgOqMibtnibuDusv8Iib4w/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeUegPpA0YYs4njKNtSyd0ejVEf7yEzQh5Cl8N4RCibXLMze6mSF7W6PQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe9xW4goh3lCEf1ps6v19UmJ58jzK3SHWOAYjP4MMtTDTPkBPLqw15AA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYehTPXkrqknAKcZQcjqAV5eEyJLDhe8ZGTJ6WmW26kjcJLSfrBPicD9cg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeal1AQ0Fy0WjlyCO9MBKY8aExiaBNqELdDJVYFvfhpbJC6qvIL3HnDYw/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYefApRHm4YfyicT4gh2J7Mx4YVnhQY6TTgDfYry13Yuiao4btUM4kVqf1Q/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYelDyw6Y0NJ3UJZKZd7hADSEdjRmQhuENz2LgiaWD7AMcqoJJyF4onqFQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe4K7WNlFtZVVmRmLzQn63B5iaxg7pTcNdl2giaCwcRun3Tmic7OO0GYcWg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeFNYyzBeKVSHhDwiaWUJicLBOUTfXTmlAFzxPOeUBHdGLWVicWiaR6yYedw/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeGt61tqFwfeVkBxgNujgNmA39GiaOW2XarhdLaicicm5F47ZGqgMlHCmeg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeABVXHYJXQnZBibBPsXLzqmsZ2DAoRSj1cVmR0SkKoPibcj6zD9RpfX4w/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYexELS2jiboLiczyquPN8hVDsq1O8pX1ibtv47BmCM8kzMfngckRxYibsjUw/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe5S7W91nEOicvHGZThDQpTYgFXEQKZEM3UorSLqAhGAuibYYjxjUe0YFQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYebYRaDzFPEdEveCrx8sjOxKgFNX0NgYa8Gqicj0Br2yXaN4SEicHThv9w/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeXoiblGFq11fVnwu2jcrpLvfnTUMjlK8L2J94Oo9icqAHlZicL9sDJ3u0g/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeEhk2WuzIUManOSEENP35kbAXlMmOVdSVK0YbVTGYbgicLWvao3fWTRQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYepibYM4ictia6LWkqvoNWUWbFuKYvAARQ0alzScxN2ibGKaRbbRLQMa7HFg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeUzoR7Qia7tOxiatsG7tWaJGs3ZSicoUjpDkSibWHXWXuL6vWKczK9ABrUA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeibsKP9XSia1NZQhcmHJKZEpz7Ny7Ja4nsdEE8008gibQfHWEmVJayFQyw/0?wx_fmt=jpeg",
    ]}
    ,
    fashionProList: {
      smallList: [
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeR1XoVrj2UT7lwiaDsic5rNEA30yhFKUwTTwFCWQkWgypC8osvtlAiaSEg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeJCjTunEITVMPlxxpzwEezPQFicCDmJ8VJZQtaSVgDBMp1lBcDHwb1Ww/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeqDicOeuM7OgldsOIT9sH7Xb234SOkzW3SorBm7q4HvuBSDud79lKtwA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe3hr78fLAicG9krIxCgkYDoCFZV1G7ia3QVIXrdz68ovIcawUgPMNiavGA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeWElic0I0ibrBicR1WHxAQMT0ficK3vTVzFhTp6qa6jbVz9wxJia4z1EBydw/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeDByI47gkf4fhUiaXgFKFm6Af5Jm76TOChgDia9PJss0MWl4MggtQwJIg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe84nUg6W4ZzwX3CFBnDgicv9Ralzvic6BccHCxKfmRVe8ugTk9jqBFtYA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeEPJHmmvicLmGGlFL1c8SSicsEicg9XX3kG9jUcKUfXw3IrUBNTSLgiayNw/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeb7DjvGosZqDpzqfBsic7hAhPLUxosDHxLvODT7TZrSYJdp90dzykjGw/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYefTFDHK475aGBZRQOdmnhRaOaj8W5OGHSW8BgLxJbSwmDSNsLhz0WBA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeE0T4w3qfAUy1JjibmBhzYy7PLjcBrlQow6qSBBslhGjEYic9r8riaMCtA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYelPLcruNCT3bYB4xU1rsibNYnmDTacxHLEyvzhdsWo5zhuz8WXg1INtg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeMeCFdvLV4atJ8pghJAG3wTvx3icPt9w8FNnD09AqvStaYQDU00FfEEQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYecNRxp07fmyHejVNicNfJkibQUQ6jCP8PQu7ruV8J9euKJbUQZfOYiam2g/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe3neuyHk67wfkUibCkYxbvHDaEgUOJxYbaFXic3tbwgXFNFiaDhM5CMmmw/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYemdoPibZKCB0gN54TofWQT8FP3Oicz0mZ6LFv5qesVh79yGwQTt4Y5ibKA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeweNC2iblKibu96ZCSlh0sb3KicAKGGf80O5JxmKwZiazgibkR7H60t5bK7g/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeTF99ONOhicxKQ1NSqH61FZ2PhU4iahmjg7bqv5oIjuFicsu3iafEibvJDGw/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYegyeMO19s9qcgXrMaSHonPQqv8ATrnBJmwlJc33eicaicjgc9oRIYtdJA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe3JAgaAyU0rfepWFTV5XxXmia9T2Qzk8Mlic0UuzzicxIuf0PgBTGgNx0A/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe6yYP1m4s5TDv7YNcDbqqHdmaSqibjVOcff69Xkus1IyWsRPibxz80bZg/0?wx_fmt=jpeg",
      ],
      orginalList: [
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeNyvp4ec4nDc403gGoRfqFGw8IDDkSAV6vjhb2q41ydJuQ5St3luLbw/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeXmRtLaUqWAzK7DGT8n6fpV6HpkrbqfDWeiblPEiaARLXtQcUPmVTR4PQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe8LasM32BUAwTumLc1jURgPwNEmtlZkJHSEIHeX6L6xiaFIMCvoPZDUw/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeA8YvRzPaiaqTkkU9lCzLDUj5chmMosv2L1rmCK7LTgyF7JO5DAlHZ0A/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeesBP3hJQtnUiawe2ZibaSTYOeqTXpNQb9FzoiaeHbm5JnepychL721Yhg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYel0mxgxmdCD9ldfNfnibZnrdDiagjG1ib3Z7nIMSVseAAGyib9TFm8NT33Q/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYex8AR4pAC7m7w5cdS6bjvCfolzYpVGljGUcb31TSoUFzy2yOKeYFShA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeHnMxaAbj18doeC5f6Bicnf2pIt9CAr9ohOZ8JsGX1mLyfl9y7qlkHiaA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeUibACghkFXo6WqDy4O1nc0StYOkZjsTskmAiam97WdcicTGZGblFlnfwA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe1wWnOFdxREtibWANxAxZ5icNdqgovzQ0SlbclQBw17mreJcKajYpf1Cg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYekMbvVSVfAFZxIuF5h1zVmQrIIKYMDdJtOxRibzubkJFmLNziaibLXOgqQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe6dLwiaU9scia1q5es19NZoLhRURvT2DvkQVfXEAgQ6mhjCSkboYFS6Pg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe93rqZrxdrQn68kNy5xiaf2SFzLO1Cke2SZOfx2FGzHZia5nOekcjSkgQ/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe9FSib49GXVsvEqmU09W3Zj6k71nIBtI2J7RVFjs9rvUC2PZeleSmY2w/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYecmI6zEqib6aIRibKO2EXicnQ36THdiblibnGAqsZqP8xwN5L26E9ND5vasg/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYejsvVLyHWXflcrhFoyLVRVkN7ndjia0IvQluJqaZH0pzpbGUkELaA3VA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYePVsWvoH1L64Lk16LWt2vOAykf4zicMMZ8nBG4LRicZP0jpaCoNc0oWTA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYeeqwIFGK2fq7lDXKh1NSKPJp6diadKURKicP8fhYlT84myAn9hr8bqw8Q/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYegyeMO19s9qcgXrMaSHonPQqv8ATrnBJmwlJc33eicaicjgc9oRIYtdJA/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe3JAgaAyU0rfepWFTV5XxXmia9T2Qzk8Mlic0UuzzicxIuf0PgBTGgNx0A/0?wx_fmt=jpeg",
        "https://mmbiz.qpic.cn/mmbiz_jpg/wKHKiaWGF2OGZjKMEwH4XAApdyFr8VBYe6yYP1m4s5TDv7YNcDbqqHdmaSqibjVOcff69Xkus1IyWsRPibxz80bZg/0?wx_fmt=jpeg",
    ]},
    phoneNumber: "13971668851",
    location: {
      address: '武汉武昌区解放路338号潮流百货2楼D29号',
      longitude: 114.29847,
      latidude: 30.5416,
      name: '武汉尚之品包包店'
    },
    tabSelectedIndex: 0,
    introduction: "  尚之品，主营包包、鞋子、皮带及各类配饰。本店提供订货服务(请提供图片或是款式颜色)。\n  因上图有限颜色及款式不能一一展示可添加本店微信，查看更多款式新品。\n  品质诚信为本，欢迎来店选购。",
    openTime: '10:30-21:00'
  }

})