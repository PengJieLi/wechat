// miniprogram/pages/eat/eat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    eatList: [{
      id: 'index0',
      name: '麻辣烫',
      class: 'eat-list0',
      img: 'malatang.jpeg'
    }, {
      id: 'index1',
      name: '煎饼',
      class: 'eat-list1',
      img: 'jianbing.png'
    }, {
      id: 'index2',
      name: '包子',
      class: 'eat-list4',
      img: 'baozi.png'
    }, {
      id: 'index3',
      name: '烤冷面',
      class: 'eat-list3',
      img: 'kaolengmian.jpg'
    }, {
      id: 'index4',
      name: '海底捞',
      class: 'eat-list3',
      img: 'haidilao.png'
    }, {
      id: 'index5',
      name: '串串',
      class: 'eat-list3',
      img: 'chuanchuan.jpeg'
    }, {
      id: 'index6',
      name: '鸭脖',
      class: 'eat-list3',
      img: 'yabo.png'
    },{
      id: 'index7',
      name: '螺蛳粉',
      class: 'eat-list3',
      img: 'luoshifen.jpeg'
    }],
    curIndex: -1,
    timer: null,
    toView: '',
    count: 0,
    foodCon: '麻辣烫,煎饼',
    isShowDialog: false,
    isShowEndDialog: false,
    endConList: [
      '天要我胖，不得不胖',
      '恋爱可以慢慢谈，肉必须趁热吃',
      '吃货的最高境界：眼见为食!',
      '没有什么是一顿饭解决不了的问题，如果有，那就是两顿',
      '人生就是要吃吃吃!穿穿穿!',
      '吃或者不吃，肉肉都会长，那还是吃吧。',
      '你的吃相是最美的模样',
      '没有喝不完的奶茶 只有过不去的过去',
      '当吃货挺好的，吃着吃着什么都忘了。',
      '我承受了这个年纪不该有的饭量'
    ],
    endCon: '',
    eatImgSrc: '',
    endName: ''
  },

  handleStartClick: function () {
    const conSub = Math.random() * this.data.endConList.length

    this.setData({
      count: 0,
      curIndex: 0,
      toView: `index0`,
      endCon: this.data.endConList[~~conSub]
    })
    clearInterval(this.data.timer)
    const sub = Math.random() * this.data.eatList.length
    var timer = setInterval(() => {
      let index = this.data.curIndex + 1
      this.setData({
        curIndex: index,
        toView: `index${index}`,
      })
      if (index == this.data.eatList.length) {
        this.setData({
          count: this.data.count + 1,
          curIndex: -1,
          toView: `index0`,
        })
      }
      if (this.data.count >= 1) {
        if (index == ~~sub) {
          console.log(index, 'index')
          clearInterval(this.data.timer)
          this.setData({
            eatImgSrc: this.data.eatList[index].img || '',
            isShowEndDialog: true,
            endName: this.data.eatList[index].name || ''
          })
          return
        }
      }
    }, 300)
    this.setData({
      timer: timer
    })
  },

  handleCloseEndDialog: function () {
    this.setData({
      isShowEndDialog: false
    })
  },

  handleAddClick: function () {
    this.setData({
      isShowDialog: true
    })
  },

  handleCancle: function () {
    this.setData({
      isShowDialog: false
    })
  },

  handleConfirm: function () {

    let list = this.data.foodCon.split(/,|，|\s+/)
    let newlist = []

    list.forEach((item, index) => {
      let flag = false
      this.data.eatList.forEach((value) => {
        if (item == value.name) {
          newlist.push(value)
          flag = true
        }
      })
      if (!flag) {
        newlist.push({
          id: `index${index}`,
          name: item,
          class: `eat-list${index%5}`,
          img: 'default.png'
        })
      }
    })

    this.setData({
      eatList: newlist,
      isShowDialog: false
    })
  },

  bindTextAreaBlur: function (e) {
    this.setData({
      foodCon: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let str = ''
    this.data.eatList.forEach((item, index) => {
      if (index == 0) {
        str = str + item.name
      } else {
        str += ',' + item.name
      }
    })
    console.log(str, 'str')
    this.setData({
      foodCon: str
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