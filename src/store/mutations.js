import { INCREMENT } from './mutations-types.js'

export default {//跟踪同步操作（利用插件devtools） 如果想要更改state中的属性,必须通过mutations
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
}