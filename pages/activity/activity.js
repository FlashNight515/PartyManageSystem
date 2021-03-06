//云数据库初始化
wx.cloud.init({ env: "party-test-3q2zh" })
const db = wx.cloud.database({ env: "party-test-3q2zh" })
Page({

  data: {
    //单选框内容
    arrayAcademy:['归属组织','软件学院','计算机学院','信息科学学院','物理学院'],
    acBelong:'归属组织',
    arrayObject:['活动对象','入党申请人','入党积极分子','发展对象','预备党员','正式党员'],
    acObject:'活动对象',
    arrayStatus:['筛选','最新活动','递增排序','递减排序',''],
    acStatus:'筛选',
    //活动对象数组
    arrayActivity: [],

  },
  onLoad: function (options) {
    var that = this;
    //获取活动对象
    db.collection('activity').get({
      success: function (res) {
        that.setData({
          arrayActivity: res.data
        })
      }
    })
  },
  //学院选择器
  bindPickerChangeXueyuan: function(e){
    this.setData({ acBelong:this.data.arrayAcademy[e.detail.value]});
    var that = this;
    //获取活动对象
    if (that.data.acBelong =='归属组织'){
      that.onLoad()
    }else{
      db.collection('activity').where({
        activity_issuer: that.data.acBelong
      }).get({
        success: function (res) {
          that.setData({
            arrayActivity: res.data
          })
        }
      })
    }
  },
  //对象选择器
  bindPickerChangeType: function (e) {
    this.setData({ acObject: this.data.arrayObject[e.detail.value] });
    var that = this;
    if(that.data.acObject=='活动对象'){
      that.onLoad()
    }else{
      //获取活动对象
      db.collection('activity').where({
        activity_object: that.data.acObject
      }).get({
        success: function (res) {
          that.setData({
            arrayActivity: res.data
          })
        }
      })
    }
  },
  //筛选条件选择器
  bindPickerChangeStatus: function (e) {
    var that=this
    this.setData({ acStatus: this.data.arrayStatus[e.detail.value] });
    var status = this.data.acStatus
    //获取现在日期
    var nowTime = new Date().getTime()
    if (status=='筛选'){
       that.onLoad()
    }else if(status=='最新活动'){
      db.collection('activity').get({
        success:function(res){
          var activitys=res.data
          var array=[]
          var i=0
          for(i;i<activitys.length;i++){
            let time=new Date(activitys[i].activity_date)
            if(time>nowTime){
              array.push(activitys[i])
            }else{
            }
          }
          that.setData({
            arrayActivity:array
          })
        }
      })
    }else if(status=='递增排序'){
      db.collection('activity').orderBy('activity_date','asc').get({
        success:function(res){
          that.setData({
            arrayActivity:res.data
          })
        }
      })
    }else if(status=='递减排序'){
      db.collection('activity').orderBy('activity_date', 'desc').get({
        success: function (res) {
          that.setData({
            arrayActivity: res.data
          })
        }
      })
    }
  },
  //点击列表事件
  tapActivity:function(e){
    var that=this
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '/pages/activity/activityDetail/activityDetail?activity_id='+that.data.arrayActivity[e.currentTarget.id]._id,
    })
  }
  
  
})