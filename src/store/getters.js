export default {//类似于计算属性
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
}