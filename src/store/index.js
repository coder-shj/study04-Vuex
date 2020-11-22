import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)
// 单一状态树(单一数据源): 方便管理与维护

const state = {  //保存状态的地方
  counter: 1000,
  students: [
    { id: 101, name: 'Tom', age: 15 },
    { id: 102, name: 'Jack', age: 19 },
    { id: 103, name: 'Kobe', age: 21 },
    { id: 104, name: 'Rose', age: 18 },
  ],
  info: {
    name: 'codershj',
    age: 20,
    height: 1.80
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {//专门划分模块,针对模块进行数据的保存
    moduleA,
    b: {
      state: {

      },
      getters: {

      },
      mutations: {

      },
      actions: {

      }
    }
  }
})
