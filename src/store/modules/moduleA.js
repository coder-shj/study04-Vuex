export default {
  state: {
    name: 'linus'
  },
  getters: {
    fullname(state) {//调用时和直接调用主模块中的getters方法相同，寻找时会先在主模块搜寻。
      return state.name + '123'
    },
    fullname2(state, getters, rootstate) {  //子模块getters中方法有三个默认参数，state，getters，rootstate
      return getters.fullname + rootstate.counter
    }
  },
  mutations: {
    UpdateName(state, payload) {//调用时和直接调用主模块中的mutations方法相同，寻找时会先在主模块搜寻。
      state.name = payload
    }
  },
  actions: {
    AUpdateName(context) {//调用时和直接调用主模块中的mutations方法相同，寻找时会先在主模块搜寻。
      setTimeout(() => {
        context.commit('UpdateName', 'JoJo')
        console.log(context);
      }, 1000);
    }
  }
}