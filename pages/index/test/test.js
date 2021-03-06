//云数据库初始化
wx.cloud.init({ env: "party-test-3q2zh" })
const db = wx.cloud.database({ env: "party-test-3q2zh" })
Page({
  data: {
    arrayLearn: [],//课程对象数组
    arrayTest: [],//考核对象数组
  },

  onLoad: function (options) {
    var that=this
    //获取学习列表
    db.collection('study').get({
      success:function(res){
        that.setData({
          arrayLearn:res.data
        })
      }
    })
    //获取考核列表
    db.collection('exam').get({
      success: function (res) {
        that.setData({
          arrayTest: res.data
        })
      }
    })
  },
  //学习列表点击事件
  tapLearn:function(e){
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '/pages/index/test/learnDetail/learnDetail?id='+e.currentTarget.id,
    })
  },
  //考核列表点击事件
  tapTest: function (e) {
    var that=this
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '/pages/index/test/beforeTest/beforeTest?examID=' + that.data.arrayTest[e.currentTarget.id]._id,
    })
  }

})