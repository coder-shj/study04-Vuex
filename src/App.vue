<template>
  <div id="app">
    <h2>---------App内容---------</h2>
    <h2>{{$store.state.counter}}</h2>
    <!-- 改数据时,不要直接进行修改,应该在$store中进行修改,否则浏览器插件无法跟踪 -->
    <button @click="addition">+</button>&nbsp
    <button @click="subtraction">-</button>&nbsp
    <button @click="addCount(5)">+5</button>&nbsp
    <button @click="addCount(10)">+10</button>&nbsp
    <button @click="addstudent">添加学生</button>

    <h2>---------App内容 modules的内容---------</h2>
    <!-- 通过state调用模块中的数据 -->
    <h2>{{$store.state.moduleA.name}}</h2>
    <button @click="changename">按钮</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <button @click="achangename">异步修改</button>

    <h2>---------App内容 getters相关信息---------</h2>
    <!-- <h2>{{$store.state.counter * $store.state.counter}}</h2> -->
    <h2>{{$store.getters.powerCounter}}</h2>
    <p>{{more20stu}}</p>
    <p>{{$store.getters.more20stu}}</p>
    <p>{{$store.getters.more20stulength}}</p>
    <p>{{$store.getters.moreAgestu(18)}}</p>

    <h2>---------App内容 数据响应式原理/异步操作---------</h2>
    <p>{{$store.state.info}}</p>
    <button @click="infochange">按钮</button></button>

    <h2>---------Hello Vuex内容---------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import {INCREMENT} from './store/mutations-types.js'
  import HelloVuex from './components/HelloVuex'
  export default {
    data() {
      return {
        message: 'Hello Vue'
      }
    },
    components: {
      HelloVuex
    },
    methods: {
      addition() {
        //通过调用$store中的commit方式调用Vuex中的mutations中的函数
        this.$store.commit(INCREMENT)
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCount(num) {
        // 在提交时,可以在后方多加一个参数,可以传入到store中
        // 普通的提交风格:
        this.$store.commit('incrementCount', num)

        //特殊的提交封装:
        // this.$store.commit({
        //   type: 'incrementCount',
        //   num  //以数组方式提交上去了
        // })
      },
      addstudent() {
        const stu = {id: 107, name: 'bob',age: 20}
        this.$store.commit('addstudent', stu)
      },
      infochange() {
        // this.$store.dispatch('UpdateInfo', '我是payload')
        // this.$store.dispatch('UpdateInfo',{
        //   message: '我是携带信息',
        //   success: () => {
        //     console.log('前面已成功')
        //   }
        // })
        this.$store
        .dispatch('UpdateInfo', '我是携带信息')
        .then(
          message => {
            console.log(message)
          }
        )
      },
      changename() {
        // 提交后的方法，会首先在主模块中进行搜索，搜寻不到回到子模块中搜寻
        this.$store.commit('UpdateName', 'jobs')
      },
      achangename() {
        this.$store.dispatch('AUpdateName')
      }
    },
    computed: {
      more20stu() {
        // return this.$store.state.students.filter(n => {
        //   return n.age >= 19
        // })
        return this.$store.state.students.filter(n => n.age >= 19)
      }
    }
  }
</script>

<style>

</style>
