import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutations-types.js'

Vue.use(Vuex)
// 单一状态树(单一数据源): 方便管理与维护
const moduleA = {
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
    AUpdateName(context) {//调用时和直接调用主模块中的actions方法相同，寻找时会先在主模块搜寻。
      setTimeout(() => {
        context.commit('UpdateName', 'JoJo')
        console.log(context);
      }, 1000);
    }
  }
}

export default new Vuex.Store({
  state: {  //保存状态的地方
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
  },
  getters: {//类似于计算属性
    powerCounter(state) {//state为默认参数,表示Vuex中的state
      return state.counter * state.counter
    },
    more20stu(state) {
      // return state.students.filter(n => {
      //   return n.age >= 19
      // })
      return state.students.filter(n => n.age >= 19)
    },
    more20stulength(state, getters) {//除了state外,还能传入参数getters
      return getters.more20stu.length
    },
    moreAgestu(state) {//不能直接传入参数,内部参数固定
      return function (age) {//如果在计算属性引用时传入参数,需要在这里使用
        return state.students.filter(a => a.age >= age)
      }
    }
  },
  mutations: {//跟踪同步操作（利用插件devtools） 如果想要更改state中的属性,必须通过mutations
    //方法
    [INCREMENT](state) {//state为默认参数,表示Vuex中的state
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, count) {//两参数,第一个state为默认参数,count为payload参数
      // console.log(count);
      state.counter += count
    },
    addstudent(state, stu) {
      state.students.push(stu)
    },
    infochange(state) {
      // 下列为响应式
      // state.info.name = 'nbf'

      // setTimeout(() => {  //模拟异步操作，如果使用异步操作，devtools会出现监听错误
      //   state.info.name = 'nbf'
      // }, 1000);
      // 如果要进行异步操作，需要在actions中操作然后重新调用
      state.info.name = 'nbf'

      // 直接改变后来值,一般不能做到响应式,响应式原理是因为在创建时对其内元素进行监听的.

      // 下列方法不是响应式  对数组来说,直接针对下标进行修改不能做到响应式,对于对象来说,直接给其添加一个键值对,也是非响应式
      // state.info['address'] = '洛杉矶'
      // 若想改为响应式可以用以下方法:
      // Vue.set(state.info, 'address', '洛杉矶')

      // 下列方式也做不到响应式:
      // delete state.info.age
      // 若想改为响应式,可用下方法:
      // Vue.delete(state.info, 'age')
    }
  },
  actions: {//异步操作
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
  },
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
