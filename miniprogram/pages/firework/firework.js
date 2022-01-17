// miniprogram/pages/eat2/eat2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isStart: 0,
    dotTimer: null,
    fireList: [],
    imgSrc: '../../images/1.jpeg',
    //  {
    //   id: 1,
    //   width: '100rpx',
    //   left: '50%',
    //   top: '10%'
    // }, {
    //   id: 2,
    //   width: '200rpx',
    //   left: '10%',
    //   top: '1%'
    // }, {
    //   id: 3,
    //   width: '150rpx',
    //   left: '30%',
    //   top: '20%'
    // }

    isShowStartDialog: false
  },

  handleCloseMask: function() {
    this.setData({
      isShowStartDialog: false
    })
  },

  handleBtnClick: function() {
    this.setData({
      isShowStartDialog: true
    })
    var eat = this.selectComponent("#eat")
    eat.handleStartClick()
  },

  handleStartClick: function () {
    this.setData({
      fireList: []
    })

    let list = []
    for (let i = 1; i < 30; i++) {
      let idRandom = ~~(Math.random() * 3 + 1) //1,2,3 烟花图样式
      let left = this.randomNum(-10, 81) + '%';
      let top = this.randomNum(-50, 11) + '%';
      list.push({
        id: idRandom ,
        width: '70rpx',
        left: left,
        top: top,
        second: ~~(i/3) + .8,
        isStart: 0
      })
    }

    for (let i = 1; i < 50; i++) {
      let idRandom = ~~(Math.random() * 3 + 1) //1,2,3
      let width = (idRandom + 1) * 50 + 'px'
      let left = this.randomNum(-10, 81) + '%';
      let top = this.randomNum(-20, 71) + '%';
      list.push({
        id: idRandom ,
        width: '140rpx',
        left: left,
        top: top,
        second: ~~(i/3) + .7,
      })
    }

    this.setData({
      fireList: list
    })

    console.log(list, 'list')

    // clearTimeout(this.data.dotTimer)
    // this.setData({
    //   isStart: 1
    // })

    // let timer = setTimeout(() => {
    //   this.setData({
    //     isStart: 2
    //   })
    // }, 1000)

    // this.setData({
    //   dotTimer: timer
    // })
  },


  randomNum: function (m, n) {
    var num = Math.floor(Math.random() * (m - n) + n);
    return num;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // setTimeout(()=>{
    //   this.handleStartClick()
    // },1000)
    let idRandom = ~~(Math.random() * 4 + 1) //1,2,3
    this.setData({
      imgSrc: '../../images/b'+idRandom+'.jpeg'
    })
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