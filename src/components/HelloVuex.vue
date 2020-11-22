<template>
    <div>
      <h2>{{$store.state.counter}}</h2>
      <h2>{{$store.getters.powerCounter}}</h2>
      <p>{{$store.getters.more20stu}}</p>
    </div>
</template>

<script>
  export default {
    name: "HelloVuex"
  };
</script>

<style scoped lang="less">

</style>
