// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({ env: "party-test-3q2zh"})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {

  var message_id=event.id
  return await db.collection('message').doc(message_id).update({
    data:{
      message_isRead:1
    }
  })
  
}