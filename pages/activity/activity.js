Page({

  data: {
    //单选框内容
    xueyuanArray:['软件学院','计算机学院','信息科学学院','物理学院'],
    xueyuanIndex:0,
    typeArray:['实践活动','会议','奖惩公告','通知'],
    typeIndex:0,
    statusArray:['未开始','进行中','已结束'],
    statusIndex:0,
    orderArray:['时间排序','人数排序'],
    orderIndex:0,
    //活动内容
    activityTitle:'入党积极份子大会',
    activityTime:'2020年4月1日',
    activityPosition:'软件楼',
    activityJoinSum:'30',
    activityIssuer:'党支部党委书记',
    activityDate:'2020-5-1',
    imageUrl:'/images/滑动窗/2.jpg',
  },

  //picker显示选择值函数
  bindPickerChangeXueyuan: function(e){
    //console.log(e);
    this.setData({xueyuanIndex:e.detail.value});
  },
  bindPickerChangeType: function (e) {
    this.setData({ typeIndex: e.detail.value });
  },
  bindPickerChangeStatus: function (e) {
    this.setData({ statusIndex: e.detail.value });
  },
  bindPickerChangeOrder: function (e) {
    this.setData({ orderIndex: e.detail.value });
  },
  

  onLoad: function (options) {
    
  },

  onReady: function () {
    
  },

  onShow: function () {
    
  },

  onHide: function () {
    
  },
  onUnload: function () {
  },
  onPullDownRefresh: function () {
  },

  onReachBottom: function () {
  },
  onShareAppMessage: function () {
    
  }
})