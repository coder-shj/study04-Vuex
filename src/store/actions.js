export default {//异步操作
  // UpdateInfo(context, payload) {  //context：上下文  在该操作中表示本store  也可以传入参数
  //   setTimeout(() => {
  //     context.commit('infochange')
  //     // console.log(payload);
  //     console.log(payload.message);
  //     payload.success()
  //   }, 1000);
  // },
  UpdateInfo(context, payload) {  //context：上下文  在该操作中表示本store  也可以传入参数

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('infochange')
        console.log(payload);
        resolve('成功，回调函数')
      }, 1000);
    })
  }
}